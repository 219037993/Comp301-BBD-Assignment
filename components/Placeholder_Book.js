import React, { Component } from 'react';
import {View,ScrollView,StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import Style from '../styling/Style';
import * as ExpoIcon from '@expo/vector-icons';
import Placeholder from 'rn-placeholder';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const { placeholderColor, cardBackground, statusBarHeight } = Style;
class Placeholder_Book extends Component {

    render() {

        let { back } = this.props.navigation;

        return (

            <View style={[styles.container, { width: '100%', height: '100%' }]}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.2)', padding: 5, paddingBottom: 5 }}>

                    <TouchableBounce onPress={() => back()} style={{ justifyContent: 'center', width: responsiveWidth(15), backgroundColor: 'transparent', marginTop: 5 }}>
                        <ExpoIcon.AntDesign name={'left'} color={'white'} size={40} />
                    </TouchableBounce>

                    <View style={{ flex: 1, backgroundColor: 'transparent', padding: 5 }}>

                        <View style={{
                            alignItems: 'center',
                            height: responsiveHeight(40),
                            width: '100%',
                            backgroundColor: 'transparent',
                            padding: 1.50, marginBottom: responsiveHeight(2)
                        }}>

                            <Placeholder.Box
                                height={responsiveHeight(30)}
                                width={responsiveWidth(50)}
                                radius={4}
                                color={placeholderColor}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1.50, marginVertical: 1 }}>
                            
                            <Placeholder.Box
                                height={responsiveHeight(3)}
                                width={'100%'}
                                radius={4}
                                color={placeholderColor}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1.50, marginVertical: 4 }}>
                            
                            <Placeholder.Box
                                height={responsiveHeight(3)}
                                width={'90%'}
                                radius={5}
                                color={placeholderColor}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1.50, marginVertical: 2 }}>
                            
                            <Placeholder.Box
                                height={responsiveHeight(3)}
                                width={'70%'}
                                radius={5}
                                color={placeholderColor}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1.50, marginTop: responsiveHeight(2) }}>
                            
                            <Placeholder.Box
                                height={responsiveHeight(2.5)}
                                width={'50%'}
                                radius={5}
                                color={placeholderColor}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                        <View style={{ justifyContent: 'center', borderRadius: 10, backgroundColor: 'transparent', padding: 1.50, marginVertical: 4 }}>
                            
                            <Placeholder.Box
                                height={responsiveHeight(2.5)}
                                width={'50%'}
                                radius={4}
                                color={placeholderColor}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                        <View style={{ borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.20)', padding: 0, marginTop: 8 }}>

                            <Placeholder.Box
                                height={responsiveHeight(22)}
                                width={'100%'}
                                radius={4}
                                color={placeholderColor}
                                onReady={false}
                                animate={'fade'}
                            />

                        </View>

                    </View>
                        
                </ScrollView>

            </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        paddingHorizontal: 6,
        paddingTop: statusBarHeight,
        backgroundColor: cardBackground
    }
});

export default Placeholder_Book;