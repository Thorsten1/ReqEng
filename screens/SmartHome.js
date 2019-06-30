import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton'

export default class SmartHome extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={styles.text}>Die SmartHome Funktion wird ihnen schon bald zur Verfügung stehen! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261568',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    textAlign: 'center',
  },
});
