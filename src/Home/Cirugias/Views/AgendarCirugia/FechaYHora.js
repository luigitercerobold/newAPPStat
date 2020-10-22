import React, { Component, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TextInput,
  TouchableOpacity, Button, Pressable
} from 'react-native';
import { Picker } from 'react-native';
import { NavigationActions } from 'react-navigation';

import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
const DateTimePicker = require('@react-native-community/datetimepicker');
import FechaHora from '../../Component/FehaHora';
import Title from '../../../../Lib/Title'
import SubTitle from '../../Component/SubTitle'
import Time from '../../Component/Time';
import ListButton from '../../Component/ListButton'
import ContainerText from '../../Component/ContainerText'
import Header from '../../../src/Component/Header'


class FachaYHora extends React.Component {
  state = {
    start: 'Presiona aquí',
    time: 'Presiona aquí',
    fullStart: '',
    fullTime: '',
    duration:''
  };
  onPress = () => {
    console.log("enviando fullstart",this.state.fullStart) 
    this.props.navigation.navigate('AgendarCirugia', {
      date: this.state.start,
      timer: this.state.time,
      timerH: "0",
      timerM: "0",
      fullStart: this.state.fullStart,
      fullTime: this.state.fullTime
    })
  }

  handleStartCirugia = (start) => {
    let min = start.getMinutes();
    if (min < 10) {
      min = "0" + min
    }
    const date = `${start.getDate()}/${start.getMonth()+1}/${start.getFullYear()} - ${start.getHours()} : ${min}`

    this.setState({
      start: date,
      fullStart: start,
      duration:start
      //time:start
    })

  }
  handleTimer = (time) => {
    let min = time.getMinutes();
    let fecha = new Date()

    fecha.setFullYear(this.state.fullStart.getFullYear())
    fecha.setMonth(this.state.fullStart.getMonth())
    fecha.setDate(this.state.fullStart.getDate())
  
  
    fecha.setHours(this.state.fullStart.getHours())
    fecha.setMinutes(this.state.fullStart.getMinutes())

    console.log(this.state.fullStart)
    fecha.setHours(fecha.getHours() + time.getHours());
    fecha.setMinutes(fecha.getMinutes() + time.getMinutes());
    console.log(fecha)
    console.log(this.state.fullStart)
    
    if (min < 10) {
      min = "0" + min
    }
    const timer = `${time.getHours()}:${min}`
    this.setState({
      time: timer,
      fullTime: fecha,
      timerH: time.getHours(),
      timerM: time.getMinutes(),
      
    })


  }


  render() {

    return (
      <View style={styles.container}>
        <Title title='Agendar cirugía' ></Title>
        <View>
          <FechaHora title='¿Cuándo es tu cirugía?' onChageDateHour={this.handleStartCirugia}>

            <ContainerText>{this.state.start} </ContainerText>
          </FechaHora>
          <Time title='¿Cuánto tiempo te tomarás?' onChangeEnd={this.handleTimer}>
            <ContainerText>{this.state.time} </ContainerText>
          </Time>
        </View>


        <ListButton title="Aceptar" onPress={this.onPress} />
      </View>
    );
  }
}
export default FachaYHora;
const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});


