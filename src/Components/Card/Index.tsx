import React, { Component } from 'react'
import { View, Text, Picker } from 'react-native'
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
      { name: 'Estocolmo', value: 'ARN' }]
    }
  }

  render() {
    const { multidestino, soloida, onSelectOrigin, addFecha, addOrigen, addDestino, originValue,
      onSelectDestino, destinoValue, onSelectFechaIda, fechaIdaValue, onSelectFechaVuelta,
      fechaVueltaValue, indice } = this.props
    const _soloida = soloida || false
    const { ciudades } = this.state
    return (
      <View style={styles.container}>
        <View stye={{ width: 109 }}>
          <Text style={styles.textStyle}>{'Origen:'}</Text>
          <Picker
            selectedValue={originValue}
            style={{ height: 50, width: 180 }}
            onValueChange={(itemValue, itemIndex) => multidestino ? addOrigen(itemValue, indice) :
              onSelectOrigin(itemValue, itemIndex)}>
            {ciudades.map((ciudad, index) => <Picker.Item label={ciudad.name} value={ciudad.value} key={index} />)}
          </Picker>
        </View>
        <View stye={{ width: 109 }}>
          <Text style={styles.textStyle}>{'Destino:'}</Text>
          <Picker
            selectedValue={destinoValue}
            style={{ height: 50, width: 180 }}
            onValueChange={(itemValue, itemIndex) => multidestino ? addDestino(itemValue, indice) :
              onSelectDestino(itemValue, itemIndex)}>
            {ciudades.map((ciudad, index) => <Picker.Item label={ciudad.name} value={ciudad.value} key={index} />)}
          </Picker>
        </View>
        <Text style={styles.textStyle}>{'Fechas:'}</Text>
        <View stye={{ width: 109, flexDirection: 'row' }}>
          <DateInput
            textLabel={'Ida'}
            dateValue={(fechaIdaValue || new Date())}
            minDate={new Date()}
            onchangeDate={(date) => multidestino ? addFecha(date, indice) : onSelectFechaIda(date)} />
          {(_soloida || multidestino) ? null : <DateInput
            textLabel={'Regreso'}
            dateValue={fechaVueltaValue}
            minDate={new Date()}
            onchangeDate={(date) => onSelectFechaVuelta(date)} />}
        </View>
      </View >
    )
  }
}

const styles = getComponentStyle(_styles)

export default Card