import React, { useContext } from 'react'
import { Icon } from 'semantic-ui-react'
import classNames from 'classnames'

import { AppContext, LanguageSelect, CountrySelect, Button } from '.'
import styles from '../styles/navigation.module.scss'

const Navigation: React.FC = () => {
  const {
    countryService,
    languageService,
    extendedNavigation,
    setExtendedNavigation,
    country,
    errorCountry,
    userLanguage,
    setUserLanguage,
    locationLanguage,
    setLocationLanguage,
  } = useContext(AppContext)

  const countryLanguages = countryService.languagesForCountry(country)

  const navigationClasses = classNames(styles.navigation, {
    [styles.extendedNavigation]: extendedNavigation,
  })

  const sectionClasses = classNames(styles.section, {
    [styles.hiddenSection]: !extendedNavigation,
  })

  return (
    <nav className={navigationClasses}>
      <div className={sectionClasses}>
        <div className={styles.sectionContent}>
          <h1 className={styles.title}>Speak Everywhere</h1>
          <div className={styles.subtitle}>
            Lern the most useful words and phrases whereever you are.
          </div>
          {errorCountry ? null : (
            <div className={styles.text}>
              You are in{' '}
              <b>
                {country && countryService.allCountries[country].name['en']}
              </b>
              . <br />
              It's time to learn some{' '}
              <b>
                {countryLanguages &&
                  countryLanguages[locationLanguage] &&
                  countryLanguages[locationLanguage]['en']}
                !
              </b>
            </div>
          )}
        </div>
      </div>
      <div className={styles.selectors}>
        <div className={styles.selector}>
          <LanguageSelect
            selected={userLanguage}
            setter={setUserLanguage}
            languages={languageService.availableLanguages}
          />
        </div>
        <div className={styles.arrow}>
          <Icon name="long arrow alternate right" />
        </div>
        <div className={styles.selector}>
          <CountrySelect />
        </div>
        <div className={styles.selector}>
          <LanguageSelect
            selected={locationLanguage}
            setter={setLocationLanguage}
            languages={countryLanguages}
            hasShowAllButton
          />
        </div>
      </div>
      <div className={sectionClasses}>
        <div className={styles.cta}>
          <Button primary onClick={() => setExtendedNavigation(false)}>
            Learn
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
