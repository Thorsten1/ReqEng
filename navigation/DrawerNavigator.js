import React from 'react';
import { Platform, Dimensions } from 'react-native';
import {createDrawerNavigator, createAppContainer} from 'react-navigation';

import Startscreen from '../screens/Startscreen';
import Wecker from '../screens/Wecker';
import Einschlafhilfe from '../screens/Einschlafhilfe';
import PowerNap from '../screens/PowerNap';
import Statistik from '../screens/Statistik';
import Kalender from '../screens/Kalender';
import SmartHome from '../screens/SmartHome';
import Community from '../screens/Community';
import MenuDrawer from '../components/MenuDrawer';

const WIDTH = Dimensions.get('window').width;

const DrawerConfig = {
	drawerWidth: WIDTH*0.83,
	contentComponent: ({ navigation }) => {
		return(<MenuDrawer navigation={navigation}/>)
	}
}

const DrawerNavigator = createDrawerNavigator({
	Startscreen: {
		screen: Startscreen,
		},
	Wecker: {
		screen: Wecker,
		},
	Einschlafhilfe: {
		screen: Einschlafhilfe,
		},
	PowerNap: {
		screen: PowerNap,
		},
	Statistik: {
		screen: Statistik,
		},
	Kalender: {
		screen: Kalender,
		},
	SmartHome: {
		screen: SmartHome,
		},
	Community: {
		screen: Community,
		},
	},
	DrawerConfig
);

export default createAppContainer(DrawerNavigator);