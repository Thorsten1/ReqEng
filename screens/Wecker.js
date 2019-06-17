import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//imports for header Buttons
import MenuButton from '../components/MenuButton'
import MenuNotifications from '../components/MenuNotifications'

export default class Wecker extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        {/*Header Section*/}
        <MenuButton navigation={this.props.navigation} />
        <Text style={{position:'absolute', top:40, textAlign:'center', fontSize:20}}> Wecker </Text>
        <MenuNotifications/>
        {/*Main Section*/}
        <Text style={styles.text}>Hello From the Wecker side! </Text>
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
    fontSize: 31,
  },
});
