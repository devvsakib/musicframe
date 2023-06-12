import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/common.tailwindcss.css'
import AuthProvider from './contexts/AuthProvider';
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import router from './routes/Router'
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Toaster
          position="top-left"
          reverseOrder={false}
          toastOptions={{
            style: {
              borderRadius: '10px',
              backgroundColor: '#232635',
              color: '#0EB7BE',
            }
          }}
        />
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
