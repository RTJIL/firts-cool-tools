import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appp from './List.jsx' 
import Apppp from './Proptst.jsx'
import MailClient from './StateStructure.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MailClient />
  </StrictMode>,
)
