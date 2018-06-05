import React from 'react';
import { Text, View } from 'react-native';

import Feed from '../components/Feed';

import { defaultScreen, buildNavigationOptions } from '../styles/GlobalStyles'

export default class FeedScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return buildNavigationOptions(navigation.state.params.feed.name);
  }

  render() {
    const feed = this.props.navigation.getParam('feed', {});
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Feed feed={feed}/>
      </View>
    );
  }
}