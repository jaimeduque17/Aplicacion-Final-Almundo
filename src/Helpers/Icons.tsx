import React from 'react'
import { createIconSet } from 'react-native-vector-icons'
// import ios from '../Resource/Fonts/ios'
import * as android from '../Assets/json/AlmundoIcons.json'
const AppIcon = createIconSet(android, 'AlmundoFont', 'AlmundoFont.ttf')

export const Icon = ({ iconName, iconSize, iconColor, iconStyle }: any) => {
    return (<AppIcon name={iconName} size={iconSize} color={iconColor} style={iconStyle} allowFontScaling={true}/>)
}