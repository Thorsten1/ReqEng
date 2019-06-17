import React from 'react';
import { StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default class SettingButton extends React.Component{
	render(){
		return(
		<Ionicons
			name="settings"
			color="#FFF"
			size={32}
			style={styles.menuIcon}
			onPress={() => this.props.navigation.toggleDrawer()}
		/>
		)
	}
}

const styles = StyleSheet.create({
	menuIcon:{
		zIndex:9,
		position:'absolute',
		top:40,
		right:20,
	}

})