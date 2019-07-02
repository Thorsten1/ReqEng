import React, { Component } from "react";
import Icon from "@builderx/icons";
import { StyleSheet, TouchableOpacity, Alert } from "react-native";
export default class AddButton extends React.Component {
  

   render() {
    return (
      <TouchableOpacity style={[styles.root, this.props.style]} onPress={() => {this.props.toggleModal}}>
        <Icon style={styles.icon} name="plus" type="MaterialCommunityIcons" />
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#3F51B5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    flex: 1
  },
  icon: {
    color: "#fff",
    fontFamily: "roboto-regular",
    fontSize: 24,
    alignSelf: "center",
    position: "absolute",
    top: 16,
    left: 16,
    height: 24,
    width: 24
  }
});
