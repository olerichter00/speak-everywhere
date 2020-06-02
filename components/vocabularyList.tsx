import React, { useContext } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import classNames from 'classnames'

import { Vocabulary, AppContext, ServiceContext } from '.'
import { DEFAULT_LANGUAGE } from '../utils/defaults'
import fadeStyles from '../styles/transitions/fade.module.scss'
import styles from '../styles/vocabularyList.module.scss'

const VocabularyList: React.FC = () => {
  const {
    extendedNavigation,
    locationLanguage,
    userLanguage,
    loadingCountry,
  } = useContext(AppContext)
  const { languageService, translationService } = useContext(ServiceContext)

  if (loadingCountry) return <></>

  const currentTranslation =
    translationService.allTranslations[locationLanguage]
  const currentUserTranslation =
    translationService.allTranslations[userLanguage]

  const translationsFound = currentTranslation && currentUserTranslation

  return (
    <div
      className={classNames(styles.vocabularyList, {
        [styles.hiddenVocabularyList]: extendedNavigation,
      })}
    >
      {translationsFound ? (
        Object.keys(currentTranslation).map(vocabulary => (
          <SwitchTransition key={vocabulary}>
            <CSSTransition
              key={`${userLanguage}-${locationLanguage}-${vocabulary}`}
              addEndListener={(node, done) =>
                node.addEventListener('transitionend', done, false)
              }
              classNames={fadeStyles}
            >
              <Vocabulary
                language={locationLanguage}
                translation={currentTranslation}
                userTranslation={currentUserTranslation}
                vocabulary={vocabulary}
              />
            </CSSTransition>
          </SwitchTransition>
        ))
      ) : (
        <div className={styles.notFound}>
          {`Sorry, there are no translations for ${languageService.allLanguages[locationLanguage][DEFAULT_LANGUAGE]} yet.`}
        </div>
      )}
    </div>
  )
}

export default VocabularyList
