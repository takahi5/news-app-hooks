import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from '@expo/vector-icons/FontAwesome';
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
      title: 'クリップ一覧',
    },
  },
  Article: {
    screen: ArticleScreen,
  },
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={24} />
      ),
    },
  },
  Clip: {
    screen: ClipStack,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="bookmark" color={tintColor} size={24} />
      ),
    },
  },
});

export default createAppContainer(TabNavigator);
