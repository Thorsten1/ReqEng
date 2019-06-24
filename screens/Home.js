import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import MenuButton from '../components/MenuButton'

export default class Home extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
          time: '',
		  date: '',
        };
      }
      componentDidMount() {
        this.intervalID = setInterval(
          () => this.tick(),
          1000
        );
      }
      componentWillUnmount() {
        clearInterval(this.intervalID);
      }
      tick() {
		var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.setState({
          time: new Date().toLocaleTimeString('de-DE'),
		  date: new Date().toLocaleDateString('de-DE', options)
        });
      }
	  
  render(){
    return (
      <View style={styles.root}>
		<MenuButton navigation={this.props.navigation} />
        <StatusBar style={styles.statusBar} />
        <Text style={styles.textheader}>Sleep{"\n"}Guard</Text>
        <Text style={styles.textdatetime}>{this.state.time} Uhr{"\n"}{this.state.date}</Text>
        <Icon style={styles.iconmail} type="Ionicons" name="ios-mail" />
        <Text style={styles.textuser}>
          Willkommen Tim{"\n"}
          {"\n"}Bist du bereit für einen Powernap?
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(58,53,111,1)",
    flex: 1,
    opacity: 1
  },
  textheader: {
    top: 37.71,
    position: "absolute",
    color: "rgba(124,114,255,1)",
    height: "20%",
    width: "100%",
    fontSize: 28,
    textAlign: "center"
  },
  statusBar: {},
  textdatetime: {
    top: "20%",
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "20%",
    width: "100%",
    left: "0%",
    textAlign: "center",
    fontSize: 24
  },
  iconmail: {
    top: 37.71,
    left: "90%",
    position: "absolute",
    color: "rgba(124,114,255,1)",
    fontSize: 40
  },
  textuser: {
    top: "30%",
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "20%",
    width: "100%",
    fontSize: 24,
    textAlign: "center"
  }
});