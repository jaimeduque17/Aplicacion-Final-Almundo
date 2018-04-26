const RUTA = 'http://3906c6ce.ngrok.io'

export const searchFlightsReturn = (params) => {
  return fetch(`${RUTA}/flights/return/?${params}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.data
    })
    .catch((error) => {
      console.error(error)
    })
}

export const searchFlightsDeparture = (params) => {
  return fetch(`${RUTA}/flights/departure/?${params}`)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.data
    })
    .catch((error) => {
      console.error(error)
    })
}
