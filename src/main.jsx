import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './routes'
import './index.css'
// window.$api = "https://backend-exconox.vercel.app"

window.$api = 'http://localhost:3001'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
)
