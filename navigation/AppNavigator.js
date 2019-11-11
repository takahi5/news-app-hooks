import React from 'react';
import { createAppContainer } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import { createStackNavigator } from 'react-navigation-stack';

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
  }),
);
