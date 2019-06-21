import React, { Component } from "react";
import Swiper from "@builderx/react-native-swiper";
import { Center } from "@builderx/utils";
import Svg, { Ellipse } from "react-native-svg";
import { View, StyleSheet, Text } from "react-native";
import DifferentGraphs1 from "../components/DifferentGraphs1";
import DifferentGraphs2 from "../components/DifferentGraphs2";
import DifferentGraphs3 from "../components/DifferentGraphs3";
export default class Differentdays extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Swiper style={styles.carousel} index={0}>
          <View style={styles.rect1}>
            <DifferentGraphs1 style={styles.differentgraphs1} />
          </View>
          <View style={styles.rect2}>
            <DifferentGraphs2 style={styles.differentgraphs2} />
          </View>
          <View style={styles.rect3}>
            <DifferentGraphs3 style={styles.differentgraphs3} />
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
    top: 11.33,
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: 64,
    width: 173,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold"
  },
  carousel: {
    height: 516,
    width: 360,
    marginLeft: 0,
    backgroundColor: "rgba(64,57,143,1)"
  },
  rect1: {
    backgroundColor: "rgba(64,57,143,1)",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    flex: 1
  },
  rect2: {
    flex: 1,
    backgroundColor: "rgba(64,57,143,1)",
    justifyContent: "center",
    alignItems: "center"
  },
  rect3: {
    flex: 1,
    backgroundColor: "rgba(64,57,143,1)",
    justifyContent: "center",
    alignItems: "center"
  },
  ellipse: {
    top: 8,
    left: 46,
    width: 0,
    height: 0,
    position: "absolute"
  },
  differentgraphs1: {
    width: "100%",
    height: "80.56%",
    position: "absolute",
    top: "19.44%",
    shadowOpacity: 1
  },
  differentgraphs2: {
    width: "100%",
    height: "80.56%",
    position: "absolute",
    top: "19.44%",
    shadowOpacity: 1
  },
  differentgraphs3: {
    width: "100%",
    height: "80.56%",
    position: "absolute",
    top: "19.44%",
    shadowOpacity: 1
  }
});
