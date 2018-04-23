import Sugar from 'sugar'
import 'sugar-inflections'
import 'sugar/locales'

export default () => {
    Sugar.extend()
    Sugar.String.addPlural('menor', 'menores')
    Sugar.String.addPlural('año', 'años')
    Sugar.String.addPlural('adulto', 'adultos')
    Date.setLocale('es')
    console.disableYellowBox = true
}