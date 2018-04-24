import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'
import CardIda from '../../Components/CardIda'
// import CardTo from '../../Components/CardTo'
import NavBar from '../../Components/NavBar'
import _styles from './Style'

export default class App extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'column' }}>
        <NavBar />
          <View style={styles.container1}>
            <CardIda />
          </View>
          <TouchableOpacity style={styles.btnStyle}>
              <Text style={styles.btnSearch}>{'BUSCAR'}</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
