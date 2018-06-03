import React from 'react';
import { Text, View } from 'react-native';
import { Button, Divider } from 'react-native-elements';

const defaultNewsFeeds = [
  { id: 1, name: 'Real News', domains: ['gothamist.com', 'nytimes.com', 'npr.org']},
  { id: 2, name: 'Gaming', domains: ['kotaku.com', 'nintendolife.com', 'pcgamer.com', 'polygon.com', 'rockpapershotgun.com'] },
  { id: 3, name: 'Space', domains: ['universetoday.com']},
  { id: 4, name: 'Tech', domains: ['arstechnica.com', 'engadget.com', 'gizmodo.com', 'news.ycombinator.com', 'popularmechanics.com', 'slashdot.org']}
];

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: "#333333"
    },
    headerTintColor: "#FFFFFF"
  };

  saveGroups = () => {
    console.log('saved groups');
  }
  
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.headline}>Home Screen</Text>
        <View style={styles.buttonList} >
          <Button
            title="Setup"
            onPress={() => {
              this.props.navigation.navigate(
                'Setup',
                {
                  things: 1,
                  saveCallback: this.saveGroups
                }
              )
            }}
            buttonStyle={styles.button}
          />
          <Button
            title="Feeds"
            onPress={() => {
              this.props.navigation.navigate(
                'ChooseFeed',
                {
                  feeds: defaultNewsFeeds
                }
              )
            }}
            buttonStyle={styles.button}
          />
        </View>
      </View>
    );
  }
}

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
    backgroundColor: "rgba(92, 99, 216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
};
