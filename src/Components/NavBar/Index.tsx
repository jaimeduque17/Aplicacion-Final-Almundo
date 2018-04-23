import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import * as Animatable from 'react-native-animatable'
import _styles from './Style'
import { initializeButtonAnimate } from '../../Helpers/Animated'
import { getComponentStyle } from '../../Helpers/Stylus'
import { Icon } from '../../Helpers/Icons'

class NavBar extends Component {

    render() {

        initializeButtonAnimate()
        let btnOrder: any
        let btnFilter: any
        let btnMap: any

        const handlerbtnOrder = ref => btnOrder = ref
        const handlerbtnFilter = ref => btnFilter = ref
        const handlerbtnMap = ref => btnMap = ref

        function order() {
            btnOrder.zoomOut()
        }

        function filter() {
            btnFilter.zoomOut()
        }

        function map() {
            btnMap.zoomOut()
        }
        return (
            <LinearGradient
                colors={['rgb(239, 83, 117)', 'rgb(234, 100, 34)']}
                start={{ x: 0.0, y: 0.0 }} end={{ x: 1.0, y: 1.0 }}
                style={{ width: 360, height: 128 }}>
                <View style={styles.containerCentral}>
                    <TouchableOpacity style={styles.btnBack}>
                        <Icon iconName='back' iconStyle={styles.iconBack} />
                    </TouchableOpacity>
                    <View style={styles.containerTitle}>
                        <Text numberOfLines={1} style={styles.titlePrincipal}>{'Vuelos'}</Text>
                    </View>
                </View>
                <View style={styles.containerBtns}>
                    <TouchableOpacity style={styles.btnAnimation} onPress={() => order()}>
                        <Animatable.View
                            ref={handlerbtnOrder}
                            duration={1000}
                            style={styles.circle}>
                        </Animatable.View>
                        <Text style={styles.txtOrder}>{'SOLO IDA'}</Text>
                    </TouchableOpacity>
                    <View style={styles.breakBar1}></View>
                    <TouchableOpacity style={styles.btnAnimation} onPress={() => filter()}>
                        <Animatable.View
                            ref={handlerbtnFilter}
                            duration={1000}
                            style={styles.circle}>
                        </Animatable.View>
                        <Text style={styles.txtFilter}>{'IDA Y VUELTA'}</Text>
                    </TouchableOpacity>
                    <View style={styles.breakBar2}></View>
                    <TouchableOpacity style={styles.btnAnimation} onPress={() => map()}>
                        <Animatable.View
                            ref={handlerbtnMap}
                            duration={1000}
                            style={styles.circle}>
                        </Animatable.View>
                        <Text style={styles.txtMap}>{'MULTIDESTINO'}</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        )
    }
}

const styles = getComponentStyle(_styles)

export default NavBar