import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(RootStack);

class App extends Component {
  render() {
    return <AppContainer />;
  }
}

export default App;
