import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import _styles from './Style'
import { getComponentStyle } from '../../Helpers/Stylus'

class CardIdaVuelta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressed: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInputReturn}></TextInput>
        <Text style={styles.textReturn}>{'Voy a'}</Text>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)

export default CardIdaVuelta