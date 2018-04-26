import React, { Component } from 'react'
import { View, TextInput, Text, Picker } from 'react-native'
import DateInput from '../DateInput'
import _styles from './Style'
import { getComponentStyle } from '../../Helpers/Stylus'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressed: false,
      ciudades: [{ name: 'Paris', value: 'CDG' },
      { name: 'Miami', value: 'MIA' },
      { name: 'Buenos Aires', value: 'BUE' },
      { name: 'Amsterdam', value: 'AMS' },
      { name: 'El Cairo', value: 'CAI' },
      { name: 'Calcuta', value: 'CCU' },
      { name: 'Londres', value: 'LHR' },
      { name: 'Calcuta', value: 'CCU' },
      { name: 'Bruselas', value: 'BRU' },
      { name: 'Estocolmo', value: 'ARN' }],
      dateDeparture: new Date(),
      dateReturn: new Date()
    }
  }

  render() {
    const { soloida, onSelectOrigin, originValue, onSelectDestino, destinoValue,
      onSelectFechaIda, fechaIdaValue } = this.props
    const _soloida = soloida || false
    const { ciudades } = this.state
    return (
      <View style={styles.container}>
        <View stye={{ width: 109 }}>
          <Text style={styles.textStyle}>{'Origen:'}</Text>
          <Picker
            selectedValue={originValue}
            style={{ height: 50, width: 180 }}
            onValueChange={(itemValue, itemIndex) => onSelectOrigin(itemValue, itemIndex)}>
            {ciudades.map((ciudad, index) => <Picker.Item label={ciudad.name} value={ciudad.value} key={index} />)}
          </Picker>
        </View>
        <View stye={{ width: 109 }}>
          <Text style={styles.textStyle}>{'Destino:'}</Text>
          <Picker
            selectedValue={destinoValue}
            style={{ height: 50, width: 180 }}
            onValueChange={(itemValue, itemIndex) => onSelectDestino(itemValue, itemIndex)}>
            {ciudades.map((ciudad, index) => <Picker.Item label={ciudad.name} value={ciudad.value} key={index} />)}
          </Picker>
        </View>
        <Text style={styles.textStyle}>{'Fechas:'}</Text>
        <View stye={{ width: 109, flexDirection: 'row' }}>
          <DateInput
            textLabel={'Ida'}
            dateValue={fechaIdaValue}
            minDate={new Date()}
            // onchangeDate={(date) => { this.setState({ dateDeparture: date }) }} 
            onchangeDate={(date) => onSelectFechaIda(date)}

          />
          {_soloida ? null : <DateInput
            textLabel={'Regreso'}
            dateValue={this.state.dateReturn}
            minDate={new Date()}
            onchangeDate={(date) => { this.setState({ dateReturn: date }) }} />}
        </View>
      </View >
    )
  }
}

const styles = getComponentStyle(_styles)

export default Card