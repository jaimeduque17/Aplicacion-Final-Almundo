import { Fonts } from '../../Config/Constant'

export default {
  container: {
    backgroundColor: 'rgb(248, 248, 248))',
    width: 360,
    height: 745,
    flexDirection: 'row'
  },
  container2: {
    marginBottom: 25,
    width: 50,
    height: 50,
    position: 'absolute',
    marginTop: 190,
    flexDirection: 'row'
  },
  iconFlight1: {
    fontSize: 23,
    marginTop: 60,
    marginLeft: 169,
    position: 'absolute',
    transform: [{
      rotateZ: '90deg'
    }]
  },
  iconFlight2: {
    fontSize: 23,
    marginTop: 250,
    marginLeft: 169,
    position: 'absolute',
    transform: [{
      rotateZ: '90deg'
    }]
  },
  containerDate1: {
    width: 328,
    height: 40,
    marginTop: 140,
    marginLeft: 16,
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 2,
    elevation: 3,
    position: 'absolute'
  },
  containerDate2: {
    width: 328,
    height: 40,
    marginTop: 330,
    marginLeft: 16,
    flexDirection: 'row',
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 2,
    elevation: 3,
    position: 'absolute'
  },
  iconCalendar: {
    fontSize: 19,
    marginTop: 10,
    marginLeft: 8
  },
  dateDeparture: {
    fontFamily: Fonts.REGULAR,
    color: 'rgb(0, 0, 0)',
    marginLeft: 100
  },
  containerBtn: {
    width: 328,
    height: 40,
    marginTop: 450,
    marginLeft: 16,
    backgroundColor: 'rgb(234, 100, 34)',
    borderRadius: 2,
    elevation: 3,
    position: 'absolute'
  },
  btnSearch: {
    fontFamily: Fonts.SEMIBOLD,
    color: 'rgb(255, 255, 255)',
    marginTop: 12,
    marginLeft: 140
  }
}
