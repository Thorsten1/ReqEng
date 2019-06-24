import React,{Component} from 'react';
import { StyleSheet, Text, View, Switch} from 'react-native';

export default class AlarmSave extends React.Component{
     //need this for each switch
    //toggleSwitch = value => {
        //onValueChange of the switch this function will be called
      //  this.setState({ switchValue: value });
        //state changes according to switch
        //which will result in re-render the text
    //};
    
    render(){
        return(
             <View style={styles.alarmsave}>
                <View style={{flexDirection: 'row'}} key={this.props.keyval}>
                    <Text style={styles.textstyle}>{this.props.val.name}</Text>
                    <Switch style={styles.switch} thumbColor= "#8E1290" ></Switch>
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
    paddingLeft: 125,
    marginTop:30
    },

    textstyle:{
        paddingLeft:110,
        paddingTop:30,
        fontSize:22,
        color: "black"
    }

});