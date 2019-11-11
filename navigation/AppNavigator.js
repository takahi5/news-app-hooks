import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import ArticleScreen from '../screens/ArticleScreen';
import ClipScreen from '../screens/ClipScreen';

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header: null,
    },
  },
  Article: {
    screen: ArticleScreen,
  },
});

const ClipStack = createStackNavigator({
  Clip: {
    screen: ClipScreen,
    navigationOptions: {
      header: null,
    },
  },
  Article: {
    screen: ArticleScreen,
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: HomeStack,
  Clip: ClipStack,
});

export default createAppContainer(TabNavigator);
