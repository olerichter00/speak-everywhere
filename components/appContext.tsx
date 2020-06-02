import React, { createContext, useState, useEffect, useContext } from 'react'

import { useDetectCountry, useDetectUserLanguage } from '../hooks'
import { DEFAULT_LANGUAGE, DEFAULT_COUNTRY } from '../utils/defaults'
import normalizeLanguage from '../utils/normalizeLanguage'
import { ServiceContext } from './'

type ContextProps = {
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
  children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({ children }) => {
  const [country, setCountry, loadingCountry, errorCountry] = useDetectCountry()

  const [locationLanguage, setLocationLanguage] = useState(null)

  const [userLanguage, setUserLanguage] = useDetectUserLanguage(
    DEFAULT_LANGUAGE,
  )

  const [extendedNavigation, setExtendedNavigation] = useState(true)

  const { countryService } = useContext(ServiceContext)

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
