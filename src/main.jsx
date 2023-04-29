import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './routes'
import './index.css'
window.$api = "https://backend-exconox-project.vercel.app/"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Index/>
  </React.StrictMode>,
)
