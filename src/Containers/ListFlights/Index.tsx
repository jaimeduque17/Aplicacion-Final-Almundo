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
    console.log(this.props, 'Soy propiedades')
    const { data } = this.props
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 10 }}>
        {data.map((item) =>
          <TouchableOpacity onPress={() => { this.onSelectDetalle(item) }}>
            < View style={{
              width: 340, height: 150, alignItems: 'center', justifyContent: 'center'
            }}>
              <Image style={{ zIndex: 1, position: 'absolute', top: 0, left: 0, width: 340, height: 150 }}
                source={{ uri: item.image }} />
              < View style={{
                zIndex: 2,
                position: 'absolute', top: 0, left: 0, width: 340, height: 150,
                backgroundColor: 'rgba(0,0,0,0.3)'
              }} />
              <View style={{ zIndex: 3, flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, color: 'white' }}>{`${item.origin.name} a ${item.destination.name}`}</Text>
              </View>
              <View style={{ zIndex: 3, flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, color: 'white' }}> {`Precio  $${item.price}`}</Text>
              </View >
            </View >
          </TouchableOpacity>)
        }
      </View >
    )
  }
}

const styles = getComponentStyle(_styles)
