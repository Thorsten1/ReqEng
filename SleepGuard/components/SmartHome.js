import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class SmartHome extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello From the SmartHome side! </Text>
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
  },
});
