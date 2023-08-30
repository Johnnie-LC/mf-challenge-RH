import { useEffect } from 'react'
import useLocalStorage from './useLocalStorage'
import { type Character } from '../types.d'

export default function useStoredCharacters (characters: Character[]) {
  const [storedCharacters, setStoredCharacters] = useLocalStorage('Harry-Potter', null)

  useEffect(() => {
    if (storedCharacters === null && characters.length > 0) {
      const chs: Character[] = characters.map(characters => ({
        id: characters.id,
        name: characters.name,
        species: characters.species,
        gender: characters.gender,
        image: characters.image
      }))
      setStoredCharacters(chs)
    }
  }, [characters, storedCharacters])

  return { storedCharacters, setStoredCharacters }
}
