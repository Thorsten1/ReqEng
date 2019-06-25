import React, { Component } from "react";
import { View, StyleSheet, Slider } from "react-native";
export default class VolumeRain extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={100}
          thumbTintColor="#3F51B5"
          minimumTrackTintColor="#3F51B5"
          maximumTrackTintColor="#9E9E9E"
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent",
    justifyContent: "center",
    flex: 1
  },
  slider: {}
});
