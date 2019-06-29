import React, { Component } from "react";
import Icon from "@builderx/icons";
import { StyleSheet, TouchableOpacity, ToastAndroid, Text, View } from "react-native";
import SoundPlayer from "react-native-sound-player";
try {
  // play the file tone.mp3
  SoundPlayer.playSoundFile('rain', 'mp3')
  // or play from url
  // SoundPlayer.playUrl('https://example.com/music.mp3')
} catch (e) {
  console.log(`cannot play the sound file`, e)
}
export default class SoundButtonRain extends Component {
  constructor(props) {
    super(props)

    this.state = {
      play: false,
    };
  }

  componentDidMount() {
    SoundPlayer.onFinishedPlaying((success: boolean) => { // success is true when the sound is played
      console.log('finished playing', success)
    })
    SoundPlayer.onFinishedLoading(async (success: boolean) => {
      console.log('finished loading', success)
      // ready to `play()`, `getInfo()`, etc
      console.log(await SoundPlayer.getInfo())
    })
  }

  playSong() {
    try {
        SoundPlayer.playSoundFile('rain', 'mp3')
    } catch (e) {
        alert('Cannot play the file')
        console.log('cannot play the song file', e)
    }
  }

  stopSong() {
    try {
        SoundPlayer.stop()
    } catch (e) {
        alert('Cannot stop the song')
        console.log('cannot stop the song file', e)
    }
  }

  onPressButton() {
    if (this != null) {
      if (!this.state.play) {
        this.playSong()
      }
      else {
        this.stopSong()
      }
    }
    this.setState({ play: !this.state.play });
  }


  render() {
    if (!this.state.play) {
      return (
        <TouchableOpacity style={[styles.root, this.props.style]} onPress={this.onPressButton.bind(this)}>
          <Icon style={styles.caption} name="md-rainy" type="Ionicons" />
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
