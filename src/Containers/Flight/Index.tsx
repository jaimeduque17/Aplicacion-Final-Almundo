import React, { Component } from 'react'
import { View, TouchableOpacity, Text, FlatList, Alert } from 'react-native'
// import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'
import Card from '../../Components/Card'
// import CardTo from '../../Components/CardTo'
import NavBar from '../../Components/NavBar'
import _styles from './Style'
import { searchFlightsDeparture } from '../../Services/Index'
import Sugar from 'sugar'
import { Actions } from 'react-native-router-flux'

export default class Flight extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vista: 'SOLO-IDA',
      origen: '',
      destino: '',
      fechaIda: new Date(),
      fechaVuelta: ''

    }

    this.onClickSoloIda = this.onClickSoloIda.bind(this)
    this.onClickIdaYVuelta = this.onClickIdaYVuelta.bind(this)
    this.onClickMultidestino = this.onClickMultidestino.bind(this)
    this.cargarVista = this.cargarVista.bind(this)
    this.getFlights = this.getFlights.bind(this)
    this.departureFlights = this.departureFlights.bind(this)
    this.returnFlights = this.returnFlights.bind(this)
    this.multiFlights = this.multiFlights.bind(this)
    this.selectOrigin = this.selectOrigin.bind(this)
    this.selectDestino = this.selectDestino.bind(this)
    this.selectFechaIda = this.selectFechaIda.bind(this)
  }

  getFlights() {
    const { vista } = this.state
    if ('SOLO-IDA' === vista) {
      console.log('Entre aqui')
      return this.departureFlights()
    }
    if ('IDA-VUELTA' === vista) {
      return this.returnFlights()
    }
    if ('MULTI' === vista) {
      return this.multiFlights()
    }
  }

  async departureFlights() {
    try {
      const { origen, destino, fechaIda } = this.state
      const date = Sugar.Date(fechaIda).format('{dd}-{MM}-{yyyy}').raw
      const query = `origin=${origen}&destination=${destino}&dateDeparture=${date}`
      console.log('Soy el query', query)
      const data = await searchFlightsDeparture(query)
      Actions.push('listflights', { data: data })

    } catch (error) {
      console.log('soy error', error)
    }
  }

  returnFlights() {
    console.log('Boton de Ida y Vuelta')
  }

  multiFlights() {
    console.log('Boton de MultiDestino')
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
        <Card onSelectOrigin={this.selectOrigin} originValue={this.state.origen}
          onSelectDestino={this.selectDestino} destinoValue={this.state.destino} soloida={true}
          onSelectFechaIda={this.selectFechaIda} fechaIdaValue={this.state.fechaIda} />
      )
    }
    if ('IDA-VUELTA' === vista) {
      return (
        <Card />
      )
    }
    if ('MULTI' === vista) {
      return (
        <Text>{'En construccion'}</Text>
      )
    }
  }

  selectOrigin(itemValue, itemIndex) {
    this.setState({ origen: itemValue })
  }

  selectDestino(itemValue, itemIndex) {
    this.setState({ destino: itemValue })
  }

  selectFechaIda = (fecha) => {
    this.setState({ fechaIda: fecha })
  }

  render() {
    console.log('Soy el hpta origin', this.state.origen)
    return (
      <View style={{ flexDirection: 'column' }}>
        <NavBar soloida={this.onClickSoloIda} idayvuelta={this.onClickIdaYVuelta}
          multidestino={this.onClickMultidestino} />
        <View style={styles.container1}>
          {this.cargarVista()}
        </View>
        <TouchableOpacity onPress={() => this.getFlights()}
          style={styles.btnStyle}>
          <Text style={styles.btnSearch}>{'BUSCAR'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = getComponentStyle(_styles)
