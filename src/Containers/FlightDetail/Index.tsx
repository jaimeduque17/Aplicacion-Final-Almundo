import React, { Component } from 'react'
import { View, TouchableOpacity, Text, , Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import _styles from './Style'

export default class FlightDetail extends Component {
  render() {
    const { data } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image style={{ width: 360, height: 300 }} source={{ uri: data.image }} />
        <View style={{
          borderBottomWidth: 1, padding: 15, width: 360, flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Origen'}</Text>
          <Text style={{ fontSize: 20 }}>{data.origin.name}</Text>
        </View>
        <View style={{
          borderBottomWidth: 1, padding: 15, width: 360, flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Destino'}</Text>
          <Text style={{ fontSize: 20 }}>{data.destination.name}</Text>
        </View>
        <View style={{
          borderBottomWidth: 1, padding: 15, width: 360, flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{'Hora Salia'}</Text>
          <Text style={{ fontSize: 20 }}>{data.hourDeparture}</Text>
        </View>

        <TouchableOpacity style={{ marginTop: 30, padding: 10, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
          <Text style={{ color: 'white', fontSize: 20 }}>{`Comprar Vuelo a $${data.price}`}</Text>
        </TouchableOpacity>
      </View >
    )
  }
}

const styles = getComponentStyle(_styles)
