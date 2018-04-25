import React, { Component } from 'react'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
// import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'
import Card from '../../Components/Card'
import NavBar from '../../Components/NavBar'
import _styles from './Style'

export default class App extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <NavBar />
        <ScrollView>
          <View style={styles.container1}>
            <Card />
          </View>
          <View style={styles.container2}>
            <Card />
          </View>
          <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnSearch}>{'BUSCAR'}</Text>
          </TouchableOpacity>
          <View style={styles.coverTextInput1}></View>
          <View style={styles.coverTextInput2}></View>
        </ScrollView>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
