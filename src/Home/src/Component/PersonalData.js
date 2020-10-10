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



  render(props) {

    return (
 
        <View style={styles.header} {...props}>
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
  },imgContainer: {
   width: 66,
   height: 66
 },
 imgalingrigtg: {
   marginLeft: 30,
   width: 90,
   height: 90
 },

});