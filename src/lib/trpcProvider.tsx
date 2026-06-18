<<<<<<< HEAD
// @ts-nocheck
=======
>>>>>>> e8b91e6 (first commit)
import React, { useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { trpc } from './trpc';
import superjson from 'superjson';

export function TRPCProvider({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
<<<<<<< HEAD
          url: 'http://localhost:5000/api/trpc', // URL where the backend is running
          transformer: superjson, // Provide transformer to the link
          // You can pass any headers here if needed
=======
          url: `${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/trpc`,
          transformer: superjson,
>>>>>>> e8b91e6 (first commit)
          async headers() {
            const token = localStorage.getItem('token');
            return {
              ...(token ? { authorization: `Bearer ${token}` } : {}),
            };
          },
        }),
      ],
<<<<<<< HEAD
      transformer: superjson,
=======
>>>>>>> e8b91e6 (first commit)
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
