import { useState, useEffect } from "react"

import { normalizeLanguage } from "../utils"

const useDetectUserLanguage = (defaultLanguage) => {
  const [language, setLanguage] = useState(null)

  useEffect(() => {
    const detectedLanguage = normalizeLanguage(
      require("detect-browser-language")(),
    )

    setLanguage(detectedLanguage || defaultLanguage)
  }, [])

  return [language, setLanguage]
}

export default useDetectUserLanguage
