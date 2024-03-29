import React, { Component } from "react";
import Swiper from "@builderx/react-native-swiper";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Text } from "react-native";
import DifferentGraphs1 from "../components/DifferentGraphs1";
import DifferentGraphs2 from "../components/DifferentGraphs2";
import DifferentGraphs3 from "../components/DifferentGraphs3";
export default class Differentdays extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Swiper style={styles.carousel} index={0}>
          <View style={styles.rect}>
            <DifferentGraphs1 style={styles.differentgraphs} />
          </View>
          <View style={styles.rect}>
            <DifferentGraphs2 style={styles.differentgraphs} />
          </View>
          <View style={styles.rect}>
            <DifferentGraphs3 style={styles.differentgraphs} />
          </View>
        </Swiper>
		<Center horizontal>
          <Text style={styles.textheader}>86%</Text>
        </Center>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "rgba(64,57,143,1)",
    padding: 0,
    flexDirection: "column",
    justifyContent: "center"
  },
  textheader: {
    top: "5%",
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "10%",
    width: "100%",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold"
  },
  carousel: {
    height: "90%",
    width: "100%",
    marginLeft: 0,
    backgroundColor: "rgba(64,57,143,1)"
  },
  rect: {
    backgroundColor: "rgba(64,57,143,1)",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  differentgraphs: {
    width: "100%",
    height: "85%",
    position: "absolute",
    top: "10%",
    shadowOpacity: 1
  }
});
