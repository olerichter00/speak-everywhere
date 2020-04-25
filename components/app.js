import React, { useContext } from "react"

import { AppContext, Header, VocabularyList, Navigation, Pending } from "."

const App = () => {
  const { loadingCountry, extendedNavigation } = useContext(AppContext)

  if (loadingCountry) return <Pending text="Getting your current location..." />

  return (
    <div>
      <Header extended={extendedNavigation} />
      <Navigation />
      <VocabularyList />
    </div>
  )
}

export default App
