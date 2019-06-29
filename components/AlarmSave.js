import React,{Component} from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity} from 'react-native';
//imports builder x
import Icon from "@builderx/icons";
import Timepicker from "react-native-24h-timepicker"

export default class AlarmSave extends React.Component{

    state = {
        value: false,
      };
    
     //need this for each switch
    toggleSwitch = value => {
        //onValueChange of the switch this function will be called
        this.setState({ switchVal: value });
        //state changes according to switch
        //which will result in re-render the text
    };
    
    render(){
        return(
             <View style={styles.alarmsave}>
                <View>
                    <TouchableOpacity style={[styles.ExitButton2, this.props.style]} onPress={this.props.delete}>
                        <Icon style={styles.iconwindowclose} name="window-close" type="MaterialCommunityIcons" />
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: 'row'}} key={this.props.keyval}>
                    <Text style={styles.textstyle1}>{this.props.val.time}</Text>
                    <Text style={styles.textstyle}>{this.props.val.name}</Text>
                    <Switch style={styles.switch} thumbColor= "#8E1290" onValueChange={this.toggleSwitch} value={this.state.switchVal}></Switch>
                </View>
                <View style={{flexDirection: 'row'}} >
                <Text style={{paddingBottom: 20, fontSize:18, paddingLeft:110}}>Mo|Di|Mi|Do|Fr|Sa|So</Text>
                </View>
           </View> 
        );
    }
}

const styles=StyleSheet.create({
    
    alarmsave:{
        position: 'relative',
        marginLeft:10,
        marginRight:10,
        marginTop:10,
        borderRadius:10,
        height: 120,
        backgroundColor: 'white'

    },

    switch:{
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
    left: 280,
    marginTop:30,
    position: 'absolute'
    },

    textstyle:{
        paddingLeft:110,
        paddingTop:30,
        fontSize:22,
        color: "black",
        position:"absolute"
    },

    ExitButton2:{
        backgroundColor: "rgba(255,255,255,1)",
        marginLeft: 20,
        position:"absolute",
        top:5,
        left:275,
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
          width: 20,
          height: 20,
          flex: 1,
          borderWidth: 2,
          borderColor: "rgba(208,2,27,1)",
      },
    
      iconwindowclose:{
        color: "rgba(247,3,3,1)",
        fontFamily: "roboto-regular",
        fontSize: 16,
        alignSelf: "center"
      },

      textstyle1:{
          color: "black",
          fontSize:22,
          paddingTop:30,
          paddingLeft:20
      }

});