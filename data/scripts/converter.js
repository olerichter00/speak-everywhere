const fs = require("fs")

const raw = JSON.parse(fs.readFileSync("./raw/countryLanguageRaw.json"))
const countries = JSON.parse(fs.readFileSync("./countries.json"))

const result = {}

raw.forEach((country) => {
  result[country["ISO"]] = {
    names: {
      EN: country["Country"],
    },
    languages: countries[country.ISO],
  }
})

fs.writeFileSync("./countries2.json", JSON.stringify(result))
console.log(result)
