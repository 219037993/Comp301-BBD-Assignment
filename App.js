import React from 'react';
import { View } from 'react-native';
import { Font, SplashScreen } from 'expo';
import Style from './styling/Style';
import AppContainer from './nav/navigation';

const { primaryBackground } = Style;

export default class App extends React.Component {

  constructor(props) {

    super(props);
    
    this.state = {

      isFontLoaded: false
    };

    SplashScreen.preventAutoHide();
  };

  componentDidMount = async () => {

    await Font.loadAsync({

      
    });

    this.setState({ ...this.state, isFontLoaded: true });

    setTimeout(() => SplashScreen.hide(), 1000);

  };

  render() {

    return (

      <React.Fragment>
        {
          this.state.isFontLoaded ? (

            <AppContainer />

          ) : (

            <View style={{ flex: 1, backgroundColor: primaryBackground }}></View>

          )  
        }
      </React.Fragment>
    );
  };
};
