import { type Character } from './types.d'

export const getParseTextToLiteralObject = (oldCharacters: string) => {
  const inputArray = oldCharacters.split(/\n/)
  const characters = []

  for (let i = 0; i < inputArray.length; i += 5) {
    const [id, name, species, gender, image] = inputArray.slice(i, i + 5)
    characters.push({ id, name, species, gender, image })
  }

  return characters
}

export const getTranslatesByParams = (item: Character) => {
  const array = Object.entries(item).reduce((acc, [_, values]) => acc + `\n${values}`, '')
  return array
}

export const getAllCharactersToString = (characters: Character[]) => {
  const params = characters.map((obj) => getTranslatesByParams(obj))
  const paramsReduce = params.reduce((item, acc) => `${item}` + acc, '')
  return paramsReduce
}
