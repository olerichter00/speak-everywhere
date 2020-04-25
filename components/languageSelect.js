import React from "react"

import { Select, Button } from "."
import {
  availableLanguages,
  allLanguages,
  DEFAULT_LANGUAGE,
} from "../utils/data"

const LanguageSelect = ({ setter, selected, languages, hasShowAllButton }) => {
  if (!selected) return <></>

  const options = Object.entries(languages).map(([language, names]) => ({
    key: language,
    text: names[DEFAULT_LANGUAGE],
  }))

  const allOptions = () => {
    return Object.entries(availableLanguages).map(([language, names]) => ({
      key: language,
      text: names[DEFAULT_LANGUAGE],
    }))
  }

  return (
    <Select
      title="Language"
      setter={setter}
      selected={selected}
      trigger={
        <Button>
          {allLanguages[selected] && allLanguages[selected][DEFAULT_LANGUAGE]}
        </Button>
      }
      options={options}
      hasShowAllButton={hasShowAllButton}
      allOptions={allOptions}
    />
  )
}

export default LanguageSelect
