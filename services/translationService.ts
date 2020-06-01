import translations from '../data/translations.json'
import normalizeLanguage from '../utils/normalizeLanguage'

export interface TranslationService {
  allTranslations: Translations
  translationForLanguage: Function
}

export interface Translation {
  [language: string]: string | null
}

export interface Translations {
  [language: string]: Translation
}

export const allTranslations: Translations = translations

export const translationForLanguage = (language: string): Translation =>
  allTranslations[normalizeLanguage(language)]

export default { allTranslations, translationForLanguage }
