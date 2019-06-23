import React, { Component } from "react";
import _ from "lodash";
import MenuButton from '../components/MenuButton'
import Volume_Slider_1 from "../components/Volume_Slider_1";
import Volume_Slider_2 from "../components/Volume_Slider_2";
import Volume_Slider_3 from "../components/Volume_Slider_3";
import Volume_Slider_4 from "../components/Volume_Slider_4";
import Volume_Slider_5 from "../components/Volume_Slider_5";
import EinschlafhilfeStartenStoppen from "../components/EinschlafhilfeStartenStoppen";
import EinschlafhilfeHeader from "../components/EinschlafhilfeHeader";
import Icon from "@builderx/icons";
import AddNewSoundButton from "../components/AddNewSoundButton";
import { View, StyleSheet, StatusBar } from "react-native";
export default class Untitled extends Component {
   render() {
    return (
      <View style={styles.root}>
        <MenuButton navigation={this.props.navigation} />
        <Volume_Slider_1 style={styles.Volume_Slider_1} />
        <Volume_Slider_2 style={styles.Volume_Slider_2} />
        <Volume_Slider_3 style={styles.Volume_Slider_3} />
        <Volume_Slider_4 style={styles.Volume_Slider_4} />
        <Volume_Slider_5 style={styles.Volume_Slider_5} />
        <MaterialButtonViolet style={styles.materialEinschlafhilfe_Button} />
        <View style={styles.group} />
        <MaterialHeader12 style={styles.materialHeader} />
        <Icon style={styles.rainicon} type="Ionicons" name="md-rainy" />
        <Icon style={styles.windicon} type="Feather" name="wind" />
        <Icon style={styles.watericon} type="Ionicons" name="ios-water" />
        <Icon style={styles.musicicon} type="Ionicons" name="ios-musical-notes" />
        <Icon style={styles.fireicon} type="Ionicons" name="ios-bonfire" />
        <MaterialButtonTransparentHamburger1
          style={styles.materialAdd}
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
  Volume_Slider_1: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 11.98,
    top: 289.55
  },
  Volume_Slider_2: {
    width: 150,
    height: 28.18,
    position: "absolute",
    left: 196.61,
    top: 290.46
  },
  Volume_Slider_3: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 10.55,
    top: 439.12
  },
  Volume_Slider_4: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 196.61,
    top: 440.78
  },
  Volume_Slider_5: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 10.55,
    top: 589.45
  },
  materialEinschlafhilfe_Button: {
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
  materialHeader: {
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
  rainicon: {
    top: 171.79,
    left: 35.79,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  windicon: {
    top: 171.79,
    left: 214.53,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  watericon: {
    top: 322.12,
    left: 50.41,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  musicicon: {
    top: 322.12,
    left: 235.05,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  fireicon: {
    top: 472.45,
    left: 43.1,
    position: "absolute",
    color: "rgba(167,164,203,1)",
    fontSize: 117
  },
  materialAdd: {
    width: 89.81,
    height: 91.58,
    position: "absolute",
    left: 226.7,
    top: 485.16
  },
  statusBar: {}
});