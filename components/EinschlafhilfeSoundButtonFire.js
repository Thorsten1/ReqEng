import React, { Component } from "react";
import Icon from "@builderx/icons";
import { StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";

export default class SoundButtonFire extends Component {
  componentWillMount() {
    song = new SoundPlayer('fire.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error) ToastAndroid.show('Error when init SoundPlayer', ToastAndroid.SHORT);
    })
  }

  onPressButton() {
    if (song != null) {
      if (!this.state.play) {
        song.play((success) => {
          if (!success) ToastAndroid.show('Error when play SoundPlayer', ToastAndroid.SHORT);
        })
      }
      else {
        song.stop();
      }
      this.setState({ play: !this.state.play });
    }
  }
  render() {
    if (!this.state.play) {
      return (
        <TouchableOpacity style={[styles.root, this.props.style]} onPress={this.onPressButton.bind(this)}>
          <Icon style={styles.caption} name="ios-bonfire" type="Ionicons" />
        </TouchableOpacity>
      );
    }
    else {
      return (
        <TouchableOpacity style={[styles.root, this.props.style]} onPress={this.onPressButton.bind(this)}>
          <Icon style={styles.caption} name="ios-pause" type="Ionicons" />
        </TouchableOpacity>
      );
    }
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    flex: 1
  },
  caption: {
    color: "#3F51B5",
    fontSize: 24
  }
});
