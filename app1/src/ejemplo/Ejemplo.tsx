import React, { useEffect, useMemo, useState } from 'react'
import CharacterList from '../components/CharacterList'
// import useTranslation from '../hooks/useTranslation'
import { RickAndMortyContainer } from '../RickAndMortyStyles'
// import useStoredCharacters from '../hooks/useStoredCharacters'
import { getParseTextToLiteralObject, getAllCharactersToString } from '../utils'
// import useRickAndMortyAPI from '../hooks/useRickAndMortyAPI'
// import { type Character } from '../types.d'
// import translate from '../service/translate'

export interface Character {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
}

type Languaje = 'es' | 'en'

interface RickAndMortyProps {
  language: Languaje
}

const RickAndMortyRemote = ({ language }: RickAndMortyProps) => {
  // --
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoadingCharacters, setIsLoadingCharacters] = useState(true)

  // --
  const initialValue = null

  const initialState = () => {
    try {
      const item = window.localStorage.getItem(key)
      return (item != null) ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }
  const [storedCharacters, setStoredValueCharacters] = useState(initialState)

  const key = 'rick-and-morty'

  const setStoredCharacters = (value: Character[]) => {
    try {
      setStoredValueCharacters(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  //   const { translatedText, getTranslate, isLoading } = useTranslation()

  const [translatedText, setTranslatedText] = useState<string | null>(null)
  const [isLoadingTranslatedText, setIsLoadingTranslatedText] = useState(false)
  //   const [error, setError] = useState<string | null>(null)

  const translteURL = 'http://127.0.0.1:5000/translate'

  async function translate (text: string, source: Languaje, target: Languaje) {
    try {
      const response = await fetch(translteURL, {
        method: 'POST',
        body: JSON.stringify({
          q: text,
          source,
          target,
          format: 'text',
          api_key: ''
        }),
        headers: { 'Content-Type': 'application/json' }
      })

      if (!response.ok) {
        throw new Error(`Translation request failed with status: ${response.status}`)
      }

      const translationResult = await response.json()

      return translationResult
    } catch (error) {
      console.error('An error occurred:', error)
    }
  }

  const getTranslate = async (text: string, source: Languaje, target: Languaje) => {
    try {
      setIsLoadingTranslatedText(true)
      //   setError(null)

      const translationResult = await translate(text, source, target)

      setTranslatedText(translationResult.translatedText)
    } catch (error) {
    //   setError('An error occurred while translating.')
      console.error(error)
    } finally {
      setIsLoadingTranslatedText(false)
    }
  }

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(async response => await response.json())
      .then(data => {
        setCharacters(data.results)
        setIsLoadingCharacters(false)
      })
      .catch(error => {
        console.error('Error fetching characters:', error)
        setIsLoadingCharacters(false)
      })
  }, [])

  useEffect(() => {
    if (storedCharacters === null && characters.length > 0 && !isLoadingCharacters) {
      const chs = characters.map(character => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        gender: character.gender,
        image: character.image
      }))
      setStoredCharacters(chs)
    }
  }, [characters, storedCharacters])

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
        <h1>Rick and Morty</h1>
        <CharacterList characters={storedCharacters} isLoading={isLoadingTranslatedText}/>
      </RickAndMortyContainer>
  )
}

export default RickAndMortyRemote
