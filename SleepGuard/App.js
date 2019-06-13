import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home' 

import { DrawerNavigator } from 'react-navigation'; 

export default class App extends React.Component {

  render(){
    return <Home/>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#480372',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
