import React, { Component } from "react";
import _ from "lodash";
import MenuButton from '../components/MenuButton'
import MaterialSlider2 from "../components/MaterialSlider2";
import MaterialSlider3 from "../components/MaterialSlider3";
import MaterialSlider4 from "../components/MaterialSlider4";
import MaterialSlider5 from "../components/MaterialSlider5";
import MaterialSlider6 from "../components/MaterialSlider6";
import MaterialButtonViolet from "../components/MaterialButtonViolet";
import MaterialHeader12 from "../components/MaterialHeader12";
import Icon from "@builderx/icons";
import MaterialButtonTransparentHamburger1 from "../components/MaterialButtonTransparentHamburger1";
import { View, StyleSheet, StatusBar } from "react-native";
export default class Untitled extends Component {
   render() {
    return (
      <View style={styles.root}>
        <MenuButton navigation={this.props.navigation} />
        <MaterialSlider2 style={styles.materialSlider2} />
        <MaterialSlider3 style={styles.materialSlider3} />
        <MaterialSlider4 style={styles.materialSlider4} />
        <MaterialSlider5 style={styles.materialSlider5} />
        <MaterialSlider6 style={styles.materialSlider6} />
        <MaterialButtonViolet style={styles.materialButtonViolet} />
        <View style={styles.group} />
        <MaterialHeader12 style={styles.materialHeader12} />
        <Icon style={styles.icon} type="Ionicons" name="md-rainy" />
        <Icon style={styles.icon2} type="Feather" name="wind" />
        <Icon style={styles.icon3} type="Ionicons" name="ios-water" />
        <Icon style={styles.icon4} type="Ionicons" name="ios-musical-notes" />
        <Icon style={styles.icon5} type="Ionicons" name="ios-bonfire" />
        <MaterialButtonTransparentHamburger1
          style={styles.materialButtonTransparentHamburger1}
        />
        <StatusBar style={styles.statusBar} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(64,57,143,1)"
  },
  materialSlider2: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 11.98,
    top: 289.55
  },
  materialSlider3: {
    width: 150,
    height: 28.18,
    position: "absolute",
    left: 196.61,
    top: 290.46
  },
  materialSlider4: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 10.55,
    top: 439.12
  },
  materialSlider5: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 196.61,
    top: 440.78
  },
  materialSlider6: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 10.55,
    top: 589.45
  },
  materialButtonViolet: {
    position: "absolute",
    top: 100.65,
    height: 36,
    width: 186.05,
    backgroundColor: "rgba(143,100,255,1)",
    shadowOpacity: 1,
    shadowColor: "rgba(60,48,192,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    shadowRadius: 20,
    elevation: 60,
    left: "24.16%"
  },
  group: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 0,
    width: 360
  },
  materialHeader12: {
    width: 360,
    height: 56,
    position: "absolute",
    top: 23.53,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(58,53,111,1)",
    overflow: "visible",
    left: "0%"
  },
  icon: {
    top: 171.79,
    left: 35.79,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  icon2: {
    top: 171.79,
    left: 214.53,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  icon3: {
    top: 322.12,
    left: 50.41,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  icon4: {
    top: 322.12,
    left: 235.05,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  icon5: {
    top: 472.45,
    left: 43.1,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  materialButtonTransparentHamburger1: {
    width: 89.81,
    height: 91.58,
    position: "absolute",
    left: 226.7,
    top: 485.16
  },
  statusBar: {}
});