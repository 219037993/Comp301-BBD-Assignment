import React, { Component } from 'react';
import {Text} from 'react-native';
import Style

 from '../styling/Style';
import { fetchDataHandler
 } from '../util/Util';
import apiconfig from '../apiconfig/ApiConfig';
 import TouchableBounce from 'react-native/Libraries/Components/Touchable/TouchableBounce';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Bookattribute from '../components/Bookattribute';
import Placeholder_Book from '../components/Placeholder_Book';

const { primaryBackground, calculateFontSizeByPlatform } = Style;
const { apiEndPoint } = apiconfig;

class Books extends Component {

    constructor(props) {

        super(props);
        this.state = {

            isDataFetched: false,
            Data: {}
        };
    };

    componentDidMount = () => {

        this.getBookData();
    };

    getBookData = async () => {

        
        let { details } = this.props.navigation.state.params;

        let { volumeInfo: { categories, imageLinks: { medium, large }, infoLink },
              accessInfo: { webReaderLink } } = await fetchDataHandler(`${apiEndPoint}/${details.bookId}`);

        let Data = {

            ...details,
            images: { medium: medium ? medium : null, large: large ? large : null },
            categories: categories ? categories.toString().replace(/,/g, ', ') : '-',
            infoLink,
            webReaderLink
        };

        setTimeout(() => { this.setState({ isDataFetched: true, Data }); }, 2000, this);

    };

    renderV = (onPress, viewText) => {

        return (

            <TouchableBounce onPress={() => onPress()} style={{ alignItems: 'center', width: responsiveWidth(20), borderRadius: 50, marginTop: responsiveHeight(2), marginBottom: responsiveHeight(1), marginLeft: responsiveWidth(60), paddingVertical: 4, backgroundColor: 'white' }}>
                <Text style={{ color: 'black', fontSize: calculateFontSizeByPlatform(1.00)}}>{viewText}</Text>
            </TouchableBounce>
            
        );
    };

    render() {

        let { isDataFetched, Data } = this.state;

        return (

                    <React.Fragment>
                        {
                            isDataFetched ? (
                                
                                <Bookattribute Data={Data} {...this.props} />
                                
                                ) : (
                                
                                <Placeholder_Book {...this.props} />
                            )
                        }
                    </React.Fragment>

        );
    };
};

export default Books;