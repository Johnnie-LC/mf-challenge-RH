import { useState, useEffect } from 'react'
import { type Character } from '../types.d'

const useCharacter = () => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    fetch('https://hp-api.onrender.com/api/characters')
      .then(async response => await response.json())
      .then(data => {
        setCharacters(data)
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching characters:', error)
        setIsLoading(false)
      })
  }, [])

  return { characters, isLoading }
}

export default useCharacter
