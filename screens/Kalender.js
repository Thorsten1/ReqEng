import React, { Component } from "react";
import Icon from "@builderx/icons";
import { View, StyleSheet, StatusBar, Text } from "react-native";
import MenuButton from '../components/MenuButton'
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
LocaleConfig.locales['de'] = {
  monthNames: ['Januar','Februar','März','April','Mai','Juni','Juli','August','September','Oktober','November','Dezember'],
  monthNamesShort: ['Jan.','Feb.','März','Apr.','Mai','Jun.','Jul.','Aug.','Sept.','Okt.','Nov.','Dez.'],
  dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
  dayNamesShort: ['So.','Mo.','Di.','Mi.','Do.','Fr.','Sa.'],
  today: 'Heute'
};
LocaleConfig.defaultLocale = 'de';

export default class Kalender extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
      date: new Date().toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
        };
      }
  render(){
    return (
      <View style={styles.root}>
    <MenuButton navigation={this.props.navigation} />
        <StatusBar style={styles.statusBar} />
    <Text style={styles.textheader}>Kalender</Text>
    <Calendar style={styles.calendar}
      current={'2019-07-02'}
      minDate={'1970-01-01'}
      maxDate={'2999-12-31'}
       markedDates={{
            '2019-07-02': {selected: true, marked: true, dotColor:'red'}
          }}
      onDayPress={(day) => {console.log('selected day', day)}}
      monthFormat={'MM.yyyy'}
      disableMonthChange={true}
      firstDay={1}
      showWeekNumbers={true}
      onPressArrowLeft={substractMonth => substractMonth()}
      onPressArrowRight={addMonth => addMonth()}
    />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(58,53,111,1)",
    flex: 1,
    opacity: 1
  },
  textheader: {
    top: 37.71,
    position: "absolute",
    color: "rgba(124,114,255,1)",
    height: "20%",
    width: "100%",
    fontSize: 28,
    textAlign: "center"
  },
  statusBar: {},
  calendar: {
    top: "20%",
    position: "absolute",
    height: "60%",
    width: "80%",
  left: "10%",
  },
});