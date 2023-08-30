import { type Character } from './types.d'

export const getParseTextToLiteralObject = (oldCharacters: string) => {
  const inputArray = oldCharacters.split(/\n/)
  const characters = []

  for (let i = 0; i < inputArray.length; i += 6) {
    // const character = {
    //   id: parseInt(inputArray[i]),
    //   name: inputArray[i + 1],
    //   status: inputArray[i + 2],
    //   species: inputArray[i + 3],
    //   gender: inputArray[i + 4],
    //   image: inputArray[i + 5]
    // }
    const [id, name, status, species, gender, image] = inputArray.slice(i, i + 6)
    characters.push({ id, name, status, species, gender, image })
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
