import React, { Component } from "react";
import Icon from "@builderx/icons";
import DifferentDays from "../components/DifferentDays";
import MenuButton from '../components/MenuButton'
import { Center } from "@builderx/utils";
import { View, StyleSheet, StatusBar, Text } from "react-native";
export default class Statistik extends Component {
   render() {
    return (
      <View style={styles.root}>
		<MenuButton navigation={this.props.navigation} />
        <StatusBar style={styles.statusBar} />
        <Center horizontal>
          <DifferentDays style={styles.differentdays} />
        </Center>
        <Text style={styles.textheader}>Statistik</Text>
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
  statusBar: {},
  textheader: {
    top: 37.71,
    position: "absolute",
    color: "rgba(124,114,255,1)",
    height: "15%",
    width: "100%",
    fontSize: 24,
    textAlign: "center"
  },
  differentdays: {
    width: "100%",
    height: "85%",
    position: "absolute",
    top: "15%",
    shadowOpacity: 1
  }
});
