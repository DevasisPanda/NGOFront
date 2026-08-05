declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

// Send event to GA4
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Track button clicks
export function trackButtonClick(buttonName: string, pagePath?: string) {
  trackEvent('button_click', {
    button_name: buttonName,
    page_path: pagePath || (typeof window !== 'undefined' ? window.location.pathname : ''),
  });
}
