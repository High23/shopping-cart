import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import { ShopCategoriesNavigation } from './components/shopping/shop-page.jsx'


const router = createBrowserRouter([
  {
    path: "/*",
    element: <App></App>,
  },
  {
    path: "/:directory",
    element: <App></App>,
  },
  {
    path: "/:directory/:category",
    element: <App></App>,
  },
  {
    path: "/:directory/:category/:type",
    element: <App></App>,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
