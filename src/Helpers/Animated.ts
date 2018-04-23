import * as Animatable from 'react-native-animatable'

export const initializeButtonAnimate = () => {
 Animatable.initializeRegistryWithDefinitions({
   zoomOut: {
     0: {
       opacity: 1,
       scaleX: 0,
       scaleY: 0
     },
     1: {
       opacity: 0,
       scaleX: 10,
       scaleY: 10
     }
   }
 })
}