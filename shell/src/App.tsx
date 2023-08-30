import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Router from './Router'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <StrictMode>
    <Router />
  </StrictMode>
)
