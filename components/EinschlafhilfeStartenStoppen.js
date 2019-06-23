import React, { Component } from "react";
import { Platform, View, StyleSheet, TouchableOpacity, Text, ToastAndroid } from "react-native";
var SoundPlayer = require('react-native-sound');
var song = null;
export default class EinschlafhilfeStartenStoppen extends Component <{}> {
  constructor(props) {
    super(props)

    this.state = {
      pause: false,
    };
  }
  componentWillMount() {
    song = new SoundPlayer('rain.mp3', SoundPlayer.MAIN_BUNDLE, (error) => {
      if (error)
        ToastAndroid.show('Error when init SoundPlayer', ToastAndroid.SHORT);
    });
  }

  onPressButtonPlay() {
    if(song != null){
      if (this.state.play){
        song.stop();
      }
      else {
        song.play((success) => {
          if (!success){
           ToastAndroid.show('Error when play SoundPlayer', ToastAndroid.SHORT);
          }
        });
      }
      this.setState({ play: !this.state.play });
    }
  }

  render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]} onPress={this.onPressButtonPlay.bind(this)}>
        <Text style={styles.caption}>{this.state.play ? 'Stop' : 'Einschlafhilfe'}</Text>
        style={styles.rightIconButton}
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#3F51B5",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
    flex: 1
  },
  caption: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "200"
  }
})
