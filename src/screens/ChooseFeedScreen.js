import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import Feed from '../components/Feed';

export default class ChooseFeedScreen extends React.Component {
  static navigationOptions = {
    title: 'Choose a Feed',
  };

  render() {
    const feeds = this.props.navigation.getParam('feeds', []);
    return (
      <View style={styles.main}>
        <Text style={styles.headline}>Choose Feed</Text>
        <View style={styles.buttonList}>
          { feeds.map((feed, index) =>
            <Button
              key={feed.id}
              buttonStyle={{...styles.button, backgroundColor: feedColors[index]}}
              title={feed.name}
              onPress={() => {
                this.props.navigation.navigate(
                  'Feed',
                  {
                    feed
                  })
              }}
            />)
          }
        </View>
      </View>
    );
  }
}

//TODO: this should be consolidated to one file
const styles = {
  main: {
    backgroundColor: "#000000",
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  headline: {
    color: "#999",
    fontSize: 18
  },
  buttonList: {
    flex: 1,
    justifyContent: 'space-around'
  },
  button: {
    backgroundColor: "rgba(92, 128, 99, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
};

const feedColors = [
  "#339966",
  "#6666FF",
  "#000099",
  "#800000"
]