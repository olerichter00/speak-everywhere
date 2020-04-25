import React from "react"

import { App, AppContextProvider } from "../components"

const Index = () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
)

export default Index
