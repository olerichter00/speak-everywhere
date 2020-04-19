import React from "react"
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/jest-dom/extend-expect"

import Index from "../../pages/index"

beforeEach(() => {
  const result = {
    country_code: "DE",
    country_name: "Germany",
    city: "Gelsenkirchen",
    postal: "45881",
    latitude: 51.5213,
    longitude: 7.0747,
    IPv4: "89.247.252.44",
    state: "North Rhine-Westphalia",
  }

  fetch.mockResponseOnce(JSON.stringify(result))
})

describe("Index Page", () => {
  it("renders without crashing", () => {
    const { queryByText } = render(<Index />)

    expect(queryByText(/learn/i)).toBeTruthy()
  })
})
