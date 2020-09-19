import React, {Component, useState} from 'react';
import {View, Button, Platform, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Line from './Line'

class Time extends Component{
  state ={
    date:new Date(2020,0,0),
    mode:'date',
    show:false
  }
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
   
    this.setState({
     date: currentDate,
     show:Platform.OS === 'ios'
    })

   
    console.log(selectedDate,this.state.date)
    this.props.onChangeEnd(selectedDate)
  
  }


  showTimepicker = () => {
    this.showMode('time');
  };
  showMode = (currentMode) => {
    this.setState({
      show:true,
      mode:currentMode
    });
    
  };


  render(){
    return (
      <View>
        <Line>
          <View>
            <Button onPress={this.showTimepicker} title={this.props.title} />
          </View>
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
    );
  }
}


export default Time ;