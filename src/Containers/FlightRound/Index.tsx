import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'
import CardFrom from '../../Components/CardFrom'
import CardTo from '../../Components/CardTo'
import NavBar from '../../Components/NavBar'
import _styles from './Style'

export default class App extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <NavBar />
        <View style={styles.container}>
          {/* <Text style={styles.txtCont1}>Precio total.</Text> */}
          {/* <Text style={styles.txtCont2}>impuestos y tasas no incluidos.</Text> */}
          {/* {_array.map((card) => <Card key={card.toString()} />)} */}
          <CardFrom />
          <Icon iconName='flights' iconStyle={styles.iconFlight} />
          <CardTo />
        </View>
        <View style={styles.containerDateStart}>
          <Icon iconName='date' iconStyle={styles.iconCalendar} />
          <TextInput style={styles.dateDeparture}>{'23 Abr 2018'}</TextInput>
        </View>
        <View style={styles.containerDateEnd}>
          <Icon iconName='date' iconStyle={styles.iconCalendar} />
          <TextInput style={styles.dateDeparture}>{'23 May 2018'}</TextInput>
        </View>
        <TouchableOpacity style={styles.containerBtn}>
            <Text style={styles.btnSearch}>{'BUSCAR'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
