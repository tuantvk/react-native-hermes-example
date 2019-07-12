import React from 'react';
import { StyleSheet, Image, AppState } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import Booking from './src/Booking';

const AppNavigator = createStackNavigator({
  Home: Home,
  Booking: Booking
},
  {
    initialRouteName: "Home",
    swipeEnabled: false,
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => (
  <AppContainer />
)

export default App;