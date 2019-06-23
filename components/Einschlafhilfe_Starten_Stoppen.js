import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
export default class Einschlafhilfe_Starten_Stoppen extends Component {
   render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Text style={styles.caption}>Einschlafhilfe</Text>
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
});
