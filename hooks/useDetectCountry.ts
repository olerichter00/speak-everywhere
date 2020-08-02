import { useState, useEffect, useContext } from 'react'

import locationService from '../services/locationService'

const useDetectCountry = (): [string, Function, boolean, boolean] => {
  const [currentCountry, setCurrentCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
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
