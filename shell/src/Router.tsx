import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import SelectLanguage from './components/SelecteLanguageButton'
import SafeComponent from './components/SafeComponent'

import RickAndMortyRemote from 'App1/RickAndMortyRemote'
import HarryPotterRemote from 'App2/HarryPotterRemote'

export default function Router () {
  const [language, setLanguage] = useState<'en' | 'es'>('en')

  return (
    <BrowserRouter>
    <NavBar>
      <SelectLanguage language={language} setLanguage={setLanguage}/>
    </NavBar>
    <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/RickAndMorty' element={
      <SafeComponent>
        <RickAndMortyRemote language={language}/>
      </SafeComponent>
      }/>

      <Route path='/HarryPotter' element={
      <SafeComponent>
        <HarryPotterRemote language={language}/>
      </SafeComponent>
      }/>

      <Route path='*' element={<NotFound />}/>
    </Routes>
  </BrowserRouter>
  )
}
