import React,{Component} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity,Switch, Slider } from 'react-native';
import Modal from "react-native-modal";
//imports for header Buttons
import MenuButton from '../components/MenuButton'
import MenuNotifications from '../components/MenuNotifications'
//imports builder x
import Icon from "@builderx/icons";
//import AlarmclockSettings from "../components/AlarmclockSettings";
import { AppLoading } from 'expo';
import * as Font from 'expo-font'
import AlarmSave from '../components/AlarmSave';
import TimePicker from "react-native-24h-timepicker"

export default class Wecker extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      alarmArray: [],
      alarmName: '',
      alarmTime: '7:00',
    }
  }

  //switchvalues
  state ={
    alarmton : false,
    smarteswecken: false,
    vibration: false,
    fotowecken: false
  }

  state = {
      time: ''
  }
 
  onCancel() {
    this.TimePicker.close();
  }
 
  onConfirm(hour, minute) {
    this.setState({ time: `${hour}:${minute}` });
    this.TimePicker.close();
  }
 

  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync({
      'roboto-regular': require('/home/thomas/devapp_ws/ReqEng/assets/fonts/roboto-regular.ttf'),
    });

    this.setState({ fontLoaded: true });
  }

  state = {
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  state = { text: 'Wecker' };

  addAlarm(){
    this.state.alarmArray.push({
      'name' :this.state.alarmName,
      'time' :this.state.alarmTime
    });
    this.setState({alarmArray: this.state.alarmArray})
    this.setState({alarmName: ''});
    this.setState({alarmTime: '7:00'});
  };

  delete(key){
    this.state.alarmArray.splice(key,1);
    this.setState({alarmArray:this.state.alarmArray})
  };



  render(){

    if (!this.state.fontLoaded) {
      return <AppLoading />;
    }

    let alarms = this.state.alarmArray.map((val, key) => {
      return <AlarmSave key={key} keyval={key} val={val} delete={() => this.delete(key)} />
    });

    return (
      <View style={styles.container}>
        {/*Header Section*/}
        <MenuButton navigation={this.props.navigation} />
        <Text style={{position:'absolute', top:40, textAlign:'center', fontSize:20}}> Wecker </Text>
        <MenuNotifications/>
        {/*Main Section*/}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.AlarmclockSettings}>
            <View style={{flexDirection: "row", alignContent:"space-between"}}>
              <TouchableOpacity style={[styles.clock, this.props.style]} onPress={() => this.TimePicker.open()}>
                <Text style={{fontSize:26,textAlign:"center", color:"black"}}>{this.state.time ? this.state.time : "7:00"}</Text>
              </TouchableOpacity>
              <TimePicker textCancel ={"abbrechen"} textConfirm ={"fertig"}ref={ref => {this.TimePicker = ref;}} onCancel={() => this.onCancel()} onConfirm={(hour, minute) => {this.onConfirm(hour, minute); this.setState({ alarmTime:`${hour}:${minute}`})}} value={this.state.alarmTime}></TimePicker>
              <TextInput style={{height: 40, width: 185 ,marginLeft: 40,marginTop: 45, paddingLeft: 6}} underlineColorAndroid="#8E1290" onChangeText={(alarmName) => this.setState({alarmName})} value={this.state.alarmName}/>
              <TouchableOpacity style={[styles.ExitButton2, this.props.style]} onPress={this.toggleModal}>
                <Icon style={styles.iconwindowclose} name="window-close" type="MaterialCommunityIcons" />
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", alignContent:"space-between"}}>
              <Switch style={styles.switch1to2} thumbColor= "#8E1290" onValueChange={value => this.setState({smarteswecken:value})} value={this.state.smarteswecken}></Switch>
              <Text style={{textAlign:"center",marginTop:24,fontWeight:"bold",fontSize:12,marginLeft:2}}>Smartes Wecken</Text>
              <TouchableOpacity style={styles.PowernapButton}>
                <Text style={{fontSize:9,color:"white",bottom:16,left:12}}>30 Minuten</Text>
              </TouchableOpacity>
            </View>   
            <View style={{flexDirection: "row", alignContent:"space-between"}}>
              <Switch style={styles.switch1to2} thumbColor= "#8E1290" onValueChange={value => this.setState({alarmton:value})} value={this.state.alarmton}></Switch>
              <Text style={{textAlign:"center",marginTop:18,fontWeight:"bold",fontSize:12,marginLeft:2}}>Alarmton</Text>
              <TouchableOpacity style={styles.musicButton}>
                <Text style={{fontSize:12,color:"#8E1290",bottom:16,left:12}}>Morning Sun</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", alignContent:"space-between"}}>
              <Icon style={styles.iconvolume} name="volume-high" type="MaterialCommunityIcons"/>
              <Slider style={styles.slider} minimumTrackTintColor="#8E1290" thumbTintColor="#8E1290" ></Slider>
            </View>
            <View style={{flexDirection: "row", alignContent:"space-between"}}>
              <Switch style={styles.switch3} thumbColor= "#8E1290" onValueChange={value => this.setState({vibration:value})} value={this.state.vibration}></Switch>
              <Text style={{textAlign:"center",marginTop:4,fontWeight:"bold",fontSize:12,marginLeft:2}}>Vibration</Text>
            </View>
            <View style={{flexDirection: "row", alignContent:"space-between"}}>
              <Switch style={styles.switch4} thumbColor= "#8E1290" onValueChange={value => this.setState({fotowecken:value})} value={this.state.fotowecken}></Switch>
              <Text style={{textAlign:"center",marginTop:20,fontWeight:"bold",fontSize:12,marginLeft:2}}>Foto wecken</Text>
            </View>
            <View>
              <Text style={{textAlign:"center", fontSize:20, marginTop:30}}>Mo|Di|Mi|Do|Fr|Sa|So</Text>
            </View>
          </View>
          <TouchableOpacity style={[styles.AddButton2, this.props.style, styles.AddButtonModal]} onPress={this.addAlarm.bind(this)}>
            <Icon style={styles.icon} name="plus" type="MaterialCommunityIcons" />
          </TouchableOpacity>
        </Modal>
        <ScrollView style={styles.scrollcontainer}>
          {alarms}
        </ScrollView>
        <TouchableOpacity style={[styles.AddButton2, this.props.style, styles.AddButton]} onPress={this.toggleModal}>
          <Icon style={styles.icon} name="plus" type="MaterialCommunityIcons" />
        </TouchableOpacity>
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
  AddButton: {
    width: 56,
    height: 56,
    position: "absolute",
    left: 150,
    top: 540,
    opacity: 1,
    backgroundColor: "rgba(126,6,141,1)"
  },

  AddButtonModal:{
    width: 56,
    height: 56,
    position: "absolute",
    left: 130,
    top: 500,
    opacity: 1,
    backgroundColor: "rgba(126,6,141,1)"
  },

  AddButton2: {
    backgroundColor: "#3F51B5",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
    minWidth: 40,
    minHeight: 40,
    flex: 1
  },
  icon: {
    color: "#fff",
    fontFamily: "roboto-regular",
    fontSize: 24,
    alignSelf: "center",
    position: "absolute",
    top: 16,
    left: 16,
    height: 24,
    width: 24
  },

  AlarmclockSettings: {
    flex:1,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 25,
    marginLeft:10,
    marginRight:10,
    marginBottom: 175
  },

  ExitButton2:{
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 20,
    position:"absolute",
    top:25,
    left:225,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 28,
      shadowColor: "#111",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.2,
      elevation: 2,
      minWidth: 40,
      minHeight: 40,
      flex: 1,
      borderWidth: 2,
      borderColor: "rgba(208,2,27,1)",
  },

  iconwindowclose:{
    color: "rgba(247,3,3,1)",
    fontFamily: "roboto-regular",
    fontSize: 28,
    alignSelf: "center"
  },

  switch1to2:{
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    marginLeft:15,
    marginTop:20 
  },

  switch3:{
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    marginLeft:15,
    marginTop:0
  },

  switch4:{
    transform:[{scaleX:1.2}, {scaleY:1.2}],
    marginLeft:15,
    marginTop:15
  },

  slider:{
    left:55,
    bottom:15,
    width: 190
  },

  PowernapButton:{
    marginLeft:60,
    marginTop:24,
    backgroundColor: "#8E1290",
    paddingTop:20 ,
    display: 'flex',
    height: 20,
    width: 70,
    borderRadius: 3
  },

  musicButton:{
    marginLeft:90,
    marginTop:18,
    backgroundColor: "white",
    paddingTop:20 ,
    display: 'flex',
    height: 25,
    width: 85
  },

  iconvolume:{
    color:"gray",
    fontFamily: "roboto-regular",
    fontSize: 20,
    left:60,
    bottom:15    
  },

  timertext:{
    fontSize: 12,
    marginTop: 10
  },

  scrollcontainer:{
    flex:1,
    top:80,
    width:350,
    marginBottom:150,
    backgroundColor:'#261568'
  },

  clock:{
    backgroundColor:"white",
    display: "flex",
    height: 40,
    width: 60,
    top:25,
    left:30
  }
});
