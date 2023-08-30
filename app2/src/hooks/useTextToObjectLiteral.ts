import { useEffect, useMemo } from 'react'
import { getAllCharactersToString, getParseTextToLiteralObject } from '../utils'
import { type Languaje } from '../types.d'

type GetTranslateType = (text: string, source: Languaje, target: Languaje) => Promise<void>
type SetWasTranslatedType = React.Dispatch<React.SetStateAction<Languaje>>

export const useTranslateAndParseTextToObjectLiteral = (
  language: Languaje,
  wasTranslated: Languaje,
  translatedText: string | null,
  getTranslate: GetTranslateType,
  setStoredCharacters: any,
  storedCharacters: any,
  setWasTranslated: SetWasTranslatedType
) => {
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
}
