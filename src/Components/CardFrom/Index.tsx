import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import _styles from './Style'
import { Icon } from '../../Helpers/Icons'
import { getComponentStyle } from '../../Helpers/Stylus'

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pressed: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
          {/* <Icon iconName='cup' iconStyle={styles.iconCup} /> */}
        </View>
    )
  }
}

const styles = getComponentStyle(_styles)

export default Card