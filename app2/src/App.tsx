import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import HarryPotterRemote from './HarryPotterRemote'
import './index.css'

const App = () => (<HarryPotterRemote language={'en'} />)

const root = createRoot(document.getElementById('app') as HTMLElement)
root.render(
      <StrictMode>
        <App />
      </StrictMode>
)
