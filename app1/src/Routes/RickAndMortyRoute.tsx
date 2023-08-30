import React from 'react'
import { Route, Routes } from 'react-router-dom'
import RickAndMortyRemote from '../RickAndMortyRemote'
import { type Languaje } from '../types.d'
// import { RickAndMortyComponent } from '../OtroRick/Ejemplo'

interface Props {
  lang: Languaje
}

export default function RickAndMortyRoute ({ lang }: Props) {
  return (
      <Routes>
          {/* <Route path='/RickAndMorty' element={<RickAndMortyRemote language={lang} />}/> */}
          <Route path='/RickAndMorty' element={<RickAndMortyRemote language={lang} />}/>

      </Routes>
  )
}
