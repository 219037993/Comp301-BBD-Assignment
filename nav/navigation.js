import Search from '../screens/Search';
import Result from '../screens/Result';
import Books from '../screens/Books';
import { createAppContainer, createStackNavigator } from 'react-navigation'; 
const AppStackNavigator = createStackNavigator({

    Search: { screen: Search },
    Result: { screen: Result },
    Books: { screen: Books }
}, { headerMode: 'none' });

const AppContainer = createAppContainer(AppStackNavigator);

export default AppContainer;