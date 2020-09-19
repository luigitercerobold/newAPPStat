import React, {Component} from 'react';
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


class MenuSc extends Component {
  constructor(props) {
    super(props);
  }
  toggleDrawer = () => {
      this.props.navigation.dispatch(DrawerActions.toggleDrawer())
    }
  static navigationOptions=({navigation}) =>{
    return{
      title:'nombre de usuario'
    }
  }
  
  fecha = () => {
    this.props.navigation.navigate('Cirugias')
  }

  render(props) {

    return (
      <View  style={styles.container} {...props}>
        <View style={styles.header} {...props}>
        </View>
        <View style={styles.footer}>
        <Section
          text="Cirugia"
          img="img"
          nexPage={this.fecha}
        ></Section>
        <Section
          text="Asistencia"
          img="img"
        ></Section>
        <Section
          text="Productos"
          img="img"
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
    //alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#2185fb',
  },

  footer: {
    flex: 1.5,
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
    // borderBottomWidth: 1,
    // borderBottomColor: 'gray',
    marginStart: 8,
    marginEnd: 27,
    color: '#1f2d49',
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    letterSpacing: 2,
    fontSize: 28,
  },
});