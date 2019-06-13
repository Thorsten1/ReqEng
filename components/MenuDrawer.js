import React from 'react';
import { View, Text, Platform, Dimensions, StyleSheet, TouchableOpacity, } from 'react-native';
import CloseButton from './CloseButton'
const WIDTH = Dimensions.get('window').width
const HEIGHT = Dimensions.get('window').height

export default class MenuDrawer extends React.Component{
	navLink(nav,text){
		return(
				<TouchableOpacity style={{flex:1}} onPress={() => this.props.navigation.navigate(nav)}>
					<Text style={styles.link}>{text}</Text>
				</TouchableOpacity>
			)
	}
	render(){
		return(
			<View style={styles.container}>
				<CloseButton navigation={this.props.navigation} />
				<Text style={{
					textAlign:'left',
					paddingTop:40,
					paddingLeft: 25,
					color:'#461568',
					fontSize: 20,
					marginBottom:50,
					opacity:0.5
				}}>
					SleepGuard
				</Text>
				<View style={styles.link}>
					{this.navLink('Wecker' ,'Wecker')}
					{this.navLink('Einschlafhilfe' ,'Einschlafhilfe')}
					{this.navLink('PowerNap' ,'Power Nap')}
					{this.navLink('Statistik' ,'Statistik')}
					{this.navLink('Kalender' ,'Kalender')}
					{this.navLink('SmartHome' ,'Smarthome')}
					{this.navLink('Community' ,'Community')}
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#261568',
	},
	link :{
		flex: 1,
		fontSize: 20,
		padding: 6,
		paddingLeft: 14,
		margin: 5,
		marginLeft: 35,
		textAlign: 'left',
		color:'#FFF',
		opacity: 0.7
	}
})