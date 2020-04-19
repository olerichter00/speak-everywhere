import React, { useState, useEffect } from "react"

import { VocabularyList, Navigation, Pending } from "."
import { useDetectCountry, useDetectUserLanguage } from "../hooks"
import { normalizeLanguage } from "../utils"
import countries from "../data/countries"
import dictionary from "../data/dictionary"

const DEFAULT_LANGUAGE = "en"
const DEFAULT_COUNTRY = "DE"

const App = () => {
  const [country, setCountry, loadingCountry, errorCountry] = useDetectCountry()
  const [locationLanguage, setLocationLanguage] = useState(null)

  const [userLanguage, setUserLanguage] = useDetectUserLanguage(
    DEFAULT_LANGUAGE,
  )

  const [extendedNavigation, setExtendedNavigation] = useState(true)

  useEffect(() => {
    const language =
      countries[country] && normalizeLanguage(countries[country].languages[0])
    setLocationLanguage(language)
  }, [country])

  useEffect(() => setCountry(DEFAULT_COUNTRY), [errorCountry])

  if (loadingCountry) return <Pending />

  return (
    <div>
      <Navigation
        userLanguage={userLanguage}
        country={country}
        errorDetectingCountry={errorCountry}
        locationLanguage={locationLanguage}
        setUserLanguage={setUserLanguage}
        setCountry={setCountry}
        setLocationLanguage={setLocationLanguage}
        extended={extendedNavigation}
        setExtended={setExtendedNavigation}
      />
      {!extendedNavigation && (
        <VocabularyList
          dictionary={dictionary[locationLanguage]}
          userDictionary={dictionary[userLanguage]}
          userLanguage={userLanguage}
          language={locationLanguage}
        />
      )}
    </div>
  )
}

export default App
