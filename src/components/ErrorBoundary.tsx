import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);

    // Automatically recover from stale asset chunk hashes after new deployments
    if (
      error.message?.includes('Failed to fetch dynamically imported module') ||
      error.message?.includes('Importing a module script failed') ||
      error.message?.includes('dynamically imported module')
    ) {
      const storageKey = 'vite_chunk_reload_attempts';
      const attempts = parseInt(sessionStorage.getItem(storageKey) || '0', 10);
      if (attempts < 2) {
        sessionStorage.setItem(storageKey, (attempts + 1).toString());
        window.location.reload();
      }
    }
  }

  public render() {
    if (this.state.hasError) {
      const isChunkError =
        this.state.error?.message?.includes('Failed to fetch dynamically imported module') ||
        this.state.error?.message?.includes('Importing a module script failed');

      return (
        <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-gray-50">
          <div className="text-center max-w-md p-8 bg-white rounded-xl shadow-lg border border-red-100">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {isChunkError ? "App Updated" : "Something went wrong"}
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              {isChunkError
                ? "A new version of the website has been deployed. Please refresh to load the latest features."
                : "We're sorry, but an unexpected error occurred. Our team has been notified."}
            </p>
            <div className="bg-gray-100 p-4 rounded text-left mb-6 overflow-auto text-xs text-red-800 font-mono max-h-32">
              {this.state.error?.message || "Unknown error"}
            </div>
            <button
              onClick={() => {
                sessionStorage.removeItem('vite_chunk_reload_attempts');
                window.location.reload();
              }}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-md"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
