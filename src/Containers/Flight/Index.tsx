import React, { Component } from 'react'
import { View } from 'react-native'
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
        <View>
            <View style={styles.containerCard}>
              {/* <Text style={styles.txtCont1}>Precio total.</Text> */}
              {/* <Text style={styles.txtCont2}>impuestos y tasas no incluidos.</Text> */}
              {/* {_array.map((card) => <Card key={card.toString()} />)} */}
              <CardFrom />
              <Icon iconName='flights'
              iconStyle={styles.iconFlight} />
              <CardTo />
            </View>
        </View>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
