import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';

export default createAppContainer(
  createStackNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
      },
    },
    Article: {
      screen: ArticleScreen,
    },
  }),
);
