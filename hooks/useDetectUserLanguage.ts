import { useState, useEffect } from 'react'

import normalizeLanguage from '../utils/normalizeLanguage'

const useDetectUserLanguage = (defaultLanguage: string): [string, Function] => {
  const [language, setLanguage] = useState(null)

  useEffect(() => {
    const detectedLanguage = normalizeLanguage(
      require('detect-browser-language')(),
    )

    setLanguage(detectedLanguage || defaultLanguage)
  }, [])

  return [language, setLanguage]
}

export default useDetectUserLanguage
