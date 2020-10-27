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
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { DrawerActions } from 'react-navigation';
import Section from '../Component/Section'
import User from '../../../Lib/user'
import url from '../../../Lib/url'
import StatFont from '../../../Lib/Component/StatFont'
import ImgPerfil from './ImgPerfil';
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


  render(props) {

    return (

      <View style={styles.header} {...props}>

        <ImgPerfil  
        source={{ uri: url.img + this.getPhoto() }}   
        
        />
        

  
       
        <StatFont
          style={{
            alignSelf: 'flex-start',
            paddingStart: 25,
            paddingTop: 8,
            letterSpacing: 3,
            fontFamily: 'Questrial-Regular',
            fontSize: 24,
            color: 'white',
          }}>
          {this.getUser()}
        </StatFont>
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