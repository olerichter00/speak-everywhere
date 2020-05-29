import React, { useContext } from 'react'

import { AppContext, Header, VocabularyList, Navigation, Pending } from '.'
import styles from '../styles/app.module.scss'

const App: React.FC = () => {
  const { loadingCountry, extendedNavigation } = useContext(AppContext)

  if (loadingCountry)
    return <Pending text="Fetching your current location..." />

  return (
    <div className={styles.app}>
      <Header extended={extendedNavigation} />
      <Navigation />
      <VocabularyList />
    </div>
  )
}

export default App
