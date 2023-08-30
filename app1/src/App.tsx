import React, { StrictMode } from 'react'
import './index.css'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import RickAndMortyRoute from './Routes/RickAndMortyRoute'

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
  <StrictMode>
    <BrowserRouter>
      <RickAndMortyRoute lang={'es'}/>
    </BrowserRouter>
  </StrictMode>
)
