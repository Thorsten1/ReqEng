import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { Slider } from 'react-native-elements';

export default class PowerNap extends React.Component {
  state = {value: 5}

  buttonClickListener = () =>{
    alert(this.state.value)
  }

  render(){
    return (
      <View style={styles.container}>

          <Text style={styles.paragraph}>  {this.state.value} Minuten</Text>
        
        <Slider
        minimumValue= {5}
        maximumValue = {20}
        step = {1}
        value={this.state.value}
        onValueChange={value => this.setState({ value })}
        />
        
        <Button onPress = {this.buttonClickListener}
          title="Start"
        />

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
  },
});
