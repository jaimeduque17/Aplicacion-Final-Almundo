import React from 'react'
import { View } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
// import Flight from '../Containers/Flight/Index'
import FlightRound from '../Containers/FlightRound/Index'

const Routes = () => (
  <View style={{ flex: 1}}>
    <Router>
      <Scene key='root'>
        {/* <Scene key='Flight' component={Flight} title='Flight' hideNavBar={true} /> */}
        <Scene key='FlightRound' component={FlightRound} title='FlightRound' hideNavBar={true} />
      </Scene>
    </Router>
  </View>

)

export default Routes