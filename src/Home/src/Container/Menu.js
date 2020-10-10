import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Animated,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import LogoWhite from '../../../../assets/img/logo.png';

import { DrawerActions } from 'react-navigation';
import Card from '../Component/Card'
import User from '../../../Lib/user'


class MenuSc extends Component {
  constructor(props) {
    super(props);
    console.log('menusc',props)
  }
  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  }

  render(props) {

    return (
 
        <View style={styles.container} {...props}>

          <View style={styles.header} {...props}>
            <View style={styles.samerow} {...props}>
              <View style={{ width: '90%', alignItems: 'center' }}>
                <Image
                  style={{
                    paddingTop: 60,
                    marginLeft: 40,
                    width: 95,
                    height: 25,
                    resizeMode: 'contain',
                  }}
                  source={LogoWhite}
                />
              </View>
              <TouchableOpacity  {...props}
              >

                <Image ></Image>
              </TouchableOpacity>
            </View>


            <Image style={styles.imgContainer, styles.imgalingrigtg} source={require('newAPPStat/assets/img/avatar.png')} />

            <Text
              style={{
                alignSelf: 'flex-start',
                paddingStart: 25,
                paddingTop: 8,
                letterSpacing: 3,
                fontFamily: 'Questrial-Regular',
                fontSize: 24,
                color: 'white',
              }}>
              {User.instance.getUser().name}
            </Text>
          </View>
          <View style={styles.footer}>

            <TouchableOpacity
              style={{
                paddingHorizontal: 13,
              }}
              onPress={() => this.props.navigation.navigate('EstadoCirugia')}>
              <View style={[styles.reactItem, { flexDirection: 'row' }]}>
                <Text
                  style={[
                    styles.text_input,
                    {
                      height: 80,
                      marginTop: 55,
                    },
                  ]}>
                  {"Cirugías    "}
                </Text>
                <Card
                  img={require('newAPPStat/assets/Icon/1x/menu-cirugas.png')}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                paddingHorizontal: 13,
              }}
              onPress={() => this.props.navigation.navigate('AssIni')}>
              <View style={[styles.reactItem, { flexDirection: 'row' }]}>
                <Text
                  style={[
                    styles.text_input,
                  ]}>
                  Asistencia
              </Text>
                <Card
                  img={require('newAPPStat/assets/Icon/1x/menu-asistencias.png')}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingHorizontal: 13,
              }}
              onPress={() => this.props.navigation.navigate('IndexProduct')}>
              <View style={[styles.reactItem, { flexDirection: 'row' }]}>
                <Text
                  style={[
                    styles.text_input,
                    {
                      
                      borderBottomWidth: 0,
                    },
                  ]}>
                  Productos
              </Text>
                <Card
                  img={require('newAPPStat/assets/Icon/1x/menu-productos.png')}
                />

              </View>
            </TouchableOpacity>
          </View>
        </View>
  
    );
  }
}
export default MenuSc;
const styles = StyleSheet.create({
  imgalingrigtg: {
    marginLeft: 30,
    width: 90,
    height: 90
  },
  imgCenter: {
    justifyContent: "center",
    alignItems: "center"
  },
  imgContainer: {
    width: 66,
    height: 66
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
  samerow: {
    width: '100%',
    flexDirection: 'row',
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
    width: '100%',

    backgroundColor: '#2185fb',
  },

  footer: {
    flex: 2,
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
    width: '30%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  reactItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    paddingHorizontal: 15,
    alignContent: 'center',
  },
  iconFrame: {
    justifyContent: 'center',
    marginLeft: 30,
    // paddingLeft:90,
    height: 100,
    width: 100,
    marginTop: '-10%',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 10,
    //shadowOffset: {height: 100, width: 100},
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 8,
  },
  text_input: {
    height: 80,
    paddingTop: 23,
    marginStart: 8,
    marginEnd: 27,
    color: '#1f2d49',
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    letterSpacing: 2,
    fontSize: 28,
    height: 80,
    marginTop: 55,
  },
});