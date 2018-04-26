import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import _styles from './Style'

export default class FlightDetail extends Component {
  render() {
    const { data } = this.props
    return (
      <View style={styles.containerPrincipal}>
        <Image style={styles.imgStyle} source={{ uri: data.image }} />
        <View style={styles.container1}>
          <Text style={styles.txtOrigenStyle}>{'Origen'}</Text>
          <Text style={styles.txtDataOrigin}>{data.origin.name}</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.txtDestinoStyle}>{'Destino'}</Text>
          <Text style={styles.txtDataDestination}>{data.destination.name}</Text>
        </View>
        <View style={styles.container3}>
          <Text style={styles.txtHoraSalida}>{'Hora Salida'}</Text>
          <Text style={styles.txtDataHora}>{data.hourDeparture}</Text>
        </View>

        <TouchableOpacity style={styles.btnComprar}>
          <Text style={styles.txtComprar}>{`Comprar Vuelo a $${data.price}`}</Text>
        </TouchableOpacity>
      </View >
    )
  }
}

const styles = getComponentStyle(_styles)
