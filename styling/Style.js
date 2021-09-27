import Constants from 'expo';
import { Platform } from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const Style={

primaryBackgroundColor: '#B57D93',
primaryThemeColor:'#A25D78',
cardBackgroundColor:'#7DB59F',
statusBarHeight: 2 * Constants.statusBarHeight,
calculateFontSizeByPlatform: (size) => responsiveFontSize(size - (Platform.OS === 'ios' ? 0.3 : 0.4)),
placeholderColor: 'black'

};
export default Style;