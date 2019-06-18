import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet, TouchableOpacity } from "react-native";
export default class MaterialButtonTransparentHamburger1 extends Component {
   render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]}>
        <Icon style={styles.caption} name="plus" type="Octicons" />
      </TouchableOpacity>
    );
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
