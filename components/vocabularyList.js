import React from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"

import Vocabulary from "./vocabulary"

import styles from "../styles/vocabularyList.module.scss"
import fadeStyles from "../styles/transitions/fade.module.scss"

const VocabularyList = ({
  dictionary,
  userDictionary,
  language,
  userLanguage,
  loading,
}) => {
  if (loading) return <></>

  if (!dictionary || !userDictionary)
    return <div className={styles.notFound}>No translations available.</div>

  return (
    <div className={styles.vocabularyList}>
      {Object.keys(dictionary).map((vocabulary) => (
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
      ))}
    </div>
  )
}

export default VocabularyList
