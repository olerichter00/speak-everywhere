import React from "react"
import { Icon } from "semantic-ui-react"

import { LanguageSelect, CountrySelect, Button } from "."
import { normalizeLanguage } from "../utils"

import allLanguages from "../data/languages"
import countries from "../data/countries"

import styles from "../styles/navigation.module.scss"

const Navigation = ({
  userLanguage,
  locationLanguage,
  country,
  errorDetectingCountry,
  setUserLanguage,
  setCountry,
  setLocationLanguage,
  extended,
  setExtended,
}) => {
  const countryLanguages = countries[country].languages
    .map(normalizeLanguage)
    .reduce((result, language) => {
      result[language] = allLanguages[language]
      return result
    }, {})

  return (
    <nav
      className={
        extended
          ? `${styles.navigation} ${styles.extendedNavigation}`
          : styles.navigation
      }
    >
      <div
        className={
          extended
            ? styles.section
            : `${styles.section} ${styles.hiddenSection}`
        }
      >
        <h1 className={styles.title}>Speak Everywhere</h1>
        <div className={styles.subtitle}>
          Lern the most useful words and phrases whereever you are.
        </div>
        {errorDetectingCountry ? null : (
          <div className={styles.text}>
            You are in <b>{country && countries[country].names["en"]}</b>.{" "}
            <br />
            It's time to learn some{" "}
            <b>
              {countryLanguages &&
                countryLanguages[locationLanguage] &&
                countryLanguages[locationLanguage]["en"]}
              !
            </b>
          </div>
        )}
      </div>
      <div className={styles.selectors}>
        <div className={styles.selector}>
          <LanguageSelect
            selected={userLanguage}
            setter={setUserLanguage}
            languages={allLanguages}
          />
        </div>
        <div className={styles.selector}>
          <Icon name="long arrow alternate right" />
        </div>
        <div className={styles.selector}>
          <CountrySelect selected={country} setter={setCountry} />
        </div>
        <div className={styles.selector}>
          <LanguageSelect
            selected={locationLanguage}
            setter={setLocationLanguage}
            languages={countryLanguages}
            showMoreButton
          />
        </div>
      </div>
      <div
        className={
          extended
            ? styles.section
            : `${styles.section} ${styles.hiddenSection}`
        }
      >
        <div>
          <Button
            primary
            style={{
              margin: "1rem",
            }}
            onClick={() => setExtended(false)}
          >
            Learn
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
