import React, { Component } from 'react'
import { View, TouchableOpacity, Text, Image } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import _styles from './Style'
import { Actions } from 'react-native-router-flux'

export default class ListFlights extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.onSelectDetalle = this.onSelectDetalle.bind(this)
  }

  onSelectDetalle(item) {
    Actions.push('detailflights', { data: item })
  }

  render() {
    const { data, idaVuelta } = this.props
    const validarIdaVuelta = idaVuelta === undefined ? false : idaVuelta

    return (
      <View style={styles.containerPrincipal}>
        {validarIdaVuelta ? <View style={styles.container1}>
          <Text style={styles.txtVueloIda}>{'Vuelos de Ida'}</Text></View> : null}
        {validarIdaVuelta ? data.ida.map((item) =>
          <TouchableOpacity onPress={() => { this.onSelectDetalle(item) }} style={styles.btnCard}>
            < View style={styles.container2}>
              <Image style={styles.imageStyle}
                source={{ uri: item.image }} />
              <View style={styles.container3} />
              <View style={styles.container4}>
                <Text style={styles.txtStyle}>{`${item.origin.name} a ${item.destination.name}`}</Text>
              </View>
              <View style={styles.container4}>
                <Text style={styles.txtPrecio}> {`Precio  $${item.price}`}</Text>
              </View >
            </View >
          </TouchableOpacity> :
          data.map((item) =>
            <TouchableOpacity onPress={() => { this.onSelectDetalle(item) }} style={styles.boton1}>
              < View style={styles.container5}>
                <Image style={styles.image1}
                  source={{ uri: item.image }} />
                < View style={styles.container6} />
                <View style={styles.container4}>
                  <Text style={styles.txtOrigen}>
                    {`${item.origin.name} a ${item.destination.name}`}</Text>
                </View>
                <View style={styles.container4}>
                  <Text style={styles.txtPrecio}> {`Precio  $${item.price}`}</Text>
                </View >
              </View >
            </TouchableOpacity>)
        }
        {validarIdaVuelta ? <View style={styles.container7}>
          <Text style={styles.txtVueloRegreso}>{'Vuelos de Regreso'}</Text></View> : null}
        {validarIdaVuelta ? data.vuelta.map((item) =>
          <TouchableOpacity onPress={() => { this.onSelectDetalle(item) }} style={styles.boton2}>
            < View style={styles.container7}>
              <Image style={styles.image2}
                source={{ uri: item.image }} />
              < View style={styles.container8} />
              <View style={styles.container4}>
                <Text style={styles.txtOrigen}>{`${item.origin.name} a ${item.destination.name}`}</Text>
              </View>
              <View style={styles.container4}>
                <Text style={styles.txtPrecio}> {`Precio  $${item.price}`}</Text>
              </View >
            </View >
          </TouchableOpacity>) : null
        }
      </View >
    )
  }
}

const styles = getComponentStyle(_styles)
