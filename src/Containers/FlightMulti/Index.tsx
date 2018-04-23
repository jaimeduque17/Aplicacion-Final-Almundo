import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Text, ScrollView } from 'react-native'
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
        <ScrollView>
          <View style={styles.container}>
            <CardFrom />
            <CardTo />
          </View>
          <Icon iconName='flights' iconStyle={styles.iconFlight1} />
          <Icon iconName='flights' iconStyle={styles.iconFlight2} />
          <View style={styles.container2}>
            <CardFrom />
            <CardTo />
          </View>
          <View style={styles.containerDate1}>
            <Icon iconName='date' iconStyle={styles.iconCalendar} />
            <TextInput style={styles.dateDeparture}>{'23 Abr 2018'}</TextInput>
          </View>
          <View style={styles.containerDate2}>
          <Icon iconName='date' iconStyle={styles.iconCalendar} />
          <TextInput style={styles.dateDeparture}>{'23 May 2018'}</TextInput>
        </View>
          <TouchableOpacity style={styles.containerBtn}>
            <Text style={styles.btnSearch}>{'BUSCAR'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
