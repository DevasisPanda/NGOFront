import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './trpc';
import superjson from 'superjson';

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  
  const getApiUrl = () => {
    const raw = import.meta.env.VITE_API_URL;
    if (!raw) {
      if (typeof window !== 'undefined') {
        const { hostname, port } = window.location;
        if ((hostname === 'localhost' || hostname === '127.0.0.1') && port === '5173') {
          return 'http://localhost:5000/api/trpc';
        }
      }
      return '/api/trpc';
    }

    const trimmed = raw.trim().replace(/\/$/, '');
    if (trimmed.endsWith('/api/trpc')) {
      return trimmed;
    }
    return `${trimmed}/api/trpc`;
  };

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: getApiUrl(),
          transformer: superjson,
          async headers() {
            const token = localStorage.getItem('token') || localStorage.getItem('authToken');
            return {
              ...(token ? { authorization: `Bearer ${token}` } : {}),
            };
          },
        }),
      ],
    }),
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
