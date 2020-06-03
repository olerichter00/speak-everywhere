import fetch from 'isomorphic-unfetch'

import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export interface LocationService {
  locate: Function
}

type Country = {
  country: string
}

const locate = async (): Promise<Country> => {
  const response = await fetch(publicRuntimeConfig.GEOLOCATION_DB_URL || '')
  const { country_code } = await response.json()

  return { country: country_code }
}

export default { locate }
