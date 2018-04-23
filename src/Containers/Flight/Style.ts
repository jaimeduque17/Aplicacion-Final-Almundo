import { Fonts } from '../../Config/Constant'

export default {
  container: {
    backgroundColor: 'rgb(248, 248, 248))',
    width: 360,
    height: 640,
    flexDirection: 'row'
  },
  iconFlight: {
    fontSize: 23,
    marginTop: 60,
    marginLeft: 169,
    position: 'absolute',
    transform: [{
      rotateZ: '90deg'
    }]
  },
  containerText: {
    width: 328,
    height: 40,
    marginTop: 300,
    marginLeft: 169,
    flexDirection: 'column',
    backgroundColor: 'rgb(255, 255, 255))',
    position: 'absolute'
  },
  txtDeparture: {
    marginTop: 300,
    marginLeft: 169,
    position: 'absolute'
  }
}
