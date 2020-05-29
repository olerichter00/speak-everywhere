import React, { useContext } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import classNames from "classnames"

import { Vocabulary, AppContext } from "."
import { dictionary, allLanguages, DEFAULT_LANGUAGE } from "../utils/data"

import fadeStyles from "../styles/transitions/fade.module.scss"
import styles from "../styles/vocabularyList.module.scss"

const VocabularyList = () => {
  const {
    extendedNavigation,
    locationLanguage,
    userLanguage,
    loadingCountry,
  } = useContext(AppContext)

  if (loadingCountry) return <></>

  const currentDictionary = dictionary[locationLanguage]
  const currentUserDictionary = dictionary[userLanguage]

  const translationsFound = currentDictionary && currentUserDictionary

  return (
    <div
      className={classNames(styles.vocabularyList, {
        [styles.hiddenVocabularyList]: extendedNavigation,
      })}
    >
      {translationsFound ? (
        Object.keys(currentDictionary).map(vocabulary => (
          <SwitchTransition key={vocabulary}>
            <CSSTransition
              key={`${userLanguage}-${locationLanguage}-${vocabulary}`}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames={fadeStyles}
            >
              <Vocabulary
                language={locationLanguage}
                dictionary={currentDictionary}
                userDictionary={currentUserDictionary}
                vocabulary={vocabulary}
              />
            </CSSTransition>
          </SwitchTransition>
        ))
      ) : (
        <div className={styles.notFound}>
          {`Sorry, there are no translations for ${allLanguages[locationLanguage][DEFAULT_LANGUAGE]} yet.`}
        </div>
      )}
    </div>
  )
}

export default VocabularyList
