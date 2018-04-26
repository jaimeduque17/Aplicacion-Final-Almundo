import React from 'react'
import { View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Flight from '../Containers/Flight/Index'
import FlightRound from '../Containers/FlightRound/Index'
import FlightMulti from '../Containers/FlightMulti/Index'
import ListFlights from '../Containers/ListFlights'
import DetailFlight from '../Containers/FlightDetail'

const Routes = () => (
  <View style={{ flex: 1 }}>
    <Router>
      <Scene key='root'>
        <Scene key='flight' initial={true} component={Flight} hideNavBar />
        <Scene key='detailflights' component={DetailFlight} title='Detalle Destino' />
        <Scene key='listflights' component={ListFlights} title='Lista de Vuelos' />
        <Scene key='flightRound' component={FlightRound} hideNavBar />
        <Scene key='flightMulti' component={FlightMulti} hideNavBar />
      </Scene>
    </Router>
  </View>

)

export default Routes