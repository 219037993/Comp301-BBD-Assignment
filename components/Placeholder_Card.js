import React from 'react';
import { View } from 'react-native';
import Placeholder from 'rn-placeholder';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import Style
 from '../styling/Style';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';


const { cardBackground,
    placeholderColor } = Style;

const PlaceHolder_Card = (props) => {


    return (
        <TouchableBounce style={{ flexDirection: 'row', width: responsiveWidth(100), padding: 5, marginVertical: 5, borderRadius: 4, backgroundColor: cardBackground}}>

            <View style={{
                flex: 1,
                height: responsiveHeight(15),
                width: responsiveWidth(15),
                backgroundColor: 'transparent',
                padding: 1.50,
            }}>

                <Placeholder.Box
                    height={'100%'}
                    width={'100%'}
                    radius={5}
                    color={placeholderColor}
                    onReady={false}
                    animate={'fade'}
                />

            </View>

            <View style={{

                flex: 3,
                padding: 4,
                backgroundColor: 'transparent'
            }}>
                <View style={{

                    padding: 1.50,
                    marginBottom: 2,
                    backgroundColor: 'transparent'
                }}>

                    <Placeholder.Box
                        height={20}
                        width={'100%'}
                        radius={5}
                        color={placeholderColor}
                        onReady={false}
                        animate={'fade'}
                    />

                </View>

                <View style={{

                    padding: 1.50,
                    marginTop: responsiveHeight(7),
                    marginVertical: 2,
                    backgroundColor: 'transparent'
                }}>

                    <Placeholder.Line
                        hasRadius
                        color={placeholderColor}
                        animate={'fade'}
                        width={'50%'}
                        onReady={false}
                    />

                </View>

                <View style={{

                    padding: 1.50,
                    marginTop: 2,
                    backgroundColor: 'transparent'
                }}>

                    <Placeholder.Line
                        hasRadius
                        color={placeholderColor}
                        animate={'fade'}
                        width={'40%'}
                        onReady={false}
                    />

                </View> 

            </View>

        </TouchableBounce>
    );



};
export default PlaceHolder_Card;