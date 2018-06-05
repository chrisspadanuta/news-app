import React from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';

import { defaultScreen, buildNavigationOptions } from '../styles/GlobalStyles'

export default class SetupScreen extends React.Component {
  static navigationOptions = buildNavigationOptions('Setup');

  saveGroups = () => {
    const saveCallback = this.props.navigation.getParam('saveCallback', () => {});
    saveCallback();
    this.props.navigation.goBack();
  }

  render() {
    const saveCallback = this.props.navigation.getParam('saveCallback', () => {});
    return (
      <View style={defaultScreen.main}>
        <View style={defaultScreen.buttonList} >
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
  button: {
    ...defaultScreen.button,
    backgroundColor: "rgba(216, 99, 92, 1)"
  }
};