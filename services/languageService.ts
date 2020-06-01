import languages from '../data/languages.json'
import { allTranslations } from './translationService'

export interface LanguageService {
  allLanguages: Languages
  availableLanguages: Languages
}

export interface Language {
  [name: string]: string
}

export interface Languages {
  [iso: string]: Language
}

export const allLanguages: Languages = languages

export const availableLanguages: Languages = Object.keys(
  allTranslations,
).reduce((result, language) => {
  if (allTranslations[language] && languages[language]) {
    result[language] = languages[language]
  }

  return result
}, {})

export default {
  allLanguages,
  availableLanguages,
}
