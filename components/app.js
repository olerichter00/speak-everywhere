import React, { useState, useEffect } from "react"

import { Header, VocabularyList, Navigation, Pending } from "."
import { useDetectCountry, useDetectUserLanguage } from "../hooks"
import normalizeLanguage from "../utils/normalizeLanguage"

import {
  allCountries,
  dictionary,
  DEFAULT_LANGUAGE,
  DEFAULT_COUNTRY,
} from "../utils/data"

const App = () => {
  const [country, setCountry, loadingCountry, errorCountry] = useDetectCountry()
  const [locationLanguage, setLocationLanguage] = useState(null)

  const [userLanguage, setUserLanguage] = useDetectUserLanguage(
    DEFAULT_LANGUAGE,
  )

  const [extendedNavigation, setExtendedNavigation] = useState(true)

  useEffect(() => {
    const language =
      allCountries[country] &&
      normalizeLanguage(allCountries[country].languages[0])
    setLocationLanguage(language)
  }, [country])

  useEffect(() => setCountry(DEFAULT_COUNTRY), [errorCountry])

  if (loadingCountry) return <Pending text="Getting your current location..." />

  return (
    <div>
      <Header extended={extendedNavigation} />

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
      <VocabularyList
        dictionary={dictionary[locationLanguage]}
        userDictionary={dictionary[userLanguage]}
        userLanguage={userLanguage}
        language={locationLanguage}
        extended={extendedNavigation}
      />
    </div>
  )
}

export default App
