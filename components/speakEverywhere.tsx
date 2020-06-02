import React from 'react'

import {
  countryService,
  languageService,
  translationService,
  locationService,
  textToSpeechService,
} from '../services'
import { App, AppContextProvider, ServiceContextProvider } from '.'

const SpeakEverywhere: React.FC = () => (
  <ServiceContextProvider
    countryService={countryService}
    languageService={languageService}
    translationService={translationService}
    locationService={locationService}
    textToSpeechService={textToSpeechService}
  >
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </ServiceContextProvider>
)

export default SpeakEverywhere
