import React from "react"

import { App, AppContextProvider } from "../components"

const Index: React.FC = () => (
  <AppContextProvider>
    <App />
  </AppContextProvider>
)

export default Index
