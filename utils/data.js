import countries from "../data/countries"
import rawDictionary from "../data/dictionary"
import languages from "../data/languages"
import normalizeLanguage from "./normalizeLanguage"

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

export const languagesFor = (country) => {
  const countryLanguages = countries[country].languages
    .map(normalizeLanguage)
    .reduce((result, language) => {
      result[language] = languages[language]
      return result
    }, {})

  return countryLanguages
}

export const dictionaryFor = (language) => {
  return dictionary[normalizeLanguage(language)]
}
