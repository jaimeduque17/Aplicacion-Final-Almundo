import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import _styles from './Style'
import { getComponentStyle } from '../../Helpers/Stylus'

class CardIda extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressed: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>{'Origen:'}</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
        <Text style={styles.textStyle}>{'Destino:'}</Text>
        <TextInput style={styles.textInputStyle}></TextInput>
        <Text style={styles.textStyle}>{'Fechas:'}</Text>
        <TextInput style={styles.textInputDate}></TextInput>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)

export default CardIda