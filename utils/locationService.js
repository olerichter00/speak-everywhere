import fetch from "isomorphic-unfetch"

import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

const locate = async () => {
  // try {
  const response = await fetch(publicRuntimeConfig.GEOLOCATION_DB_URL)

  if (response.ok) {
    const { country_code } = await response.json()

    return { country: country_code }
  } else {
    throw new Error("Something went wrong while fetching the location...")
  }
  // } catch (error) {
  //   console.error(error)
  // }
}

export default { locate }
