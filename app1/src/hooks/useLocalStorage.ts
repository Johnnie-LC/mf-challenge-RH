import { useState } from 'react'
import { type Character } from '../types.d'

export default function useLocalStorage (key: string, initialValue: Character[] | null | string[]) {
  const initialState = () => {
    try {
      const item = window.localStorage.getItem(key)
      return (item != null) ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  }

  const [storedValue, setStoredValue] = useState(initialState)

  const setValue = (value: Character[]) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.error(error)
    }
  }

  return [storedValue, setValue]
}
