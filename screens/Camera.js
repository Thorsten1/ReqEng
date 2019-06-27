import React from 'react';
import { StyleSheet, Text, View, Button, Slider } from 'react-native';

//imports for header Buttons
import MenuButton from '../components/MenuButton'
import MenuNotifications from '../components/MenuNotifications'
import Dialog, { DialogContent } from 'react-native-popup-dialog';
import CountDown from 'react-native-countdown-component';


export default class PowerNap extends React.Component {
  state = {value: 5, visible: false}

  buttonClickListener = () =>{
    this.setState({ visible: true });
  }

  render(){
    return (
      <View style={styles.container}>

		{/*Header Section*/}
        <MenuButton navigation={this.props.navigation} />
        
        <MenuNotifications/>
		{/*Content*/}
        <Text style={styles.paragraph}>  {this.state.value} Minuten</Text>
        
		<Text style={styles.text2}>5</Text>
        <Text style={styles.text3}>20</Text>
        <Slider style={styles.materialSlider}
			minimumValue= {5}
			maximumValue = {20}
			step = {1}
			value={this.state.value}
			onValueChange={value => this.setState({ value })}
			thumbTintColor="#3F51B5"
			minimumTrackTintColor="#3F51B5"
			maximumTrackTintColor="#9E9E9E"
        />
       

        <Button onPress = {this.buttonClickListener} style={styles.materialButtonViolet}
          title="Start"
        />
		
		<Dialog
			visible={this.state.visible}
				onTouchOutside={() => {
					this.setState({ visible: false });
				}}
			>
			<DialogContent>
				<Text style={{fontSize:40, margin: 40,}}> PowerNap </Text>
			
				<CountDown
					until={60 * this.state.value}
					size={50}
					onFinish={() => alert('Finished')}
					digitStyle={{backgroundColor: '#000'}}
					digitTxtStyle={{color: '#fff'}}
					timeToShow={['M', 'S']}
					timeLabels={{m: 'Min', s: 'Sek'}}
				/>
			</DialogContent>
		</Dialog>
      </View>
    );
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