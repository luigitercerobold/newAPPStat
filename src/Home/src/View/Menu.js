import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
  TouchableOpacity,
  Image,
  TextInput, Button
} from 'react-native';

import { DrawerActions } from 'react-navigation';
import Section from '../Component/Section'

import PersonalData from '../Component/PersonalData'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import init from '../../../Lib/init'
import User from '../../../Lib/user'

class MenuSc extends Component {
  constructor(props) {
    super(props);
    
  }
  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  }
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'nombre de usuario'
    }
  }

  fecha = () => {
    this.props.navigation.navigate('EstadoCirugia')
  }

  producto = () => {
    this.props.navigation.navigate('IndexProduct')

  }

  mostrar = (props) => {
    

  }
  componentDidMount() {
    if (http.instance.getToken() === null) {
        this.getToken()
    }

}


  getToken = async () => {
    const url = urlStat.login
    const body = init
    const data = await http.instance.post(url, body)
    this.setState({ token: data.token })
    http.instance.setToken(data.token)
    http.instance.setId(data.data.id)

    http.instance.setToken(data.token)
    http.instance.setId(data.data.id)
    User.instance.newUser(data.data)
   

}
  asistencia = () => {
    this.props.navigation.navigate('Asistencia')
  }
  render(props) {

    return (
      <View style={styles.container} {...props}>
        <View style={styles.header} {...props}>
          <PersonalData />
        </View>
        <View style={styles.footer}>
          <Section
            text="Cirugía"
            img={require('newAPPStat/assets/Icon/1x/menu-cirugas.png')}
            nexPage={this.fecha}
            container = {false}
          ></Section>
          <Section
            text="Asistencia"
            nexPage={this.asistencia}
            img={require('newAPPStat/assets/Icon/1x/menu-asistencias.png')}
          ></Section>
          <Section
            text="Productos"
            img={require('newAPPStat/assets/Icon/1x/menu-productos.png')}
            nexPage={this.producto}
            borderLine={false}
          ></Section>
        </View>
      </View>
    );

  }
}
export default MenuSc;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    flex: 0.8,
    width: '100%',
    backgroundColor: '#2185fb',
  },

  footer: {
    flex: 2,
  },

});