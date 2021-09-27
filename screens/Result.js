import React, { Component } from 'react';
import { View,Text,Platform,RefreshControl,StyleSheet} from 'react-native';
import { Constants } from 'expo';
import Style from '../styling/Style';
import { SearchBar } from 'react-native-elements';
import Collapsible from 'react-native-collapsible-header';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Card from '../components/Card';
import PlaceHolder_Card from '../components/Placeholder_Card';
import {fetchDataHandler, getDArray} from 'G:/BookScout/BookScout/util/Util.js';
import apiconfig from '../apiconfig/ApiConfig';

const { primaryBackground, calculateFontSizeByPlatform } = Style;
const { apiEndPoint} = apiconfig;

class Result extends Component {

    constructor(props) {

        super(props);

        this.state = {

            isDataFetched: false,
            isListRefreshing: false,
            listData: [...new Array(10).fill({})],
            noResult: false,
            filterSearch: ''
        };
    };

    componentDidMount = async () => this.getListData();

    getListData = async () => {

        let { searchQuery, internetConnectivity } = this.props.navigation.state.params;

        if(!internetConnectivity) return;

        let { items: Data, totalItems } = await fetchDataHandler(`${apiEndPoint}?maxResults=40&q=${searchQuery}`);
        
        if(!totalItems) {
            
            this.setState({ noResult: true });

            return;
        }

        let listData = getDArray(Data.map(book => {

            let { volumeInfo: { title, authors, publisher, publishedDate, description}, id: bookId } = book;

            return {

                bookId,
                thumbnail: imageLinks ? imageLinks.thumbnail :
                title,
                authors: authors ? authors.toString().replace(/,/g, ', ') : '-',
                publisher: publisher ? publisher.toString().replace(/"/g, '') : '-',
                publishedDate: publishedDate ? publishedDate.substring(0, 4) : '-',
                description: description ? description : 'No Description'
            };

        }), 'title');

        setTimeout(() => { this.setState({ isDataFetched: true, isListRefreshing: false, listData }); }, 2000, this);
    };

    onListRefresh = () => {

        this.setState({ isDataFetched: false, isListRefreshing: true, listData: [...new Array(10)] });
        this.getListData();
    };

    handleSearch = (filterText) => this.setState({ filterSearch: filterText });

    ToBook = (books) => {

        let { navigation } = this.props;

        const navigationParams = { books };

        navigation.navigate('Books', navigationParams);
    };

    render() {

        let { isDataFetched, isListRefreshing, listData, filterSearch, noResult } = this.state;
        let { internetConnectivity } = this.props.navigation.state.params;

        let filteredListData = isDataFetched ? [...listData].filter(book => {

            let { title } = book;

            if (filterSearch === '') return book;
            else if (title.toLowerCase().includes(filterSearch.toLowerCase())) return book;

        }) : listData;

        return (

            <View style={styles.container}>

                <Collapsible
                    backgroundColor={primaryBackground}
                    min={Constants.statusBarHeight}
                    max={Platform.OS === 'ios' ? responsiveHeight(10) : responsiveHeight(10)}
                    refreshControl={
                        <RefreshControl
                            tintColor={'white'}
                            refreshing={isListRefreshing}
                            onRefresh={this.onListRefresh}
                        />
                    }
                    renderHeader={

                        <View style={{ flex: 1, backgroundColor: primaryBackground, flexDirection: 'row' }}>

                            <SearchBar
                                noIcon
                                lightTheme
                                platform={'ios'}
                                value={filterSearch}
                                onChangeText={this.handleSearch}
                                
                                cancelButtonTitle={'Cancel'}
                                containerStyle={{

                                    borderWidth: 0,
                                    justifyContent: 'center',
                                    borderTopColor: 'transparent',
                                    width: responsiveWidth(100),
                                    borderBottomColor: 'rgba(0, 0, 0, 0.02)',
                                    backgroundColor: 'transparent',
                                }}
                                inputStyle={{

                                    color: 'white',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    
                                    padding: Platform.OS === 'ios' ? responsiveHeight(0.90) : 0,
                                    fontSize: calculateFontSizeByPlatform(5.00),
                                    backgroundColor: '#333',
                                    height: Platform.OS === 'ios' ? responsiveHeight(6) : responsiveHeight(6)
                                }}
                                placeholder={'Search...'} />
                        </View>
                    }

                    renderContent={

                        <View style={{ backgroundColor: primaryBackground, paddingVertical: 5, alignItems: 'center' }}>

                            
                            {
                                noResult ? (

                                    <React.Fragment>

                                        

                                        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 8, marginTop: responsiveHeight(2), width: '100%', backgroundColor: 'transparent' }}>

                                            <Text style={{ color: 'white', fontSize: calculateFontSizeByPlatform(5.60) }}>No Results Found</Text>

                                        </View>

                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>


                                            {
                                                internetConnectivity ? (

                                                    <React.Fragment>

                                                        {
                                                            isDataFetched ? (

                                                                <React.Fragment>

                                                                    {

                                                                        filteredListData.length === 0 ? (

                                                                            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 5, width: '100%', backgroundColor: 'transparent' }}>

                                                                                <Text style={{ color: 'white', fontSize: calculateFontSizeByPlatform(4.00) }}>No Books Found</Text>

                                                                            </View>

                                                                        ) : (

                                                                            <React.Fragment>
                                                                                {

                                                                                    filteredListData.map(books => {

                                                                                        let { thumbnail, title, authors, publisher, bookId } = books;

                                                                                        return <BookCardComponent
                                                                                                    key={bookId}
                                                                                                    title={title}
                                                                                                    authors={authors}
                                                                                                    publisher={publisher}
                                                                                                    thumbnail={thumbnail}
                                                                                                    onPress={() => this.ToBook(books)}
                                                                                                />;
                                                                                    })
                                                                                }
                                                                            </React.Fragment>

                                                                        )
                                                                    }

                                                                </React.Fragment>
                                                            ) : (
                                                                <React.Fragment>
                                                                    {
                                                                        listData.map((_, index) => {

                                                                            return <PlaceHolder_Card key={index} />;
                                                                        })
                                                                    }
                                                                </React.Fragment>
                                                            )
                                                        }

                                                    </React.Fragment>

                                                ) : (

                                                    <React.Fragment>

                                                        

                                                        <View style={{ alignItems: 'center', justifyContent: 'center', padding: 5, marginTop: responsiveHeight(4), width: '100%', backgroundColor: 'transparent' }}>

                                                            <Text style={{ color: 'white', fontSize: calculateFontSizeByPlatform(5) }}>No Internet</Text>

                                                        </View>

                                                    </React.Fragment>
                                                )
                                            }

                                    </React.Fragment>
                                )
                            }                  
                    
                        </View>

                    } />

            </View>
        );
    };
};

const styles = StyleSheet.create({

    container: {

        flex: 1,
        backgroundColor: primaryBackground
    }
});

export default Result;