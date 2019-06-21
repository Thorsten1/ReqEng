import React, { Component } from "react";
import Swiper from "@builderx/react-native-swiper";
import { Center } from "@builderx/utils";
import Svg, { Ellipse } from "react-native-svg";
import { View, StyleSheet, Text } from "react-native";
export default class DifferentGraphs2 extends Component {
   render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Swiper style={styles.carousel1} index={0}>
          <View style={styles.rect1}>
            <Text style={styles.text1}>Test</Text>
            <Svg style={styles.ellipse} viewBox="0 0 0.00 0.00">
              <Ellipse
                stroke="rgba(230, 230, 230,1)"
                strokeWidth={1}
                fill="rgba(230, 230, 230,1)"
                cx={0}
                cy={0}
                rx={0}
                ry={0}
              />
            </Svg>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.text2}>Page 2</Text>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.text3}>Page 3</Text>
          </View>
        </Swiper>
		<Center horizontal>
          <Text style={styles.text4}>21.06.2019</Text>
        </Center>
        <Text style={styles.text5}>
          Gesamtdauer: 5:45 Stunden{"\n"}Schlafqualität: 80%
        </Text>
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
  carousel1: {
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
  text1: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  },
  rect2: {
    flex: 1,
    backgroundColor: "rgba(64,57,143,1)",
    justifyContent: "center",
    alignItems: "center"
  },
  text2: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  },
  rect3: {
    flex: 1,
    backgroundColor: "rgba(64,57,143,1)",
    justifyContent: "center",
    alignItems: "center"
  },
  text3: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  },
  text4: {
    top: 11.33,
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: 64,
    width: 173,
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold"
  },
  text5: {
    top: 94.33,
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "18.5%",
    width: "86.96969696969697%",
    left: "6.52%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  ellipse: {
    top: 8,
    left: 46,
    width: 0,
    height: 0,
    position: "absolute"
  }
});
