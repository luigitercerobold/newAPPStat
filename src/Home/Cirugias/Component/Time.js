import React, { Component, useState } from 'react';
import { View, Button, Platform, Text, StyleSheet, Pressable } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Line from './Line'
import Colors from 'newAPPStat/src/Lib/Colors'

class Time extends Component {
  state = {
    date: new Date(2020, 0, 0),
    mode: 'date',
    show: false
  }
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;

    this.setState({
      date: currentDate,
      show: Platform.OS === 'ios'
    })


    console.log(selectedDate, this.state.date)
    this.props.onChangeEnd(selectedDate)

  }


  showTimepicker = () => {
    this.showMode('time');
  };
  showMode = (currentMode) => {
    this.setState({
      show: true,
      mode: currentMode
    });

  };


  render() {
    return (
      <View>
        <View>
          <Pressable
            onPress={this.showTimepicker}
          >
            <View style={styles.container}>
              <Text style={styles.text}>
                {this.props.title}
              </Text>
              <Line>
                {this.props.children}
                {this.state.show && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={this.state.date}
                    mode={this.state.mode}
                    is24Hour={true}
                    display="spinner"
                    onChange={this.onChange}
                  />
                )}
              </Line>
            </View>
          </Pressable>
        </View>
      </View>
    );
  }
}


export default Time;
const styles = StyleSheet.create({


  text: {
    fontSize: 20,
    color: Colors.grayLetter,
    paddingBottom: 20,
    padding: 20

  },
  container: {
    
  }
})