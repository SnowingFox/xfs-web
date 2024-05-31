import { createHashRouter } from 'react-router-dom'
import { InnerApp } from './App.tsx'

export const routes = createHashRouter([
  {
    path: '/:id',
    element: <InnerApp />,
  },
])
