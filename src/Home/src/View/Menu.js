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
import LogoWhite from '../../../../assets/img/logo.png';
import Header from '../Component/Header'
import Drawer from '../../../Drawer/DrawerMenu';

class MenuSc extends Component {
  constructor(props) {
    super(props);
    console.log('menusc',props)
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

  mostrar = (props) =>{
      console.log(props)

  }

  render(props) {

    return (
     
       
        
        <View style={styles.container} {...props}>
        <Header navigation = {this.props.navigation}/>  
          <View style={styles.header} {...props}>
            
            <PersonalData />
          </View>
          <View style={styles.footer}>
            <Section
              text="Cirugia"
              img={require('newAPPStat/assets/Icon/1x/menu-cirugas.png')}
              nexPage={this.fecha}
            ></Section>
            <Section
              text="Asistencia"
              img={require('newAPPStat/assets/Icon/1x/menu-asistencias.png')}
            ></Section>
            <Section
              text="Productos"
              img={require('newAPPStat/assets/Icon/1x/menu-productos.png')}
              nexPage={this.producto}
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
    flex: 1,
    width: '100%',
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#2185fb',
  },

  footer: {
    flex: 2,
  },

});