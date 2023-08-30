import React from 'react'
import '@testing-library/jest-dom'
import { act, render, screen, waitFor } from '@testing-library/react'
import RickAndMortyRemote from './RickAndMortyRemote'
// import { RickAndMortyComponent } from './OtroRick/Ejemplo'

// Simulamos el módulo de fetch para controlar las respuestas de la API
global.fetch = jest.fn(async () =>
  await Promise.resolve({
    json: async () =>
      await Promise.resolve({
        results: [
          {
            id: 1,
            name: 'Rick Sánchez',
            status: 'Alive',
            species: 'Derechos humanos',
            gender: 'Hombre',
            image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
          },
          {
            id: 2,
            name: 'Morty Smith',
            status: 'Alive',
            species: 'Derechos humanos',
            gender: 'Hombre',
            image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
          },
          {
            id: 3,
            name: 'Summer Smith',
            status: 'Alive',
            species: 'Derechos humanos',
            gender: 'Mujeres',
            image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
          },
          {
            id: 5,
            name: 'Jerry Smith',
            status: 'Alive',
            species: 'Derechos humanos',
            gender: 'Hombre',
            image: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
          }
        ]
      })
  })
) as jest.Mock

describe('<RickAndMortyRemote />', () => {
  it('render in english language', async () => {
    await act(async () => render(<RickAndMortyRemote language='en'/>))

    // Esperamos hasta que se muestren los elementos después de la llamada a la API
    await waitFor(() => {
      const rickElement = screen.getByText('Rick Sánchez')
      const mortyElement = screen.getByText('Morty Smith')
      expect(rickElement).toBeInTheDocument()
      expect(mortyElement).toBeInTheDocument()
    })
  })
})
