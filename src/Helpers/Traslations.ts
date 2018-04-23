import I18n from 'react-native-i18n'
import arg from '../Assets/json/language_ARG.json'
import bra from '../Assets/json/language_BRA.json'
import col from '../Assets/json/language_COL.json'
import mex from '../Assets/json/language_MEX.json'

I18n.translations = {
    'es-BR': bra,
    'es-AR': arg,
    'es-CO': col,
    'es-MX': mex
}
I18n.defaultLocale = 'es-AR'
I18n.locale = 'es-AR'
I18n.fallbacks = true
