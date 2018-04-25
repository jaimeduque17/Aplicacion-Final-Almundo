import React, { Component } from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
// import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'
import Card from '../../Components/Card'
// import CardTo from '../../Components/CardTo'
import NavBar from '../../Components/NavBar'
import _styles from './Style'

export default class Flight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vista: 'SOLO-IDA'
    }

    this.fetchFlights = this.fetchFlights.bind(this)
    this.onClickSoloIda = this.onClickSoloIda.bind(this)
    this.onClickIdaYVuelta = this.onClickIdaYVuelta.bind(this)
    this.onClickMultidestino = this.onClickMultidestino.bind(this)
    this.cargarVista = this.cargarVista.bind(this)
  }

  // async componentWillMount() => {
  //   const url = `http://0c8e73f2.ngrok.i/flight`
  //   console.log('url', url)
  //   const response = await fetch(url)
  //   console.log('response', response)
  //   let flights = await response.json()
  //   console.log(flights)
  //   return flights
  // }

fetchFlights() {
  try {
    fetch('http://192.168.1.65:5058/flight')
    // http://0c8e73f2.ngrok.io
      .then((resp) => resp.json())
      .then((data) => {
        console.log('Data', data)
      })

  } catch (error) {
    console.log('Error fetch flights', error)
  }
}

onClickSoloIda() {
  this.setState({ vista: 'SOLO-IDA' })
}

onClickIdaYVuelta() {
  this.setState({ vista: 'IDA-VUELTA' })
}

onClickMultidestino() {
  this.setState({ vista: 'MULTI' })
}

cargarVista() {
  const { vista } = this.state
  if ('SOLO-IDA' === vista) {
    return (
      <Card soloida={true} />
    )
  }
  if ('IDA-VUELTA' === vista) {
    return (
      <Card />
    )
  }
  if ('MULTI' === vista) {
    return (
      <Text>{'En Construccion'}</Text>
    )
  }
}

render() {
  return (
    <View style={{ flexDirection: 'column' }}>
      <NavBar soloida={this.onClickSoloIda} idayvuelta={this.onClickIdaYVuelta}
        multidestino={this.onClickMultidestino} />
      <View style={styles.container1}>
        {this.cargarVista()}
      </View>
      <TouchableOpacity onPress={this.fetchFlights}
        style={styles.btnStyle}>
        <Text style={styles.btnSearch}>{'BUSCAR'}</Text>
      </TouchableOpacity>
    </View>
  )
}
}

const styles = getComponentStyle(_styles)
