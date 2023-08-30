import React from 'react'
import { HarryPotterContainer } from './styles'
import PokemonCard from './PokemonCard'
import { type Character } from '../types.d'

interface Props {
  characters: Character[]
  isLoading: boolean | null
}

export default function CharacterList ({ characters, isLoading }: Props) {
  return (
        <HarryPotterContainer>
        {
            characters?.map(item => <PokemonCard key={item.id} character={item} isloading={isLoading} />)
        }
        </HarryPotterContainer>
  )
}
