import React, { Component } from "react";
//imports for header Buttons
import MenuButton from '../components/MenuButton';
import MenuNotifications from '../components/MenuNotifications';
<<<<<<< HEAD
import { View, StyleSheet, Text } from "react-native";
=======
import { View, StyleSheet, Text, Image } from "react-native";
>>>>>>> master
export default class Startscreen extends Component {
   render() {
    return (
      <View style={styles.root}>
        {/*Header Section*/}
          <MenuButton navigation={this.props.navigation} style={{flexDirection:'row'}} />
          <Text style={{position:'absolute', top:40, textAlign:'center', fontSize:20, flexDirection:'row'}}> SleepGuard </Text>
          <MenuNotifications style={{flexDirection:'row'}}/>
          <View style={{flex:2}}>
            {/*Spacer for Headerbar*/}
          </View>
<<<<<<< HEAD
=======
          <View style={{flex:3, marginBottom:35}}>
          <Image style={{width:200, height:200}}          
          source={require('../assets/logo.png')}/>
          </View>
>>>>>>> master
        <Text style={styles.textHeader}>
         Willkommen Thorsten! {"\n"}
        Ihre Schlafqaulität beträgt 65% {"\n"} </Text>
        <Text style={styles.textBox}>
        Ihre Schlafqualität hat sich innerhalb der letzten zwei Wochen verbessert, ist jedoch noch nit optimal</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({

  root: {
    flex:1,
    backgroundColor: "rgba(58,53,111,1)",
    alignItems: 'center',
    justifyContent: 'center',
  },
  textHeader: {
<<<<<<< HEAD
    flex:3,
    fontSize: 30,
    fontFamily: "roboto-regular",
    color: "black",
    textAlign: "center"
  },
  textBox: {
    flex:4,
=======
    flex:4,
    fontSize: 30,
    fontFamily: "roboto-regular",
    color: "black",
    marginTop: 20,
    textAlign: "center"
  },
  textBox: {
    flex:5,
>>>>>>> master
    fontSize: 20,
    fontFamily: "roboto-regular",
    color: "black",
    textAlign: "center"
  }
});
