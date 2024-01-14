import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/app/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { appChildren } from './app/routes'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: appChildren,
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
