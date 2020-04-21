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
  const result = {
    country_code: "DE",
  }

  fetch.mockResponse(JSON.stringify(result))
})

describe("Index Page", () => {
  it("renders all translations", async () => {
    const { findByText, findAllByText } = render(<Index />)

    expect(await findByText(/Germany/i)).toBeTruthy()
    expect(await findAllByText(/German/i)).toBeTruthy()

    fireEvent.click(await findByText("Learn"))

    for (let i = 0; i < translations.length; i++) {
      expect(await findByText(Object.keys(translations)[i])).toBeTruthy()
      expect(await findByText(translations[i])).toBeTruthy()
    }
  })
})
