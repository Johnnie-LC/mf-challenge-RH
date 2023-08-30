import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import { type Character } from '../types.d'

export default function useStoredCharacters (characters: Character[]) {
  const [storedCharacters, setStoredCharacters] = useLocalStorage('rick-and-morty', null)

  useEffect(() => {
    if (storedCharacters === null && characters.length > 0) {
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

  return { storedCharacters, setStoredCharacters }
}
