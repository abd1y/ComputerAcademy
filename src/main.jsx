import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/style.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import './i18n';

import '@vime/core/themes/default.css';
import '@vime/core/themes/light.css';
import '@vime/core';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    
    <App/>  

    
    </BrowserRouter>
    
  </StrictMode>
)
