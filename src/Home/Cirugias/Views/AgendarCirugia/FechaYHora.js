import React, { Component, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TextInput,
  TouchableOpacity, Button, Pressable,Alert
} from 'react-native';

import Title from '../../../../Lib/Title'
import SubTitle from '../../Component/SubTitle'
import Time from '../../Component/Time';
import ListButton from '../../Component/ListButton'
import ContainerText from '../../Component/ContainerText'
import Http from '../../../../Lib/http';
import urlStat from '../../../../Lib/url';
import { Context } from '../../Context/CirugiaContext'


class FachaYHora extends React.Component {
  state = {
    start: 'Presiona aquí',
    time: 'Presiona aquí',
    fullStart: '',
    fullTime: '',
    duration: ''
  };
  onPress = async () => {

    if (this.props.route.params.schedule) {
      console.log(this.props.route.params)
       this.props.route.params.date = this.state.fullStart,
      this.props.route.params.end = this.state.fullTime
      const body = JSON.stringify(this.props.route.params)

      const req = await Http.instance.post(urlStat.editSchedule, body, Http.instance.getToken())
      console.log(req.message)
      this.alert(req.message)
      this.props.navigation.navigate('AgendarCirugia', { bodyPart: this.props.route.params?.body.name, procedimiento: this.state.procedimiento })
      this.context.actulizarEstados()
      this.gotoStart()

    } else {
      this.gotoStart()
    }

  }

  gotoStart=()=> {
    this.props.navigation.navigate('AgendarCirugia', {
      date: this.state.start,
      timer: this.state.time,
      timerH: "0",
      timerM: "0",
      fullStart: this.state.fullStart,
      fullTime: this.state.fullTime
    })
  }

  alert = (message) => {

    Alert.alert(
       "Usuario",
       "Mensaje de Stat: " + message,
       [
          {
             text: "Cancel",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
       ],
       { cancelable: false }
    )
 }

  handleStartCirugia = (start) => {
    let dates = new Date(this.props.route.params.date)
    dates.setHours(start.getHours())
    dates.setMinutes(start.getMinutes())

    let min = start.getMinutes();
    if (min < 10) {
      min = "0" + min
    }
    const date = `${dates.getDate()}/${dates.getMonth() + 1}/${dates.getFullYear()} - ${dates.getHours()} : ${min}`

    this.setState({
      start: date,
      fullStart: dates,
      duration: dates
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
          <Time title='HORA DE INICIO' onChangeEnd={this.handleStartCirugia}>
            <ContainerText>{this.state.start} </ContainerText>
          </Time>
          <Time title='DURACIÓN (HORAS)' onChangeEnd={this.handleTimer}>
            <ContainerText>{this.state.time} </ContainerText>
          </Time>
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>

          <ListButton title="Aceptar" onPress={this.onPress} />
        </View>
      </View>
    );
  }
}
FachaYHora.contextType = Context
export default FachaYHora;
const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: 'white',
  },

});


