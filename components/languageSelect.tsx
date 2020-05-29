import React from "react"

import { Select, Button } from "."
import {
  availableLanguages,
  allLanguages,
  DEFAULT_LANGUAGE,
  Languages,
} from "../utils/data"

type Props = {
  setter: Function
  selected: string
  languages: Languages
  hasShowAllButton?: boolean
}

const LanguageSelect: React.FC<Props> = ({
  setter,
  selected,
  languages,
  hasShowAllButton = false,
}) => {
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
