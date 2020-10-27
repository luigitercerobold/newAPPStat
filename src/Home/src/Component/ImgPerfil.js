import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
} from 'react-native';

import { DrawerActions } from 'react-navigation';

import User from '../../../Lib/user'
import url from '../../../Lib/url'

class ImgPerfil extends Component {
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

  getUser = () => {

    if (User.instance.getUser() === null) {
      return "loading"
    } else {
      return User.instance.getUser().name
    }

  }
  getPhoto = () => {

    if (User.instance.getUser() === null) {
      return "loading"
    } else {
      return User.instance.getUser().photo
    }

  }


  render() {

    return (

      <Image style={[styles.imgContainer, styles.imgalingrigtg, this.props.style]} source={this.props.source} />

    );
  }
}
export default ImgPerfil;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  header: {
    flex: 1,
    width: '100%',
    marginTop: 25,
    backgroundColor: '#2185fb',
  },

  footer: {
    flex: 2,
  },
  imgContainer: {
    width: 66,
    height: 66,
  },
  imgalingrigtg: {
    marginLeft: 30,
    width: 90,
    height: 90, borderRadius: 50

  },

});