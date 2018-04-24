import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient'
// import * as Animatable from 'react-native-animatable'
import _styles from './Style'
import { BoxShadow } from 'react-native-shadow'
// import { initializeButtonAnimate } from '../../Helpers/Animated'
import { getComponentStyle } from '../../Helpers/Stylus'
import { Icon } from '../../Helpers/Icons'
import { Actions } from 'react-native-router-flux'

class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const shadowOpt = {
            width: 360,
            height: 128,
            color: '#000',
            border: 2,
            radius: 3,
            opacity: 0.1,
            x: 0,
            y: 3,
            style: { marginBottom: 5 }
        }
        return (
            <BoxShadow setting={shadowOpt} >
                    <View style={styles.containerCentral}>
                        <TouchableOpacity style={styles.btnBack}>
                            <Icon iconName='back' iconStyle={styles.iconBack} />
                        </TouchableOpacity>
                        <View style={styles.containerTitle}>
                            <Text numberOfLines={1} style={styles.titlePrincipal}>{'Vuelos'}</Text>
                        </View>
                    </View>
                    <View style={styles.containerBtns}>
                        <TouchableOpacity style={styles.btnAnimation}
                        onPress={() => { Actions.flight() }}>
                            <Text style={styles.txtOrder}>{'SOLO IDA'}</Text>
                        </TouchableOpacity>
                        <View style={styles.breakBar1}></View>
                        <TouchableOpacity style={styles.btnAnimation}
                        onPress={() => { Actions.flightRound() }}>
                            <Text style={styles.txtFilter}>{'IDA Y VUELTA'}</Text>
                        </TouchableOpacity>
                        <View style={styles.breakBar2}></View>
                        <TouchableOpacity style={styles.btnAnimation}
                        onPress={() => { Actions.flightMulti() }}>
                            <Text style={styles.txtMap}>{'MULTIDESTINO'}</Text>
                        </TouchableOpacity>
                    </View>
            </BoxShadow>
        )
    }
}

const styles = getComponentStyle(_styles)

export default NavBar