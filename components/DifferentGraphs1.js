import React, { Component } from "react";
import Swiper from "@builderx/react-native-swiper";
import { Center } from "@builderx/utils";
import { BarChart, XAxis, Grid } from "react-native-svg-charts";
import { View, StyleSheet, Text } from "react-native";
export default class DifferentGraphs1 extends Component {
   render() {
	const fill = 'rgb(134, 65, 244)'
    const datagraph1   = [ 1, 1, 3, 3, 1 ]
	const time1   = [ 0, 1, 2, 3, 4 ]
	const datagraph2   = [ 1, 3, 3 ]
	const time2   = [ 14, 15, 16 ]
	const datagraph3   = [ 1, 3, 1 ]
	const time3   = [ 21, 22, 23 ]
    return (
      <View style={[styles.root, this.props.style]}>
        <Swiper style={styles.carousel} index={0}>
          <View style={styles.rect}>
			<Text style={styles.textgraph}>Dauer: 5 Stunden</Text>
			<BarChart
			   style={styles.graph}
			   data={ datagraph1 }
			   svg={{ fill }}
			   contentInset={{ top: 20, bottom: 20 }}
			  >
			<Grid/>
			</BarChart>
			<XAxis
               style={styles.xaxis}
               data={ time1 }
               formatLabel={ (value, index) => index }
               contentInset={{ left: 10, right: 10 }}
			   svg={{ fontSize: 14, fill: "rgba(38,153,251,1)" }}
            />
          </View>
          <View style={styles.rect}>
			<Text style={styles.textgraph}>Dauer: 3 Stunden</Text>
			<BarChart
			   style={styles.graph}
			   data={ datagraph2 }
			   svg={{ fill }}
			   contentInset={{ top: 20, bottom: 20 }}
			  >
			<Grid/>
			</BarChart>
			<XAxis
               style={styles.xaxis}
               data={ time2 }
               formatLabel={ (value, index) => index }
               contentInset={{ left: 10, right: 10 }}
			   svg={{ fontSize: 14, fill: "rgba(38,153,251,1)" }}
            />
          </View>
          <View style={styles.rect}>
			<Text style={styles.textgraph}>Dauer: 3 Stunden</Text>
			<BarChart
			   style={styles.graph}
			   data={ datagraph3 }
			   svg={{ fill }}
			   contentInset={{ top: 20, bottom: 20 }}
			  >
			<Grid/>
			</BarChart>
			<XAxis
               style={styles.xaxis}
               data={ time3 }
               formatLabel={ (value, index) => index }
               contentInset={{ left: 10, right: 10 }}
			   svg={{ fontSize: 14, fill: "rgba(38,153,251,1)" }}
            />
          </View>
        </Swiper>
		<Center horizontal>
          <Text style={styles.textdate}>20.06.2019</Text>
        </Center>
        <Text style={styles.textquality}>
          Gesamtdauer: 11:00 Stunden{"\n"}Schlafqualität: 54%
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
  textdate: {
    top: "0%",
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "15%",
    width: "100%",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold"
  },
  textquality: {
    top: "15%",
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "18.5%",
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold"
  },
  carousel: {
    height: "90%",
    width: "100%",
    marginLeft: 0,
    backgroundColor: "rgba(64,57,143,1)"
  },
  rect: {
    flex: 1,
    backgroundColor: "rgba(64,57,143,1)",
    justifyContent: "center",
    alignItems: "center"
  },
  textgraph: {
    top: "30%",
    position: "absolute",
    color: "rgba(38,153,251,1)",
    height: "5%",
    width: "100%",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold"
  },
  graph: {
	top: "38%",
    width: "80%",
    height: "40%",
    position: "absolute"
  },
  xaxis: {
	top: "79%",
    width: "80%",
    height: "10%",
    position: "absolute",
  }
});
