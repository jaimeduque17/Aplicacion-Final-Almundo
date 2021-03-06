import React, { Component } from 'react'
import { View, Text, TouchableOpacity, DatePickerAndroid, Platform, StyleSheet } from 'react-native'
import _styles from './style'
import { getComponentStyle } from '../../Helpers/Stylus'
const styles = StyleSheet.create(getComponentStyle(_styles))
class DateInput extends Component<{ Props }> {
    constructor(props) {
        super(props)
        this.state = {
            dateValueLocal: props.dateValue
        }
    }

    showAndroidDatePicker = async () => {
        const { onchangeDate, minDate } = this.props
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(this.state.dateValueLocal),
                minDate: minDate
            })
            if (action !== DatePickerAndroid.dismissedAction) {
                const date = new Date(year, month, day)
                this.setState({ dateValueLocal: date })
                onchangeDate(date)
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message)
        }
    }

    render() {
        return (
            <TouchableOpacity style={styles.containerBtn}
                activeOpacity={1}
                onPress={() => {
                    if (Platform.OS !== 'ios') {
                        this.showAndroidDatePicker()
                    }
                }}>
                <View style={styles.containerText}>
                    <Text style={styles.txtLabel}>{this.props.textLabel}</Text>
                    <Text style={styles.txtDate}>{this.state.dateValueLocal.toLocaleDateString()}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default DateInput