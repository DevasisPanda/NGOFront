import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { TRPCProvider } from './lib/trpcProvider.tsx'
<<<<<<< HEAD
=======
import { AuthProvider } from './contexts/AuthContext.tsx'
>>>>>>> e8b91e6 (first commit)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TRPCProvider>
<<<<<<< HEAD
      <App />
=======
      <AuthProvider>
        <App />
      </AuthProvider>
>>>>>>> e8b91e6 (first commit)
    </TRPCProvider>
  </StrictMode>,
)
