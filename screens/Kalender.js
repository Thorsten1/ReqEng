import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Kalender extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello From the Calender side! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(58,53,111,1)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
});
