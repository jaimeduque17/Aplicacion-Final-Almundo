import React, { Component } from 'react'
import { View, TouchableOpacity, Text, FlatList } from 'react-native'
import { getComponentStyle } from '../../Helpers/Stylus'
import Card from '../../Components/Card'
import NavBar from '../../Components/NavBar'
import _styles from './Style'
import { searchFlightsDeparture, searchFlightsReturn } from '../../Services/Index'
import Sugar from 'sugar'
import { Actions } from 'react-native-router-flux'

const styles = getComponentStyle(_styles)
export default class Flight extends Component<{},
  { vista, origen, destino, origens, destinos, fechas, fechaIda, fechaVuelta, destinations }> {
  constructor(props) {
    super(props)
    this.state = {
      vista: 'SOLO-IDA',
      origen: '',
      destino: '',
      origens: [],
      destinos: [],
      fechas: [],
      destinations: [{}],
      fechaIda: Sugar.Date.create('now'),
      fechaVuelta: Sugar.Date.create('now')
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
    this.selectFechaVuelta = this.selectFechaVuelta.bind(this)
    this.addOrigen = this.addOrigen.bind(this)
    this.addDestino = this.addDestino.bind(this)
    this.addMultiTrip = this.addMultiTrip.bind(this)
  }
  getFlights() {
    const { vista } = this.state
    if ('SOLO-IDA' === vista) {
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
    const { origen, destino, fechaIda } = this.state
    const date = Sugar.Date(fechaIda).format('{dd}-{MM}-{yyyy}').raw
    const query = `origin=${origen}&destination=${destino}&dateDeparture=${date}`
    const data = await searchFlightsDeparture(query)
    Actions.push('listflights', { data: data })
  }
  async returnFlights() {
    let idaVuelta = { ida: [], vuelta: [] }
    const { origen, destino, fechaIda, fechaVuelta } = this.state
    const dateIda = Sugar.Date(fechaIda).format('{dd}-{MM}-{yyyy}').raw
    const dateVuelta = Sugar.Date(fechaVuelta).format('{dd}-{MM}-{yyyy}').raw
    const queryIda = `origin=${origen}&destination=${destino}&dateDeparture=${dateIda}`
    const queryVuelta = `origin=${origen}&destination=${destino}&dateReturn=${dateVuelta}`
    const dataIda = await searchFlightsDeparture(queryIda)
    const dataVuelta = await searchFlightsReturn(queryVuelta)
    idaVuelta.ida = dataIda
    idaVuelta.vuelta = dataVuelta
    Actions.push('listflights', { data: idaVuelta, idaVuelta: true })
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
  addMultiTrip() {
    this.setState({ destinations: [...this.state.destinations, {}] })
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
        <Card soloida={false} onSelectOrigin={this.selectOrigin} originValue={this.state.origen}
          onSelectDestino={this.selectDestino} destinoValue={this.state.destino}
          onSelectFechaIda={this.selectFechaIda} fechaIdaValue={this.state.fechaIda}
          onSelectFechaVuelta={this.selectFechaVuelta} fechaVueltaValue={this.state.fechaVuelta} />
      )
    }
    if ('MULTI' === vista) {
      return (
        <View>
          <View style={{ height: 350 }}>
            <FlatList
              _keyExtractor={(item, index) => `${index}`}
              data={this.state.destinations}
              renderItem={({ el, index }) =>
                <Card soloida={false} multidestino={true} onSelectOrigin={this.selectOrigin}
                  originValue={this.state.origens[index]}
                  indice={index}
                  onSelectDestino={this.selectDestino} destinoValue={this.state.destinos[index]}
                  addOrigen={this.addOrigen} addDestino={this.addDestino} addFecha={this.addFecha}
                  onSelectFechaIda={this.selectFechaIda} fechaIdaValue={this.state.fechas[index]}
                  onSelectFechaVuelta={this.selectFechaVuelta} fechaVueltaValue={this.state.fechaVuelta} />}
            />
          </View>
          <TouchableOpacity style={styles.botonMultidestino}
          onPress={() => this.addMultiTrip()}>
            <Text style={{color: 'rgb(255, 255, 255)', textAlign: 'center', fontWeight: 'bold',
              alignItems: 'center'}}>{'Añadir Destino'}</Text>
          </TouchableOpacity>
        </View>
      )
    }
  }
  selectOrigin(itemValue) {
    this.setState({ origen: itemValue })
  }
  selectDestino(itemValue) {
    this.setState({ destino: itemValue })
  }
  addOrigen(itemValue, indice) {
    const origens = (indice + 1) > this.state.origens.length ? [...this.state.origens, itemValue] :
      this.state.origens.map((el, i) => i === indice ? itemValue : el)
    this.setState({ origens })
  }
  addDestino(itemValue, indice) {
    const destinos = (indice + 1) > this.state.destinos.length ? [...this.state.destinos, itemValue] :
      this.state.destinos.map((el, i) => i === indice ? itemValue : el)
    this.setState({ destinos })
  }
  addFecha(itemValue, indice) {
    const fechas = (indice + 1) > this.state.fechas.length ? [...this.state.fechas, itemValue] :
      this.state.fechas.map((el, i) => i === indice ? itemValue : el)
    this.setState({ fechas })
  }
  selectFechaIda = (fecha) => {
    this.setState({ fechaIda: fecha })
  }
  selectFechaVuelta = (fecha) => {
    this.setState({ fechaVuelta: fecha })
  }
  render() {
    return (
      <View style={styles.containerPrincipal}>
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