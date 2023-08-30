import React from 'react'
import { HarryPotterCardContainer, HarryPotterImage, HarryPotterInfo } from './styles'
import { type Character } from '../types.d'

interface Props {
  character: Character
  isloading: boolean | null
}
const image = 'https://assets.mycast.io/actor_images/actor-an-unknown-actor-465215_large.jpg?1656098263'

export default function HarryPotterCard ({ character, isloading }: Props) {
  return (
    <HarryPotterCardContainer data-testid={'character-card'} key={character.id}>
    <HarryPotterImage>
      <img src={character.image ? character.image : image} alt={character.name} />
    </HarryPotterImage>
    {
      (!isloading || (isloading === null)) && (
        <HarryPotterInfo>
          <p>{character.name}</p>
          <p>{character.gender}</p>
          <p>{character.species}</p>
        </HarryPotterInfo>
      )
    }
    {
      isloading && (
        <HarryPotterInfo>
          <p>-----------</p>
          <p>-----------</p>
          <p>-----------</p>
        </HarryPotterInfo>
      )
    }
  </HarryPotterCardContainer>)
}
