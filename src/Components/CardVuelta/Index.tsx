import React, { Component } from 'react'
import { View, TextInput, Text } from 'react-native'
import _styles from './Style'
import { getComponentStyle } from '../../Helpers/Stylus'

class CardVuelta extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressed: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View stye={{width: 109}}>
          <Text style={styles.textStyle}>{'Origen:'}</Text>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>
        <View stye={{width: 109}}>
          <Text style={styles.textStyle}>{'Destino:'}</Text>
          <TextInput style={styles.textInputStyle}></TextInput>
        </View>
          <Text style={styles.textStyle}>{'Fechas:'}</Text>
        <View stye={{width: 109, flexDirection: 'row'}}>
          <TextInput style={styles.textInputDate1}></TextInput>
          <TextInput style={styles.textInputDate2}></TextInput>
        </View>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)

export default CardVuelta