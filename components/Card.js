import React from 'react';
import { View, Text } from 'react-native';
import Style
 from '../styling/Style';
 import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import { touchButtonHandler } from '../util/Util';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const{ placeholderColor,cardBackground,calculateFontSizeByPlatform} = Style;

const Card =(props) => {
    let { thumbnail, title, authors, publisher, onPress } = props;
    return (

        <TouchableBounce onPress={() => touchableButtonHandler(onPress)} style={{ flexDirection: 'row', width: responsiveWidth(95), padding: 5, marginVertical: 5, borderRadius: 4, backgroundColor: cardBackground }}>

            <View style={{
                flex: 1,
                height: responsiveHeight(16),
                width: responsiveWidth(16),
                backgroundColor: 'transparent',
                padding: 1.50,
            }}>

                <ProgressiveImage
                    source={{ uri: thumbnail }}
                    style={{ borderRadius: 5, resizeMode: 'contain', backgroundColor: placeholderColor, height: '100%', width: '100%' }}
                    imageStyle={{ borderRadius: 5 }}
                    indicator={Progress.Circle}
                    blurRadius={1}
                    indicatorProps={{

                        size: 25,
                        color: 'white'
                    }}
                />

            </View>

            <View style={{

                flex: 2,
                padding: 4,
                backgroundColor: 'transparent'
            }}>
                <View style={{

                    padding: 1.50,
                    marginBottom: 1.50,
                    backgroundColor: 'transparent'
                }}>

                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: 'white', fontSize: calculateFontSizeByPlatform(4)}}>{title}</Text>

                </View>

                <View style={{

                    padding: 1.50,
                    marginTop: responsiveHeight(2),
                    marginVertical: 1.50,
                    backgroundColor: 'transparent'
                }}>

                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: 'white', fontSize: calculateFontSizeByPlatform(2)}}>{authors}</Text>

                </View>

                <View style={{

                    padding: 1.50,
                    marginTop: 1.50,
                    backgroundColor: 'transparent'
                }}>

                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: 'white', fontSize: calculateFontSizeByPlatform(2)}}>{publisher}</Text>

                </View>

            </View>

        </TouchableBounce>
    );



};
export default Card;