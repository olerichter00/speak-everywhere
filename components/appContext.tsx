import React, { createContext, useState, useEffect } from 'react'

import { useDetectCountry, useDetectUserLanguage } from '../hooks'

import { DEFAULT_LANGUAGE, DEFAULT_COUNTRY } from '../utils/defaults'
import { CountryService } from '../services/countryService'
import { LanguageService } from '../services/languageService'
import { TranslationService } from '../services/translationService'
import normalizeLanguage from '../utils/normalizeLanguage'

type ContextProps = {
  countryService: CountryService
  languageService: LanguageService
  translationService: TranslationService

  country: string
  setCountry: Function
  loadingCountry: boolean
  errorCountry: boolean

  locationLanguage: string
  setLocationLanguage: Function

  userLanguage: string
  setUserLanguage: Function

  extendedNavigation: boolean
  setExtendedNavigation: Function
}

export const AppContext = createContext<Partial<ContextProps>>({})

type Props = {
  countryService: CountryService
  languageService: LanguageService
  translationService: TranslationService
  children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({
  countryService,
  languageService,
  translationService,
  children,
}) => {
  const [country, setCountry, loadingCountry, errorCountry] = useDetectCountry()

  const [locationLanguage, setLocationLanguage] = useState(null)

  const [userLanguage, setUserLanguage] = useDetectUserLanguage(
    DEFAULT_LANGUAGE,
  )

  const [extendedNavigation, setExtendedNavigation] = useState(true)

  useEffect(() => {
    const language =
      countryService.allCountries[country] &&
      normalizeLanguage(countryService.allCountries[country].languages[0])
    setLocationLanguage(language)
  }, [country])

  useEffect(() => setCountry(DEFAULT_COUNTRY), [errorCountry])

  return (
    <AppContext.Provider
      value={{
        countryService,
        languageService,
        translationService,
        country,
        setCountry,
        loadingCountry,
        errorCountry,

        locationLanguage,
        setLocationLanguage,

        userLanguage,
        setUserLanguage,

        extendedNavigation,
        setExtendedNavigation,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export default AppContextProvider
