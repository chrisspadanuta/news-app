import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import { getNews } from './src/service/news';
import Article from './src/components/Article';
import HomeScreen from './src/screens/HomeScreen';
import SetupScreen from './src/screens/SetupScreen';
import ChooseFeedScreen from './src/screens/ChooseFeedScreen';
import FeedScreen from './src/screens/FeedScreen';

const RootStack = createStackNavigator({
  Home: HomeScreen,
  Setup: SetupScreen,
  ChooseFeed: ChooseFeedScreen,
  Feed: FeedScreen
},
{
  initialRouteName: 'Home'
});

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}