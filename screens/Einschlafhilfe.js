import React, { Component } from "react";
import _ from "lodash";
import VolumeWater from "../components/VolumeWater";
import VolumeWind from "../components/VolumeWind";
import VolumeFire from "../components/VolumeFire";
import VolumeRain from "../components/VolumeRain";
import VolumeMusic from "../components/VolumeMusic";
import AddSound from "../components/AddSound";
import SoundButtonRain from "../components/EinschlafhilfeSoundButtonRain";
import SoundButtonWater from "../components/EinschlafhilfeSoundButtonWater";
import SoundButtonFire from "../components/EinschlafhilfeSoundButtonFire";
import SoundButtonWind from "../components/EinschlafhilfeSoundButtonWind";
import SoundButtonMusic from "../components/EinschlafhilfeSoundButtonMusic";
import { StyleSheet, Text, View, TextInput } from "react-native";
// Import for Header
import MenuButton from '../components/MenuButton'
import MenuNotifications from '../components/MenuNotifications'

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
        {/*Header Section*/}
        <MenuButton navigation={this.props.navigation} />
        <Text style={{position:'absolute', top:40, textAlign:'right', fontSize:20}}> Einschlafhilfe </Text>
        <MenuNotifications/>
        {/*Main Section*/}
        <View style={{flexDirection: "row", alignContent:"space-between"}}>
            <SoundButtonWater style={styles.materialButtonWater} />
            <SoundButtonWind style={styles.materialButtonWind} />
        </View>
        <View style={{flexDirection: "row", alignContent:"space-between"}}>
            <VolumeWater style={styles.materialVolumeWater} />
            <VolumeWind style={styles.materialVolumeWind} />
        </View>
        <View style={{flexDirection: "row", alignContent:"space-between"}}>
            <SoundButtonFire style={styles.materialButtonFire} />
            <SoundButtonRain style={styles.materialButtonRain} />
       </View>
        <View style={{flexDirection: "row", alignContent:"space-between"}}>
            <VolumeFire style={styles.materialVolumeFire} />
            <VolumeRain style={styles.materialVolumeRain} />
        </View>
        <View style={{flexDirection: "row", alignContent:"space-between"}}>
            <SoundButtonMusic style={styles.materialButtonMusic} />
            <AddSound style={styles.materialButtonAddSound} />
        </View>
        <View style={{flexDirection: "row", alignContent:"space-between"}}>
            <VolumeMusic style={styles.materialVolumeMusic} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#261568',
    alignItems: 'center',
  },
  text: {
    fontSize: 31,
  },
  materialVolumeWater: {
    width: 150,
    height: 30,
    position: "absolute",
    right: 10,
    top: 190
  },
  materialVolumeWind: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 10,
    top: 190
  },
  materialVolumeFire: {
    width: 150,
    height: 30,
    position: "absolute",
    right: 10,
    top: 315
  },
  materialVolumeRain: {
    width: 150,
    height: 30,
    position: "absolute",
    left: 10,
    top: 315
  },
  materialVolumeMusic: {
    width: 150,
    height: 30,
    position: "absolute",
    right: 10,
    top: 450
  },
  /*group: {
    position: "absolute",
    top: 0,
    left: 0,
    height: 0,
    width: 360
  },*/
  materialButtonAddSound: {
    width: 90,
    height: 90,
    position: "absolute",
    left: 40,
    top: 360
  },
  //statusBar: {},
  materialButtonRain: {
    width: 90,
    height: 90,
    position: "absolute",
    left: 40,
    top: 225
  },
  materialButtonWater: {
    width: 90,
    height: 90,
    position: "absolute",
    right: 40,
    top: 100
  },
  materialButtonFire: {
    width: 90,
    height: 90,
    position: "absolute",
    right: 40,
    top: 225
  },
  materialButtonWind: {
    width: 90,
    height: 90,
    position: "absolute",
    left: 40,
    top: 100
  },

  materialButtonMusic: {
    width: 90,
    height: 90,
    position: "absolute",
    right: 40,
    top: 360
  }
});
