import React, { Component } from "react";
import _ from "lodash";
import VolumeWater from "../components/VolumeWater";
import VolumeWind from "../components/VolumeWind";
import VolumeFire from "../components/VolumeFire";
import VolumeRain from "../components/VolumeRain";
import VolumeMusic from "../components/VolumeMusic";
import EinschlafhilfeHeader from "../components/EinschlafhilfeHeader";
import AddSound from "../components/AddSound";
import EinschlafhilfeSoundButtonRain from "../components/EinschlafhilfeSoundButtonRain";
import EinschlafhilfeSoundButtonWater from "../components/EinschlafhilfeSoundButtonWater";
import EinschlafhilfeSoundButtonFire from "../components/EinschlafhilfeSoundButtonFire";
import EinschlafhilfeSoundButtonWind from "../components/EinschlafhilfeSoundButtonWind";
import EinschlafhilfeSoundButtonMusic from "../components/EinschlafhilfeSoundButtonMusic";
import { View, StyleSheet, StatusBar } from "react-native";
var SoundPlayer = require('react-native-sound');
var song = null;

export default class Einschlafhilfe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      play: false,
    };
  }
  render() {
    return (
      <View style={styles.root}>
        <VolumeWater style={styles.materialVolumeWater} />
        <VolumeWind style={styles.materialVolumeWind} />
        <VolumeFire style={styles.materialVolumeFire} />
        <VolumeRain style={styles.materialVolumeRain} />
        <VolumeMusic style={styles.materialVolumeMusic} />
        <View style={styles.group} />
        <EinschlafhilfeHeader style={styles.materialHeader} />
        <AddSound
          style={styles.materialButtonAddSound}
        />
        <StatusBar style={styles.statusBar} />
        <EinschlafhilfeSoundButtonRain
          style={styles.materialButtonRain}
        />
        <EinschlafhilfeSoundButtonWater
          style={styles.materialButtonWater}
        />
        <EinschlafhilfeSoundButtonFire
          style={styles.materialButtonFire}
        />
        <EinschlafhilfeSoundButtonWind
          style={styles.materialButtonWind}
        />
        <EinschlafhilfeSoundButtonMusic
          style={styles.materialButtonMusic}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(64,57,143,1)"
  },
  materialVolumeWater: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 9.97,
    top: 189.97
  },
  materialVolumeWind: {
    width: 150,
    height: 30.18,
    position: "absolute",
    left: 189.6,
    top: 189.79
  },
  materialVolumeFire: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 9.55,
    top: 326.14
  },
  materialVolumeRain: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 199.51,
    top: 326.14
  },
  materialVolumeMusic: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 9.55,
    top: 462.67
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
    top: 24,
    flexDirection: "column",
    justifyContent: "space-between",
    backgroundColor: "rgba(58,53,111,1)",
    overflow: "visible",
    left: "0%"
  },
  materialButtonAddSound: {
    width: 89.81,
    height: 89.58,
    position: "absolute",
    left: 229.7,
    top: 372.23
  },
  statusBar: {},
  materialButtonRain: {
    width: 90,
    height: 90,
    position: "absolute",
    left: 229.6,
    top: 235.26
  },
  materialButtonWater: {
    width: 90.07,
    height: 89.53,
    position: "absolute",
    left: 40.24,
    top: 99.56
  },
  materialButtonFire: {
    width: 89.6,
    height: 89.64,
    position: "absolute",
    left: 40.24,
    top: 235.43
  },
  materialVolumeWind: {
    width: 90,
    height: 89.53,
    position: "absolute",
    left: 229.6,
    top: 99.56
  },
  materialVolumeMusic: {
    width: 90,
    height: 90,
    position: "absolute",
    left: 39.55,
    top: 371.61
  }
});
