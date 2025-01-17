import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Components/Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvaider from './Authentication/Provaider/AuthProvaider.jsx'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvaider>
      <QueryClientProvider client={queryClient}>
        <HelmetProvider>
          <RouterProvider router={Router} />
        </HelmetProvider>
      </QueryClientProvider>
    </AuthProvaider>
  </StrictMode>,
)
