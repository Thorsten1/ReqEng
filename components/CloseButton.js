import React from 'react';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default class CloseButton extends React.Component{
	render(){
		return(
		<Ionicons
			name="md-close"
			color="#000"
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