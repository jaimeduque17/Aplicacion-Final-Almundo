import React, { Component } from 'react'
// import { Platform, Text, View } from 'react-native'
// import { getComponentStyle } from '../Helpers/Stylus'
import Routes from '../Config/Router'
// import { Text } from 'react-native'
// import AlmundoRouter from '../Config/Router'
// import '../Helpers/Traslations'

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Routes />
    )
  }
}
