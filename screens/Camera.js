import React from 'react';
import { Text, View, TouchableOpacity, Button } from 'react-native';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
//imports for header Buttons
import MenuButton from '../components/MenuButton'
import MenuNotifications from '../components/MenuNotifications'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import CountDown from 'react-native-countdown-component';


export default class PowerNap extends React.Component {
  state = {hasCameraPermission: null,
	   type: Camera.Constants.Type.back, 
	   visible: false}

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  buttonClickListener = () =>{
    this.setState({ visible: true });
  }

  render(){
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        

		<View style={{ flex: 1, justifyContent: 'center' }}>
		<Button onPress = {this.buttonClickListener} style={{ materialButtonViolet }}
          title="Start"
        />
		
		
		
		<Dialog
			visible={this.state.visible}
				onTouchOutside={() => {
					this.setState({ visible: false });
				}}
			>
			<DialogContent>
			<Text style={{color: 'white'}}>Take a picture of the object you have choosen</Text>
			<Camera style={{ flex: 1 }} type={this.state.type}>
				<View
				style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
				}}>
				
				</View>
			</Camera>
			<TouchableOpacity
					style={{
					alignItems: 'center',
					}}
					onPress={() => {
						
							this.setState({ visible: false });
						
					}
					}>
					<Text style={{ fontSize: 18, marginTop: 10, color: 'black' }}> Snap </Text>
				</TouchableOpacity>
			</DialogContent>
		</Dialog>
          
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261568',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
	color: "rgba(254,251,251,1)"
  },
  text2: {
    top: 365.46,
    left: 81.28,
    position: "absolute",
    color: "rgba(254,251,251,1)"
  },
  text3: {
    top: 365.46,
    left: 271.2,
    position: "absolute",
    color: "rgba(254,220,220,1)"
  },
    materialButtonViolet: {
    width: 295.9,
    height: 44.23,
    position: "absolute",
    top: 450.31,
    left: "9.59%"
  },
  materialSlider: {
    width: 150,
    height: 94.2,
    position: "absolute"
  },
});
