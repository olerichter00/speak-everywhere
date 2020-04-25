import React, { useContext } from "react"

import { AppContext, Select, Flag, Button } from "."
import { DEFAULT_LANGUAGE, allCountries } from "../utils/data"

const CountrySelect = () => {
  const { country, setCountry } = useContext(AppContext)

  if (!country) return <></>

  const options = Object.entries(allCountries).map(([iso, { names }]) => ({
    key: iso,
    text: names[DEFAULT_LANGUAGE],
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
