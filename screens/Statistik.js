import React, { Component } from "react";
import Icon from "@builderx/icons";
import MaterialCarousel7 from "../symbols/MaterialCarousel7";
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
          <MaterialCarousel7 style={styles.materialCarousel7} />
        </Center>
        <Text style={styles.text2}>Statistik</Text>
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
  statusBar: {},
  materialCarousel7: {
    width: "100%",
    height: "80.56%",
    position: "absolute",
    top: "19.44%",
    shadowOpacity: 1
  },
  text2: {
    top: 47.71,
    left: 106.93,
    position: "absolute",
    color: "rgba(124,114,255,1)",
    height: 30,
    width: 146.13,
    fontSize: 24,
    textAlign: "center"
  }
});
