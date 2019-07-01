import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuButton from '../components/MenuButton'

export default class Community extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <MenuButton navigation={this.props.navigation} />
        <Text style={{position:'absolute', top:40, textAlign:'center', fontSize:20}}> Community </Text>
        <Text style={styles.text}>Die Community Funktion wird ihnen in kürze zur Verfügung stehen! </Text>
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
    textAlign: 'center',
  },
});
