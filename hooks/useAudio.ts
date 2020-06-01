import { useState } from 'react'

import textToSpeechService from '../services/textToSpeechService'
import { DEFAULT_LANGUAGE } from '../utils/defaults'

const useAudio = (
  text: string,
  language: string,
  { disabled = false }: { disabled?: boolean } = {},
): [Function, boolean, boolean] => {
  if (disabled) return [() => {}, false, false]

  const [error, setError] = useState(false)
  const [playing, setPlaying] = useState(false)

  const [audio] = useState(
    new Audio(
      textToSpeechService.getSoundUrl(text, language || DEFAULT_LANGUAGE),
    ),
  )

  const play = async () => {
    try {
      setPlaying(true)
      await audio.play()
      setTimeout(() => setPlaying(false), 1000)
    } catch (error) {
      console.error("Cant' play audio:", error)

      setError(true)
    }
  }

  return [play, playing, error]
}

export default useAudio
