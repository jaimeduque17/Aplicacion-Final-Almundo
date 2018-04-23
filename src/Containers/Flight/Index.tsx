import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'
import CardFrom from '../../Components/CardFrom'
import CardTo from '../../Components/CardTo'
import NavBar from '../../Components/NavBar'
import _styles from './Style'

export default class App extends Component {
  render() {
    return (
      <View>
        <NavBar />
        <View style={styles.container}>
          {/* <Text style={styles.txtCont1}>Precio total.</Text> */}
          {/* <Text style={styles.txtCont2}>impuestos y tasas no incluidos.</Text> */}
          {/* {_array.map((card) => <Card key={card.toString()} />)} */}
          <CardFrom />
          <Icon iconName='flights' iconStyle={styles.iconFlight} />
          <CardTo />
          {/* <View style={styles.containerDate}> */}
            <Text style={styles.txtDeparture}>{'dedededeeded'}</Text>
          {/* </View> */}
        </View>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
