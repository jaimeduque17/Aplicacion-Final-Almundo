import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import _styles from './Style'
import { BoxShadow } from 'react-native-shadow'
import { getComponentStyle } from '../../Helpers/Stylus'
import { Actions } from 'react-native-router-flux'

export default class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            botones: [{ nombre: 'SOLO IDA', accion: this.props.soloida },
            { nombre: 'IDA Y VUELTA', accion: this.props.idayvuelta },
            { nombre: 'MULTIDESTINO', accion: this.props.multidestino }]
        }
        this.back = this.back.bind(this)
    }

    back() {
        Actions.pop()
    }

    render() {
        const shadowOpt = {
            width: 360,
            height: 128,
            color: '#fff',
            border: 1,
            radius: 1,
            opacity: 0.7,
            x: 0,
            y: 3,
            style: { marginBottom: 2 }
        }
        const { botones } = this.state
        return (
            <BoxShadow setting={shadowOpt} >
                <View style={styles.containerCentral}>
                    <View style={styles.containerTitle}>
                        <Text numberOfLines={1} style={styles.titlePrincipal}>{'Vuelos'}</Text>
                    </ View>
                </View>
                <View style={styles.containerBtns}>
                    <View style={styles.breakBar1} />
                    <View style={styles.breakBar2} />
                    {botones.map((boton, index) => <TouchableOpacity key={index} onPress={boton.accion}
                        style={styles.btnAnimation}>
                        <Text style={styles.buttonText}>{boton.nombre}</Text>
                    </TouchableOpacity>)}
                </View>
            </BoxShadow>
        )
    }
}

const styles = getComponentStyle(_styles)
