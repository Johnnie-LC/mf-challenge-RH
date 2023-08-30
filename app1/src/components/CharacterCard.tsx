import React from 'react'
import { CharacterCardContainer, CharacterImage, CharacterInfo } from './styles'
import { type Character } from '../types.d'

interface Props {
  character: Character
  isloading: boolean | null
}

export default function CharacterCard ({ character, isloading }: Props) {
  return (
    <CharacterCardContainer data-testid={'character-card'} key={character.id}>
    <CharacterImage>
      <img src={character.image} alt={character.name} />
    </CharacterImage>
    {
      (!isloading || (isloading === null)) && (
        <CharacterInfo>
          <p>{character.name}</p>
          <p>{character.gender}</p>
          <p>{character.species}</p>
          <p>{character.status}</p>
        </CharacterInfo>
      )
    }
    {
      isloading && (
        <CharacterInfo>
          <p>-----------</p>
          <p>-----------</p>
          <p>-----------</p>
          <p>-----------</p>
        </CharacterInfo>
      )
    }
  </CharacterCardContainer>)
}
