import React from 'react'
import { View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import Flight from '../Containers/Flight/Index'
import FlightRound from '../Containers/FlightRound/Index'
import FlightMulti from '../Containers/FlightMulti/Index'

const Routes = () => (
  <View style={{ flex: 1}}>
    <Router>
      <Scene key='root'>
        <Scene key='flight' component={Flight} title='Flight' hideNavBar={true} />
        <Scene key='flightRound' component={FlightRound} title='FlightRound' hideNavBar={true} />
        <Scene key='flightMulti' component={FlightMulti} title='FlightMulti' hideNavBar={true} />
      </Scene>
    </Router>
  </View>

)

export default Routes