import React, { createContext } from 'react'

import { CountryService } from '../services/countryService'
import { LanguageService } from '../services/languageService'
import { TranslationService } from '../services/translationService'
import { LocationService } from '../services/locationService'
import { TextToSpeechService } from '../services/textToSpeechService'

type ContextProps = {
  countryService: CountryService
  languageService: LanguageService
  translationService: TranslationService

  locationService: LocationService
  textToSpeechService: TextToSpeechService
}

export const ServiceContext = createContext<Partial<ContextProps>>({})

type Props = {
  countryService: CountryService
  languageService: LanguageService
  translationService: TranslationService
  locationService: LocationService
  textToSpeechService: TextToSpeechService
  children: React.ReactNode
}

const AppContextProvider: React.FC<Props> = ({
  countryService,
  languageService,
  translationService,
  locationService,
  textToSpeechService,
  children,
}) => {
  return (
    <ServiceContext.Provider
      value={{
        countryService,
        languageService,
        translationService,
        locationService,
        textToSpeechService,
      }}
    >
      {children}
    </ServiceContext.Provider>
  )
}
export default AppContextProvider
