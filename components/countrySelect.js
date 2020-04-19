import React from "react"

import { Select, Flag, Button } from "."

import countries from "../data/countries"

const DEFAULT_LANGUAGE = "en"

const CountrySelect = ({ selected, setter }) => {
  if (!selected) return <></>

  const options = Object.entries(countries).map(([iso, { names }]) => ({
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
