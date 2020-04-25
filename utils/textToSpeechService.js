import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

import { DEFAULT_LANGUAGE } from "../utils/data"

const supportedLanguages = {
  ca: "ca-es",
  zh: "zh-cn",
  // "zh-hk",
  // "zh-tw",
  da: "da-dk",
  nl: "nl-nl",
  // "en-au",
  // "en-ca",
  en: "en-gb",
  // "en-in",
  // "en-us",
  fi: "fi-fi",
  // "fr-ca",
  fr: "fr-fr",
  de: "de-de",
  it: "it-it",
  ja: "ja-jp",
  ko: "ko-kr",
  nb: "nb-no",
  pl: "pl-pl",
  // "pt-br",
  pt: "pt-pt",
  ru: "ru-ru",
  // "es-mx",
  es: "es-es",
  sv: "sv-se",
}

const isLanguageSupported = (language) =>
  supportedLanguages[language] ? true : false

const getSoundUrl = (text, language) => {
  return `${publicRuntimeConfig.VOICERSS_URL}&hl=${
    supportedLanguages[language] || DEFAULT_LANGUAGE
  }&src=${text}&r=${1}`
}

export default { isLanguageSupported, getSoundUrl }
