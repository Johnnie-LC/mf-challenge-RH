import { useState } from 'react'

import translate from '../service/translateText'
import { type Languaje } from '../types.d'

function useTranslation () {
  const [translatedText, setTranslatedText] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const getTranslate = async (text: string, source: Languaje, target: Languaje) => {
    try {
      setIsLoading(true)
      setError(null)

      const translationResult = await translate(text, source, target)

      setTranslatedText(translationResult.translatedText)
    } catch (error) {
      setError('An error occurred while translating.')
    } finally {
      setIsLoading(false)
    }
  }
  return { translatedText, isLoading, error, getTranslate }
}

export default useTranslation
