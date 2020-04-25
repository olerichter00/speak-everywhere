import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"

import { Vocabulary } from "../../components"

describe("Vocabulary", () => {
  describe("with correct props", () => {
    const props = {
      language: "de",
      dictionary: { hello: "Hallo" },
      userDictionary: { hello: "Ciao" },
      vocabulary: "hello",
    }

    it("renders correct translation", () => {
      const { queryByText } = render(<Vocabulary {...props} />)

      expect(queryByText(/hallo/i)).toBeTruthy()

      expect(queryByText(/ciao/i)).toBeTruthy()
    })
  })
})
