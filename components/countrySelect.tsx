import React, { useContext } from 'react'

import { AppContext, Select, Flag, Button } from '.'
import { DEFAULT_LANGUAGE } from '../utils/defaults'

const CountrySelect: React.FC = () => {
  const { countryService, country, setCountry } = useContext(AppContext)

  if (!country) return <></>

  const options = Object.entries(countryService.allCountries).map(
    ([iso, country]) => ({
      key: iso,
      text: country.name[DEFAULT_LANGUAGE],
    }),
  )

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
