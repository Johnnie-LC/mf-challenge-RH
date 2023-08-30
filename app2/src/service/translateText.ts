import { type Languaje } from '../types.d'

const translteURL = 'http://127.0.0.1:5000/translate'

async function translateText (text: string, source: Languaje, target: Languaje) {
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

export default translateText
