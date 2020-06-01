import React from 'react'

import {
  countryService,
  languageService,
  translationService,
} from '../services'
import { App, AppContextProvider } from '../components'

const Index: React.FC = () => (
  <AppContextProvider
    countryService={countryService}
    languageService={languageService}
    translationService={translationService}
  >
    <App />
  </AppContextProvider>
)

export default Index
