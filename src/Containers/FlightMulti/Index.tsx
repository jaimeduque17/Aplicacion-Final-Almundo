import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
// import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'
import CardIda from '../../Components/CardIda'
import NavBar from '../../Components/NavBar'
import _styles from './Style'

export default class App extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <NavBar />
        <ScrollView>
          <View style={styles.container1}>
            <CardIda />
          </View>
          <View style={styles.container2}>
            <CardIda />
          </View>
          <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnSearch}>{'BUSCAR'}</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
