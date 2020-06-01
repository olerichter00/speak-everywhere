import { useState, useEffect, useContext } from 'react'

import locationService from '../services/locationService'
import { AppContext } from '../components/appContext'

const useDetectCountry = (
  randomCountry: boolean = false,
): [string, Function, boolean, boolean] => {
  const [currentCountry, setCurrentCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const { countryService } = useContext(AppContext)

  useEffect(() => {
    if (randomCountry) {
      setTimeout(() => {
        setCurrentCountry(
          Object.keys(countryService.allCountries)[
            Math.floor(
              Math.random() * Object.keys(countryService.allCountries).length,
            )
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

        setCurrentCountry(location.country)
      } catch (error) {
        console.error('Error detecting country: ', error)

        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchCountry()
  }, [])

  return [currentCountry, setCurrentCountry, loading, error]
}

export default useDetectCountry
