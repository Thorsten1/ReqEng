# SleepGuard

Basic Alarm App in Plain HTML and JavaScript. Using Bootstrap and FontAwesome Icons.

### ToDos

- [x] impplement basic menu and navigation <i>Thorsten</i>
- [ ] implement "Wecker" Page <i>Thomas</i>
- [ ] implement "Einschlafhilfe" Page <i>Johann</i>
- [ ] finish "Power Nap" Page <i>Karsten</i>
- [ ] implement "Statistik" Page <i>Steffen</i>
- [ ] implement "Kalender" Page
- [ ] implement "Community" Page <i>Thorsten</i>
- [ ] implement "SmartHome" Page <i>Thorsten</i>
- [ ] implement custom Alert for "Einschlaftipp" <a href="https://jqueryui.com/dialog/"> Example </a> 
- [ ] implement the camera
- [ ] implement the use of sensor data
<br> <br>


## Example

This is our standard view for a page with the right header and the backgroundColor of the other pages 

~~~ JavaScript
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
//imports for header Buttons
import MenuButton from '../components/MenuButton'
import MenuNotifications from '../components/MenuNotifications'

export default class Wecker extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        {/*Header Section*/}
        <MenuButton navigation={this.props.navigation} />
        <Text style={{position:'absolute', top:40, textAlign:'center', fontSize:20}}> Wecker </Text>
        <MenuNotifications/>
        {/*Main Section*/}
        <Text style={styles.text}>Hello From the Wecker side! </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#261568',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 31,
  },
});
~~~

## Tipps
I highly recommend to use either an ide like visual studio code or an editor like Atom or Sublime for editing the Code. In any case make sure you have installed the necessary plugins for React / Babel(JavaScript) Syntax Highlighting because normal JS won't parse React objects as sonn as you use additional attributes like e.g. style{}
