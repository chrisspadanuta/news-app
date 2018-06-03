import React from 'react';
import { Text, View } from 'react-native';
import { Button, Divider } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.main}>
        <Text style={styles.headline}>Home Screen</Text>
        <View style={{ flex: 1, justifyContent: 'space-around' }} >
          <Button
            title="Setup"
            onPress={() => this.props.navigation.navigate('Setup')}
            buttonStyle={styles.button}
          />
          <Button
            title="Feed"
            onPress={() => this.props.navigation.navigate('Feed')}
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
  button: {
    backgroundColor: "rgba(92, 99, 216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
};
