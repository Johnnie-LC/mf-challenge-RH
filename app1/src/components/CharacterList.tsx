import React from 'react'
import { CharacterContainer } from './styles'
import CharacterCard from './CharacterCard'
import { type Character } from '../types.d'

interface Props {
  characters: Character[]
  isLoading: boolean | null
}

export default function CharacterList ({ characters, isLoading }: Props) {
  return (
        <CharacterContainer>
        {
            characters?.map(item => <CharacterCard key={item.id} character={item} isloading={isLoading} />)
        }
        </CharacterContainer>
  )
}
