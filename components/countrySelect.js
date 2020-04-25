import React from "react"

import { Select, Flag, Button } from "."

import { DEFAULT_LANGUAGE, allCountries } from "../utils/data"

const CountrySelect = ({ selected, setter }) => {
  if (!selected) return <></>

  const options = Object.entries(allCountries).map(([iso, { names }]) => ({
    key: iso,
    text: names[DEFAULT_LANGUAGE],
  }))

  return (
    <Select
      title="Language"
      setter={setter}
      selected={selected}
      trigger={
        <Button aria-label="Select Country">
          <Flag name={selected.toLowerCase()} />
        </Button>
      }
      options={options}
    />
  )
}

export default CountrySelect
