import React from 'react'
import { Icon } from 'semantic-ui-react'
import className from 'classnames'

import { useAudio } from '../hooks'
import textToSpeechService from '../utils/textToSpeechService'
import { Translation } from '../services/translationService'

import styles from '../styles/vocabulary.module.scss'

type Props = {
  language: string
  translation: Translation
  userTranslation: Translation
  vocabulary: string
}

const Vocabulary: React.FC<Props> = ({
  language,
  translation,
  userTranslation,
  vocabulary,
}) => {
  const [play, playing, playError] = useAudio(translation[vocabulary], language)

  const withAudio = textToSpeechService.isLanguageSupported(language)

  return (
    <div
      className={className(styles.vocabulary, {
        [styles.vocabularyWithPointer]: withAudio,
      })}
      onClick={withAudio ? () => play() : undefined}
    >
      <h2 className={styles.title}>{translation[vocabulary]}</h2>
      <div className={styles.subtitle}>{userTranslation[vocabulary]}</div>
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
