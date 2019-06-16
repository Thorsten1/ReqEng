import React from 'react';
import { StyleSheet, Text, View, Button, Slider } from 'react-native';

export default class PowerNap extends React.Component {
  state = {value: 5}

  buttonClickListener = () =>{
    alert(this.state.value)
  }

  render(){
    return (
      <View style={styles.container}>

          <Text style={styles.paragraph}>  {this.state.value} Minuten</Text>
        
        <Slider style={styles.paragraph}
        minimumValue= {5}
        maximumValue = {20}
        step = {1}
        value={this.state.value}
        onValueChange={value => this.setState({ value })}
        />
        
        <Button onPress = {this.buttonClickListener} style={styles.paragraph}
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
