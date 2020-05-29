import React, { useContext } from "react"

import { AppContext, Select, Flag, Button } from "."
import { DEFAULT_LANGUAGE, allCountries, Countries } from "../utils/data"

type Props = {
  countries?: Countries
}

const CountrySelect: React.FC<Props> = ({ countries = allCountries } = {}) => {
  const { country, setCountry } = useContext(AppContext)

  if (!country) return <></>

  const options = Object.entries(countries).map(([iso, country]) => ({
    key: iso,
    text: country["names"][DEFAULT_LANGUAGE],
  }))

  return (
    <Select
      title="Language"
      setter={setCountry}
      selected={country}
      trigger={
        <Button aria-label="Select Country">
          <Flag name={country.toLowerCase()} />
        </Button>
      }
      options={options}
    />
  )
}

export default CountrySelect
