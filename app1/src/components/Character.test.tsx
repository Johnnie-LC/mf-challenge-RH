import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import CharacterCard from './CharacterCard'
import { type Character } from '../types.d'

const mockedCharacter: Character = {
  id: 1,
  name: 'Jhon doe',
  status: 'live',
  species: 'human',
  gender: 'male',
  image: 'www.jhonDoe.com'
}

describe('<ChracterCard />', () => {
  it('should render the info', () => {
    render(<CharacterCard character={mockedCharacter} isloading={false} />)

    const name = screen.getByText(mockedCharacter.name)
    const status = screen.getByText(mockedCharacter.status)

    expect(name).toBeInTheDocument()
    expect(status).toBeInTheDocument()
  })

  it('should render lines when is traslating', () => {
    render(<CharacterCard character={mockedCharacter} isloading={true} />)
    const isLoadingInfo = screen.getAllByText('-----------')
    expect(isLoadingInfo[0]).toBeInTheDocument()
  })
})
