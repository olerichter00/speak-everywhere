import countries from "../data/countries.json"
import rawDictionary from "../data/dictionary.json"
import languages from "../data/languages.json"
import normalizeLanguage from "./normalizeLanguage"

export interface Dictionary {
  [key: string]: string | null
}

export interface Languages {
  [key: string]: {
    names: {
      en: string
      languages: Array<{ [key: string]: string }>
    }
  }
}

export interface Countries {
  [key: string]: {
    names: any
    languages: Array<string>
  }
}

export const DEFAULT_LANGUAGE = "en"
export const DEFAULT_COUNTRY = "DE"
export const FULL_DEFAULT_COUNTRY = "en-gb"

export const allCountries = countries
export const dictionary = rawDictionary

export const allLanguages = languages

export const availableLanguages = Object.keys(dictionary).reduce(
  (result, language) => {
    if (dictionary[language] && languages[language]) {
      result[language] = languages[language]
    }

    return result
  },
  {},
)

export const languagesFor = (country: string): Languages => {
  const countryLanguages = countries[country].languages
    .map(normalizeLanguage)
    .reduce((result, language) => {
      result[language] = languages[language]
      return result
    }, {})

  return countryLanguages
}

export const dictionaryFor = (language: string): Dictionary => {
  return dictionary[normalizeLanguage(language)]
}
