import { useState, useEffect } from "react"

import locationService from "../utils/locationService"
import { allCountries, Countries } from "../utils/data"

const useDetectCountry = (
  countries: Countries = allCountries,
  randomCountry: boolean = false,
): [string, Function, boolean, boolean] => {
  const [country, setCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (randomCountry) {
      setTimeout(() => {
        setCountry(
          Object.keys(countries)[
            Math.floor(Math.random() * Object.keys(countries).length)
          ],
        )
        setLoading(false)
      }, 100 + Math.floor(Math.random() * 100))

      return
    }

    const fetchCountry = async () => {
      try {
        setLoading(true)

        const location = await locationService.locate()

        setCountry(location.country)
      } catch (error) {
        console.error("Error detecting country: ", error)

        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCountry()
  }, [countries])

  return [country, setCountry, loading, error]
}

export default useDetectCountry