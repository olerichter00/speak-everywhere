import React from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import classNames from "classnames"

import Vocabulary from "./vocabulary"
import { allLanguages, DEFAULT_LANGUAGE } from "../utils/data"

import fadeStyles from "../styles/transitions/fade.module.scss"
import styles from "../styles/vocabularyList.module.scss"

const VocabularyList = ({
  dictionary,
  userDictionary,
  language,
  userLanguage,
  loading,
  extended,
}) => {
  if (loading) return <></>

  const noTranslationFound = !dictionary || !userDictionary

  return (
    <div
      className={classNames(styles.vocabularyList, {
        [styles.hiddenVocabularyList]: extended,
      })}
    >
      {noTranslationFound ? (
        <div className={styles.notFound}>
          {`Sorry, there are no translations for ${allLanguages[language][DEFAULT_LANGUAGE]} yet.`}
        </div>
      ) : (
        Object.keys(dictionary).map((vocabulary) => (
          <SwitchTransition key={vocabulary}>
            <CSSTransition
              key={`${userLanguage}-${language}-${vocabulary}`}
              addEndListener={(node, done) =>
                node.addEventListener("transitionend", done, false)
              }
              classNames={fadeStyles}
            >
              <Vocabulary
                language={language}
                dictionary={dictionary}
                userDictionary={userDictionary}
                vocabulary={vocabulary}
              />
            </CSSTransition>
          </SwitchTransition>
        ))
      )}
    </div>
  )
}

export default VocabularyList
