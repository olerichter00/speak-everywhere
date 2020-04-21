import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"

import Index from "../../pages/index"

const translations = {
  hello: "Hallo",
  thanks: "Danke",
  yes: "Ja",
  no: "Nein",
  sorry: "Es tut mir Leids",
  "How are you?": "Wie gehts?",
  goodbye: "Auf Wiedersehen",
}

beforeEach(() => {
  fetch.mockResponse(
    JSON.stringify({
      country_code: "DE",
    }),
  )
})

describe("Index Page", () => {
  it("renders all translations", async () => {
    const { findByText } = render(<Index />)

    expect(await findByText("Germany")).toBeTruthy()
    expect(await findByText("German")).toBeTruthy()

    fireEvent.click(await findByText("Learn"))

    for (let i = 0; i < translations.length; i++) {
      expect(await findByText(Object.keys(translations)[i])).toBeTruthy()
      expect(await findByText(translations[i])).toBeTruthy()
    }
  })
})
