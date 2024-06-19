import { createHashRouter } from 'react-router-dom'
import { InnerApp } from './App.tsx'
import { Home } from './Home.tsx'

export const routes = createHashRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/:id',
    element: <InnerApp />,
  },
])
