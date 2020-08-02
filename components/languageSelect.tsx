import React, { useContext } from 'react'

import { Select, Button, ServiceContext } from '.'
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

  const { languageService } = useContext(ServiceContext)

  const options = Object.entries(languages)
    .filter(([_language, names]) => names !== undefined)
    .map(([language, names]) => ({
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
