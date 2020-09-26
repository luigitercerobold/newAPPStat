import React, { Component, useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TextInput,
  TouchableOpacity, Button
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import { Calendar, CalendarList, Agenda, CalendarTheme } from 'react-native-calendars';
import { NavigationActions } from 'react-navigation';

//import { LinearGradient } from 'expo-linear-gradient';
//import {Actions} from 'react-native-router-flux';


import Title from '../../../../Lib/Title'
class Fecha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  state = {
    value: ''
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }


  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';

    return (
      <View style={styles.container}>
      
        <View style={styles.footer}>
          <Title title="Agendar cirugía"></Title>

          <CalendarPicker
            weekdays={['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']}
            months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembro']}

            onDateChange={this.onDateChange}
          />

          <View style={styles.button}>
            {/* <LinearGradient
              colors={['#2185fb', '#0c71e8']}
              style={styles.login}> */}
            <TouchableOpacity
              style={[
                styles.absoluteFilled,
                { alignItems: 'center', justifyContent: 'center' },
              ]}
              onPress={() => this.props.navigation.navigate('Hora', {
                fecha: startDate.split(' ')[0] + startDate.split(' ')[1] + ' ' + startDate.split(' ')[2]
              })}>
              <Text
                style={[
                  styles.text_login,
                  {
                    color: 'white',
                  },
                ]}>
                {' '}
                  Continuar
                </Text>
            </TouchableOpacity>
            <Button
              title='Continuar'
              onPress={() => this.props.navigation.navigate('Hora', {
                fecha: startDate.split(' ')[0] + startDate.split(' ')[1] + ' ' + startDate.split(' ')[2]
              })}
            >

            </Button>
            {/*<ActivityIndicator*/}
            {/*  animating={this.state.animating}*/}
            {/*  color='#2185fb'*/}
            {/*  size="small"*/}
            {/*  style={styles.activityIndicator}*/}
            {/*/>*/}
            {/* </LinearGradient> */}
          </View>
        </View>

      </View>
    );
  }
}
export default Fecha;
const styles = StyleSheet.create({
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
    fontSize: 20,
  },
  login: {
    width: '50%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    elevation: 0,
    fontFamily: 'Questrial-Regular',
    alignItems: 'center',
    marginTop: 40,
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
});
