import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './style/settings/App.css'
import './style/settings/style.css'
import '../src/components/Header/header.css'
//! aos
import "aos/dist/aos.css"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
