import { useState, useEffect } from 'react'
import { type Character } from '../types.d'

const useRickAndMortyAPI = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(async response => await response.json())
      .then(data => {
        setCharacters(data.results)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching characters:', error)
        setIsLoading(false)
      })
  }, [])

  return { characters, isLoading }
}

export default useRickAndMortyAPI
