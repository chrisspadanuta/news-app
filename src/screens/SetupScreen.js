import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class SetupScreen extends React.Component {
  static navigationOptions = {
    title: 'Setup',
    headerStyle: {
      backgroundColor: "#333333"
    },
    headerTintColor: "#FFFFFF"
  };

  saveGroups = () => {
    const saveCallback = this.props.navigation.getParam('saveCallback', () => {});
    saveCallback();
    this.props.navigation.goBack();
  }

  render() {
    const saveCallback = this.props.navigation.getParam('saveCallback', () => {});
    return (
      <View style={styles.main}>
        <Text style={styles.headline}>Setup Screen</Text>
        <View style={styles.buttonList} >
          <Button
            buttonStyle={styles.button}
            title="Save Groups"
            onPress={this.saveGroups}
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
    backgroundColor: "rgba(216, 99, 92, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }
};