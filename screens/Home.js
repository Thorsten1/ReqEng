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
        <Icon style={styles.icon2} type="Ionicons" name="ios-mail" />
        <Text style={styles.text4}>
          Willkommen Tim{"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
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
  icon: {
    top: 37.71,
    left: 24.49,
    position: "absolute",
    color: "rgba(124,114,255,1)",
    fontSize: 40
  },
  textheader: {
    top: 42,
    position: "absolute",
    color: "rgba(124,114,255,1)",
    height: 80,
    width: "100%",
    fontSize: 24,
    textAlign: "center"
  },
  statusBar: {},
  textdatetime: {
    top: 120.76,
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "7.57%",
    width: "100%",
    left: "0%",
    textAlign: "center",
    fontSize: 18
  },
  icon2: {
    top: 37.71,
    left: 288.5,
    position: "absolute",
    color: "rgba(124,114,255,1)",
    fontSize: 40
  },
  text4: {
    top: 208.83,
    left: 0,
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "24.596590995788574%",
    width: "100%",
    fontSize: 18,
    textAlign: "center"
  }
});