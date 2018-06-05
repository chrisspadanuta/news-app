import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { defaultScreen, buildNavigationOptions } from '../styles/GlobalStyles'

export default class ChooseFeedScreen extends React.Component {
  static navigationOptions = buildNavigationOptions('Choose a Feed');

  render() {
    const feeds = this.props.navigation.getParam('feeds', []);
    return (
      <View style={defaultScreen.main}>
        <View style={defaultScreen.buttonList}>
          { feeds.map((feed, index) =>
            <Button
              key={feed.id}
              buttonStyle={{...defaultScreen.button, backgroundColor: feedColors[index]}}
              title={feed.name}
              onPress={() => {
                this.props.navigation.navigate(
                  'Feed',
                  { feed }
                )
              }}
            />)
          }
        </View>
      </View>
    );
  }
}

const feedColors = [
  "#339966",
  "#6666FF",
  "#000099",
  "#800000"
]