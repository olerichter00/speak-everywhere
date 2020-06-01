import React from 'react'

import {
  countryService,
  languageService,
  translationService,
  locationService,
  textToSpeechService,
} from '../services'
import { App, AppContextProvider } from '.'

const SpeakEverywhere: React.FC = () => (
  <AppContextProvider
    countryService={countryService}
    languageService={languageService}
    translationService={translationService}
    locationService={locationService}
    textToSpeechService={textToSpeechService}
  >
    <App />
  </AppContextProvider>
)

export default SpeakEverywhere
