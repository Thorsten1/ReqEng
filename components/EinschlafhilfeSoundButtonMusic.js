import React, { Component } from "react";
import Icon from "@builderx/icons";
import { StyleSheet, TouchableOpacity, ToastAndroid } from "react-native";
import { Audio, Video } from 'expo-av';

Audio.setIsEnabledAsync(true);
const soundMusic = new Audio.Sound();
try {
    soundMusic.loadAsync(require('../assets/sounds/music.mp3'));
} catch (e) {
    console.log('cannot load file', e);
}
export default class SoundButtonRain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      play: false,
    };
  }

  onPressButton() {
    if(!this.state.play) {
        try {
            soundMusic.playAsync();
            soundMusic.setIsLoopingAsync(true)
        } catch (e) {
            alert('Cannot play the song');
        }
    } else {
        soundMusic.stopAsync();
    }
    this.setState({ play: !this.state.play });
  }

  render() {
    if (!this.state.play) {
      return (
        <TouchableOpacity style={[styles.root, this.props.style]} onPress={this.onPressButton.bind(this)}>
          <Icon style={styles.caption} name="ios-musical-notes" type="Ionicons" />
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
    color: "rgba(167,164,203,1)",
    fontSize: 100
  }
});
