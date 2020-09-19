import React, { Component, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TextInput,
  TouchableOpacity, Button,Pressable
} from 'react-native';
import { Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';

import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
const DateTimePicker = require('@react-native-community/datetimepicker');

import FechaHora from '../Component/FehaHora';

import Title from '../Component/Title'
import SubTitle from '../Component/SubTitle'

import Time from '../Component/Time';
import ListButton from '../Component/ListButton'


class FachaYHora extends React.Component {
  state={
    start:'none',
    time:'none',
    fullStart:'',
    fullTime:''
    }; 
  onPress = ()=>{
    console.log('regresando')
    this.props.navigation.navigate('AgendarCirugia',{
      date:this.state.start,
      timer:this.state.time,
      timerH:"0",
      timerM:"0",
      fullStart:this.state.fullStart,
      fullTime:this.state.fullTime
    })
  }

  handleStartCirugia = (start) => {
    let min =start.getMinutes();
    if (min<10){
      min = "0"+min
    }
    const date = `${start.getDate()}/${start.getMonth()}/${start.getFullYear()} - ${start.getHours()} : ${min}`
    
    this.setState({
      start:date,
      fullStart:start})
    
  }
  handleTimer = (time) => {
    let min =time.getMinutes();
    if (min<10){
      min = "0"+min
    }
    const timer =`${time.getHours()}:${min}`
    this.setState({
      time:timer,
      fullTime:time,
      timerH:time.getHours(),
      timerM:time.getMinutes()
    
    })
    

  }

  
  render() {
 
    return (
      <View style={styles.container}>
        <Title title = 'Agendar cirugía' ></Title>
          <View style={styles.containerAccion}>
            
            <FechaHora title='¿Cuándo es tu cirugía?' onChageDateHour={this.handleStartCirugia}/>
            <Text>{this.state.start}</Text>
            <Time title='¿Cuánto tiempo te tomarás?' onChangeEnd={this.handleTimer}/>
            <Text>{this.state.time}</Text>
          </View>
          <ListButton onPress= {this.onPress}/>
      </View>
    );
  }
}
export default FachaYHora;
const styles = StyleSheet.create({
  button:{
    
    
  }, 
  buttonContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:'space-evenly',
  },
  containerAccion:{
    justifyContent:'center',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  absoluteFilled: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  progressBar: {
    height: 8,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: 'white',
    // borderBottomColor: '#2185fb',
    // borderBottomWidth: 4.5,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#2185fb',
    paddingHorizontal: 26,
  },

  footer: {
    flex: 7,
  },
  inputview: {
    paddingHorizontal: 17,
  },
  text_login: {
    color: '#2185fb',
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    letterSpacing: 3,
    fontSize: 18,
  },
  login: {
    width: '40%',
    height: 40,
    marginStart: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    marginStart: 8,
    marginEnd: 27,
    borderBottomWidth: 1,
    borderBottomColor: '#2185fb',
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    letterSpacing: 2,
    fontSize: 18,
  },
  button: {
    elevation: 0,
    flexDirection: 'row',
    fontFamily: 'Questrial-Regular',
    alignItems: 'center',
    marginTop: 40,
  },
});
const pickerSelectStyles = StyleSheet.create({

  inputIOS: {
    fontSize: 18,
    width: 40,
    fontFamily: 'Questrial-Regular',
    paddingVertical: 12,
    paddingHorizontal: 10,
    //borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    //paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    width: 40,
    fontFamily: 'Questrial-Regular',
    paddingHorizontal: 10,
    paddingVertical: 8,
    //borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    //paddingRight: 30, // to ensure the text is never behind the icon
  },
});
const pickerSelectStyles2 = StyleSheet.create({

  inputIOS: {
    fontSize: 18,
    width: 40,
    fontFamily: 'Questrial-Regular',
    paddingVertical: 12,
    paddingHorizontal: 10,
    //borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    //paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    width: 40,
    fontFamily: 'Questrial-Regular',
    paddingHorizontal: 10,
    paddingVertical: 8,
    //borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    //paddingRight: 30, // to ensure the text is never behind the icon
  },
});
const pickerSelectStyles3 = StyleSheet.create({

  inputIOS: {
    fontSize: 18,
    width: 50,
    fontFamily: 'Questrial-Regular',
    paddingVertical: 12,
    paddingHorizontal: 10,
    //borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    //paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 18,
    width: 50,
    fontFamily: 'Questrial-Regular',
    paddingHorizontal: 10,
    paddingVertical: 8,
    //borderWidth: 0.5,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
    //paddingRight: 30, // to ensure the text is never behind the icon
  },
});


