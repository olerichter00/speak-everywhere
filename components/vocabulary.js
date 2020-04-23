import React from "react"
import { Icon } from "semantic-ui-react"
import className from "classnames"

import { useAudio } from "../hooks"
import { textToSpeechService } from "../utils"

import styles from "../styles/vocabulary.module.scss"

const Vocabulary = ({ language, dictionary, userDictionary, vocabulary }) => {
  const [play, playing, playError] = useAudio(dictionary[vocabulary], language)

  const withAudio = textToSpeechService.isLanguageSupported(language)

  return (
    <div
      className={className(styles.vocabulary, {
        [styles.vocabularyWithPointer]: withAudio,
      })}
      onClick={withAudio && (() => play())}
    >
      <h2 className={styles.title}>{dictionary[vocabulary]}</h2>
      <div className={styles.subtitle}>{userDictionary[vocabulary]}</div>
      {withAudio && (
        <div
          className={className(styles.icon, {
            [styles.activeIcon]: playing,
          })}
        >
          {playError ? <Icon name="exclamation" /> : <Icon name="volume up" />}
        </div>
      )}
    </div>
  )
}

export default Vocabulary
