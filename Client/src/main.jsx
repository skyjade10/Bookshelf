import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BackendProvider } from './components/context/BackendContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BackendProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </BackendProvider>
)
