import { useState } from "react"

import { textToSpeechService } from "../utils"
const DEFAULT_LANGUAGE = "en"

const useAudio = (text, language, { disabled = false } = {}) => {
  if (disabled) return () => {}

  const [error, setError] = useState(false)
  const [playing, setPlaying] = useState(false)

  const [audio] = useState(
    new Audio(
      textToSpeechService.getSoundUrl(text, language || DEFAULT_LANGUAGE),
    ),
  )

  audio.pla

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
