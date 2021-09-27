import React, { Component } from 'react';
import { View, Platform,StatusBar,KeyboardAvoidingView,NetInfo, StyleSheet
} from 'react-native';
import { Constants } from 'expo';
import { SearchBar } from 'react-native-elements';
import Style from '../styles/Style';
import * as ExpoIcon from '@expo/vector-icons';
import DropdownAlert from 'react-native-dropdownalert';
import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { touchableButtonHandler} from 'G:/BookScout/BookScout/util/Util'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import apiconfig from '../apiconfig/ApiConfig';


const { primaryThemeColor, primaryBackground, calculateFontSizeByPlatform } = Style;


class Search extends Component {

    constructor(props) {

        super(props);
        this.state = {

            searchQuery: ''
        };
    };

    handlesearch = (searchText) => this.setState({ searchQuery: searchText });

    searchhandle = async () => {

        let { navigation } = this.props;
        let { searchQuery } = this.state;
        let { type } = await NetInfo.getConnectionInfo();
        
        if(searchQuery === '') {
            
            this.dropdown.alertWithType('info', 'Invalid', ' empty query');
 
            return;
        }

        const navigationParams = {

            internetConnectivity: !(type === 'none'),
            searchQuery: encodeURI(searchQuery)
        };

        navigation.navigate('Result', navigationParams);
    };

    render() {

        return (
            <View style={styles.container}>

                <StatusBar barStyle={'light'} animated />

                <KeyboardAvoidingView enabled behavior={'position'}>

                    

                    <View style={{ alignItems: 'center', justifyContent: 'space-around', backgroundColor: 'transparent', padding: 5 }}>

                        <SearchBar
                            round
                            noIcon
                            platform={'ios'}
                            value={this.state.searchQuery}
                            onChangeText={this.handlesearch}
                            clearIcon={ this.state.searchQuery === '' ? null : { name: 'cancel', color: 'white', style: { fontSize: 20, marginTop: Platform.OS === 'ios' ? responsiveHeight(1.5) : responsiveHeight(0.8), marginRight: responsiveWidth(1.5) } }}
                          
                            containerStyle={{

                                borderWidth: 0,
                                justifyContent: 'center',
                                borderTopColor: 'transparent',
                                width: responsiveWidth(100),
                                borderBottomColor: 'rgba(0, 0, 0, 0.05)',
                                backgroundColor: 'transparent',
                            }}
                            inputStyle={{

                                color: 'white',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 100,
                                
                                padding: Platform.OS === 'ios' ? responsiveHeight(1.00) : 0,
                                paddingRight: responsiveWidth(14),
                                paddingLeft: responsiveWidth(5),
                                fontSize: calculateFontSizeByPlatform(2.5),
                                backgroundColor: '#484848',
                                height: Platform.OS === 'ios' ? responsiveHeight(10) : responsiveHeight(10)
                            }}
                            placeholder={'Search Books...'} />

                            <TouchableBounce onPress={() => touchButtonHandler(this.searchhandle)} style={{ backgroundColor: primaryThemeColor, alignItems: 'center', justifyContent: 'center', padding: 5, borderRadius: 100, marginTop: responsiveHeight(2), height: responsiveHeight(6), width: responsiveWidth(50) }}>
                                <ExpoIcon.Ionicons name={'ios-search'} size={calculateFontSizeByPlatform(5.00)} color={'white'} />
                            </TouchableBounce>

                        </View>
                    </KeyboardAvoidingView>

                <DropdownAlert
                    closeInterval={1000} ref={ref => this.dropdown = ref}
                    inactiveStatusBarStyle={'light'}
                    defaultContainer={{ padding: 10, flexDirection: 'row', marginTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight }}
                    titleStyle={{ fontSize: 18, textAlign: 'left', color: 'white', backgroundColor: 'transparent' }}
                    messageStyle={{ fontSize: 16, textAlign: 'left', color: 'white', backgroundColor: 'transparent' }} />
            </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: primaryBackground,
        paddingTop: responsiveHeight(4),
        alignItems: 'center'
    }
});

export default Search;