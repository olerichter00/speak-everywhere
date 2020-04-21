const fs = require("fs")

const RAW_COUNTRIES_FILE = "./data/raw/countryLanguageRaw.json"
const COUNTRIES_FILE = "./data/countries.json"

const raw = JSON.parse(fs.readFileSync(RAW_COUNTRIES_FILE))
const countries = JSON.parse(fs.readFileSync(COUNTRIES_FILE))

const result = {}

raw.forEach((country) => {
  result[country["ISO"]] = {
    names: {
      EN: country["Country"],
    },
    languages: countries[country.ISO],
  }
})

fs.writeFileSync(COUNTRIES_FILE, JSON.stringify(result))
console.log(result)
