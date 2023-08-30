import React, { useEffect, useMemo, useState } from 'react'
import CharacterList from './components/CharacterList'
import useTranslation from './hooks/useTranslation'
import { RickAndMortyContainer } from './RickAndMortyStyles'
import useStoredCharacters from './hooks/useStoredCharacters'
import { getParseTextToLiteralObject, getAllCharactersToString } from './utils'
import useRickAndMortyAPI from './hooks/useRickAndMortyAPI'
import { type Languaje } from './types.d'

interface RickAndMortyProps {
  language: Languaje
}

const RickAndMortyRemote = ({ language }: RickAndMortyProps) => {
  const { characters } = useRickAndMortyAPI()
  const { storedCharacters, setStoredCharacters } = useStoredCharacters(characters)
  const { translatedText, getTranslate, isLoading } = useTranslation()

  const [wasTranslated, setWasTranslated] = useState<Languaje>('en')

  const getParseTextToObjectLiteralMemo = useMemo(
    () => (oldCharacters: string) => getParseTextToLiteralObject(oldCharacters), [translatedText])

  useEffect(() => {
    if (translatedText !== null) {
      const newCharacters = getParseTextToObjectLiteralMemo(translatedText)
      setStoredCharacters(newCharacters)
    }
  }, [translatedText])

  useEffect(() => {
    if (language === 'es' && language !== wasTranslated && !!getTranslate && storedCharacters) {
      setWasTranslated(language)
      const paramsReduce = getAllCharactersToString(storedCharacters)
      void getTranslate(paramsReduce, 'en', 'es')
    }

    if (language === 'en' && language !== wasTranslated && !!getTranslate && storedCharacters) {
      setWasTranslated(language)
      const paramsReduce = getAllCharactersToString(storedCharacters)
      void getTranslate(paramsReduce, 'es', 'en')
    }

    if (language === undefined) {
      console.log('The language prop does not exist')
    }
  }, [language])

  return (
      <RickAndMortyContainer>
        <div className='title'>
          <h1>Rick and Morty</h1>
        </div>
        <CharacterList characters={storedCharacters} isLoading={isLoading}/>
      </RickAndMortyContainer>
  )
}

export default RickAndMortyRemote
