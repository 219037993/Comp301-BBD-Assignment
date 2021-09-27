import React, { Component } from 'react';
import {View,Text,ScrollView,ImageBackground,Platform,StyleSheet} from 'react-native';
import { Constants, WebBrowser } from 'expo';
import * as Progress from 'react-native-progress';
import ProgressiveImage from 'react-native-image-progress';
import * as ExpoIcon from '@expo/vector-icons';
import ViewMoreText from 'react-native-view-more-text';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';;
import Style
 from '../styling/Style';

 const { primaryBackground,
    placeholderColor, statusBarHeight, calculateFontSizeByPlatform } = Style;

class Bookattribute extends Component {
    openBook = async (linkType) => {

        let { info } = this.props;

        await WebBrowser.openBrowserAsync(info[linkType]);
    };

    renderV = (onPress, viewText) => {

        return (

            <TouchableBounce onPress={() => onPress()} style={{ alignItems: 'center', width: responsiveWidth(25), borderRadius: 50, marginTop: responsiveHeight(2), marginBottom: responsiveHeight(1), marginLeft: responsiveWidth(70), paddingVertical: 5, backgroundColor: 'white' }}>
                <Text style={{ color: 'white', fontSize: calculateFontSizeByPlatform(2.00)}}>{viewText}</Text>
            </TouchableBounce>

        );
    };

    render() {

        let { info: { thumbnail, title, authors, publishedDate, publisher, 
                          categories, description, images: { medium, large }}} = this.props;

        let { back } = this.props.navigation;

        return (

            <ImageBackground blurRadius={25} source={{ uri: large === null ? thumbnail : large }} style={[styles.container, { width: '100%', height: '100%' }]}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ borderRadius: 7, backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: 4, paddingBottom: 4 }}>

                    <TouchableBounce onPress={() => back()} style={{ justifyContent: 'center', width: responsiveWidth(16), backgroundColor: 'transparent', marginTop: 6 }}>
                        <ExpoIcon.AntDesign name={'left'} color={'white'} size={30} />
                    </TouchableBounce>

                    <View style={{ flex: 1, backgroundColor: 'transparent', padding: 4 }}>

                        <View style={{
                            alignItems: 'center',
                            height: responsiveHeight(35),
                            width: '100%',
                            backgroundColor: 'transparent',
                            padding: 2, marginBottom: responsiveHeight(3)
                        }}>

                            <ProgressiveImage
                                source={{ uri: medium === null ? thumbnail : medium }}
                                style={{ borderRadius: 3, resizeMode: 'contain', backgroundColor: placeholderColor, height: '100%', width: '50%' }}
                                imageStyle={{ borderRadius: 4 }}
                                indicator={Progress.Circle}
                                blurRadius={1}
                                indicatorProps={{

                                    size: 35,
                                    color: 'white'
                                }}
                            />
                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1, marginVertical: 1 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: 'white', fontSize: calculateFontSizeByPlatform(4)}}>{title}</Text>
                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1, marginVertical: 1 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: 'white', fontSize: calculateFontSizeByPlatform(3) }}>{authors}</Text>
                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1, marginVertical: 1 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: 'white', fontSize: calculateFontSizeByPlatform(3)}}>{publishedDate}</Text>
                        </View>

                        <View style={{ backgroundColor: 'transparent', padding: 1, marginTop: responsiveHeight(3) }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: '#CCC', fontSize: calculateFontSizeByPlatform(2) }}>{publisher}</Text>
                        </View>

                        <View style={{ justifyContent: 'center', borderRadius: 10, backgroundColor: 'transparent', padding: 1, marginVertical: 2 }}>
                            <Text numberOfLines={1} ellipsizeMode={'tail'} style={{ color: 'white', fontSize: calculateFontSizeByPlatform(2.50) }}>{categories}</Text>
                        </View>

                        <View style={{ borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.20)', padding: 8, marginVertical: 8 }}>

                            <ViewMoreText
                                numberOfLines={6}
                                renderViewMore={(onPress) => this._renderViewMoreLess(onPress, 'View more')}
                                renderViewLess={(onPress) => this._renderViewMoreLess(onPress, 'View less')}
                                textStyle={{ textAlign: 'justify' }}>

                                <Text style={{ textAlign: 'justify', color: 'white', fontSize: calculateFontSizeByPlatform(2.50)}}>
                                    {description}
                                </Text>

                            </ViewMoreText>

                        </View>

                        <TouchableBounce onPress={() => this._openLinkToBook('webReaderLink')} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 100, marginTop: 5}}>
                            <ExpoIcon.Ionicons name={'ios-book'} size={calculateFontSizeByPlatform(4.00)} color={'white'} />
                        </TouchableBounce>

                        <TouchableBounce onPress={() => this._openLinkToBook('infoLink')} style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)', alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 100, marginTop: 5 }}>
                            <ExpoIcon.Ionicons name={'ios-cart'} size={calculateFontSizeByPlatform(4.00)} color={'white'} />
                        </TouchableBounce>
                        
                    </View>

                  </ScrollView>

             </ImageBackground> 
        );
    };





};

const styles = StyleSheet.create({

    container: {

        flex: 2,
        paddingHorizontal: 6,
        paddingTop: statusBarHeight,
        backgroundColor: primaryBackground
    }
});

export default Bookattribute;