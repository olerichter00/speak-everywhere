import React from "react"
import { render, fireEvent } from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"

import Index from "../../pages/index"

const userTranslations = [
  "Hello",
  "Thank You",
  "Yes",
  "No",
  "I’m Sorry",
  "How are you?",
  "Goodbye",
]

const locationTranslations = [
  "Hallo",
  "Danke",
  "Ja",
  "Nein",
  "Es tut mir Leid",
  "Wie gehts?",
  "Auf Wiedersehen",
]

beforeEach(() => {
  navigator.__defineGetter__("languages", () => ["en-US"])

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

    for (let i = 0; i < userTranslations.length; i++) {
      expect(await findByText(userTranslations[i])).toBeTruthy()

      expect(await findByText(locationTranslations[i])).toBeTruthy()
    }
  })
})
