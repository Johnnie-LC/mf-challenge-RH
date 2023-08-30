import React, { useState } from 'react'
import usePokemonAPI from './hooks/useHarryPotterAPI'
import { HarryPotterContainer } from './PokemonStyles'
import PokemonList from './components/HarryPotterList'
import useStoredCharacters from './hooks/useStoredPokemons'
import useTranslation from './hooks/useTranslation'
import { type Languaje } from './types.d'
import { useTranslateAndParseTextToObjectLiteral } from './hooks/useTextToObjectLiteral'

interface Props {
  language: Languaje
}

const HarryPotterRemote = ({ language }: Props) => {
  const { characters } = usePokemonAPI()
  const { storedCharacters, setStoredCharacters } = useStoredCharacters(characters.slice(0, 20))
  const { translatedText, getTranslate, isLoading } = useTranslation()
  const [wasTranslated, setWasTranslated] = useState<Languaje>('en')

  useTranslateAndParseTextToObjectLiteral(
    language,
    wasTranslated,
    translatedText,
    getTranslate,
    setStoredCharacters,
    storedCharacters,
    setWasTranslated
  )

  return (
  <>
    <HarryPotterContainer>
      <div className='title'>
          <h1>Harry Potter</h1>
      </div>
      <PokemonList characters={storedCharacters} isLoading={isLoading} />
    </HarryPotterContainer>
  </>
  )
}

export default HarryPotterRemote
