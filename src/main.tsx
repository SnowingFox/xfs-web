import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router.tsx'

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <RouterProvider router={routes} />
    </QueryClientProvider>
  </React.StrictMode>,
)
