import React from 'react';
import { Text, View } from 'react-native';

import Feed from '../components/Feed';

export default class FeedScreen extends React.Component {
  render() {
    const feed = this.props.navigation.getParam('feed', {});
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Feed feed={feed}/>
      </View>
    );
  }
}