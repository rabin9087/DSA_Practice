import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
// import { router } from './constant/routers.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
   {/* <RouterProvider router={router}> */}
      <App />
      {/* </RouterProvider> */}
      </BrowserRouter>
  </React.StrictMode>,
)
