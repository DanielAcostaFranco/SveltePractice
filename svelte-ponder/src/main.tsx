import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import App from './App'

const rootElement = document.getElementById('app')

if (!rootElement) {
  throw new Error('Could not find the app root element.')
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
