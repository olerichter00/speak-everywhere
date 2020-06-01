import React, { useContext } from 'react'

import { Select, Button, AppContext } from '.'
import { DEFAULT_LANGUAGE } from '../utils/defaults'
import { Languages } from '../services/languageService'

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

  const { languageService } = useContext(AppContext)

  const options = Object.entries(languages).map(([language, names]) => ({
    key: language,
    text: names[DEFAULT_LANGUAGE],
  }))

  const allOptions = () => {
    return Object.entries(languageService.availableLanguages).map(
      ([language, names]) => ({
        key: language,
        text: names[DEFAULT_LANGUAGE],
      }),
    )
  }

  return (
    <Select
      title="Language"
      setter={setter}
      selected={selected}
      trigger={
        <Button>
          {languageService.allLanguages[selected] &&
            languageService.allLanguages[selected][DEFAULT_LANGUAGE]}
        </Button>
      }
      options={options}
      hasShowAllButton={hasShowAllButton}
      allOptions={allOptions}
    />
  )
}

export default LanguageSelect
