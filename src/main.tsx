import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/responsive.css'
import './index.css'
import './styles/notes.css' // Notes section styles won't work without this
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)