import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component from './pages/UncontrolledComponents.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Component />
  </StrictMode>,
)
