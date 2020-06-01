import countries from '../data/countries.json'
import { Languages, allLanguages } from './languageService'
import normalizeLanguage from '../utils/normalizeLanguage'

export interface CountryService {
  allCountries: Countries
  languagesForCountry: Function
}

export interface Country {
  name: { [key: string]: string }
  languages: Array<string>
}

export interface Countries {
  [iso: string]: Country
}

export const allCountries: Countries = countries

export const languagesForCountry = (country: string): Languages => {
  const countryLanguages = allCountries[country].languages
    .map(normalizeLanguage)
    .reduce((result, language) => {
      result[language] = allLanguages[language]
      return result
    }, {})

  return countryLanguages
}

export default {
  allCountries,
  languagesForCountry,
}
