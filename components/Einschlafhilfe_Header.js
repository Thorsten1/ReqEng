import React, { Component } from "react";
import Icon from "@builderx/icons";
import { Center } from "@builderx/utils";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
export default class Einschlafhilfe_Header extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Icon
          style={styles.leftIcon}
          name="menu"
          type="MaterialCommunityIcons"
        />
        <View style={styles.textWrapper} />
        <Center vertical>
          <TouchableOpacity style={styles.rightIconButton}>
            <Icon
              style={styles.rightIcon}
              name="settings"
              type="MaterialCommunityIcons"
            />
          </TouchableOpacity>
        </Center>
        <Center>
          <Text style={styles.text2}>Einschlafhilfe</Text>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    backgroundColor: "#3F51B5",
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
    justifyContent: "space-between",
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
    flex: 1
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "rgba(124,114,255,1)",
    fontSize: 24,
    position: "absolute",
    top: 16,
    left: 16,
    height: 24,
    width: 24
  },
  textWrapper: {
    position: "absolute",
    left: 72,
    bottom: 19
  },
  rightIconButton: {
    padding: 11,
    position: "absolute",
    right: 0,
    alignItems: "center"
  },
  rightIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 33
  },
  text2: {
    position: "absolute",
    color: "rgba(124,114,255,1)",
    fontSize: 22
  }
});
