import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CharacterList from './CharacterList'

const charactersMock = [
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

const isLoading = false

describe('<CharacterList />', () => {
  it('renders characters when not loading', () => {
    render(<CharacterList characters={charactersMock} isLoading={isLoading} />)
    const characterCards = screen.getAllByTestId('character-card')
    expect(characterCards).toHaveLength(charactersMock.length)
  })

  it('renders loading state when translating', () => {
    render(<CharacterList characters={charactersMock} isLoading={true} />)

    const loadingIndicator = screen.getAllByText('-----------')
    loadingIndicator.forEach(element => {
      expect(element).toBeInTheDocument()
    })
  })
})
