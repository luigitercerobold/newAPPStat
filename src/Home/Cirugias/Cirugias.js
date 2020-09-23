import React, {Component, useEffect, useState, useRef} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {NavigationActions} from 'react-navigation';
import LogoWhite from '../../../assets/img/logo.png';
//import { LinearGradient } from 'expo-linear-gradient';
//import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
class InicioSc extends Component {
    constructor() {
        super();
        this.state = {
            check_textInputChange: false,
            colegiado: '',
            width1: '50%',
            especialidad: '',
            secureTextEntry: true,
        };
    }
    render() {
      
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => this.props.navigation.goBack()}
                        style={{justifyContent:'center'}}>
                        <FontAwesome5
                            style={{alignSelf: 'flex-start',}}
                            name="arrow-circle-left"
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>

                    <Image
                        style={{
                            marginLeft:'auto',
                            marginRight:'auto',
                            alignSelf: 'center',
                            width: 145,
                            height: 35,
                            resizeMode: 'contain',
                        }}
                        source={LogoWhite}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                    style={{justifyContent:'center',}}>
                        <FontAwesome5
                            name="bars"
                            color="white"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.footer}>
                {
                  (global.fechita==='') ?
<Text
                        style={[
                            styles.text_login,
                            {
                                color: 'gray',
                                paddingTop: 36,
                                paddingStart: 20,
                                alignSelf: 'flex-start',
                                letterSpacing: 3,
                                fontWeight: 'small',
                                fontSize: 22,
                            },
                        ]}>
                        No tiene cirugías pendientes
                    </Text>

:
<View style={{flexDirection:"row", alignItems:'center', backgroundColor:'#D3D3D3',height:60}}>
          <FontAwesome5
                  style={{paddingStart:10, marginRight:10, alignSelf: 'left'}}
                  name="calendar-alt"
                  color="#2185fb"
                  size={40}
                />
                <Text
            style={[
              styles.text_login,
              {
                color: 'black',
                paddingStart: 10,
                justifyContent:'center',
                letterSpacing: 2,
                fontWeight: 'small',
                fontSize: 18,
              },
            ]}>
            {global.fechita}{'\n'}
          </Text>
            <TouchableOpacity
            style={{marginLeft:'auto',marginRight:10}}
             onPress={() => this.props.navigation.navigate('Calendar')}>
          <View style={{
            justifyContent:'center',
            width:25,
            marginStart:20,
            height:25,
            alignSelf:'left',
            borderRadius:30,
            backgroundColor:'#2185fb'}}>
                        <FontAwesome5 style={{alignSelf: 'center',}}
                                      name="pencil-alt"
                                      color="white"
                                      size={13}></FontAwesome5>
                        </View>
          </TouchableOpacity>
          
          </View>

                }
                    
                    <TouchableOpacity style={{marginTop:20,}}>
                        <Text
                            style={[
                                styles.text_login,
                                {
                                    color: '#2185fb',
                                    paddingTop: 36,
                                    paddingStart: 20,
                                    alignSelf: 'center',
                                    letterSpacing: 3,
                                    fontWeight: 'small',
                                    fontSize: 28,
                                },
                            ]}>
                            Ver cirugías
                        </Text>
                        <View style={{justifyContent:'center',width:50,height:50,marginTop:25,alignSelf:'center',borderRadius:30,backgroundColor:'#2185fb'}}>
                        <FontAwesome5 style={{alignSelf: 'center',}}
                                      name="calendar-alt"
                                      color="white"
                                      size={25}></FontAwesome5>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{marginTop:20,}}  onPress={() => this.props.navigation.navigate('CirugiaCal')}>
                        <Text
                            style={[
                                styles.text_login,
                                {
                                    color: '#2185fb',
                                    paddingTop: 36,
                                    paddingStart: 20,
                                    alignSelf: 'center',
                                    letterSpacing: 3,
                                    fontWeight: 'small',
                                    fontSize: 28,
                                },
                            ]}>
                            Agendar cirugía
                        </Text>
                        <View style={{justifyContent:'center',width:50,height:50,marginTop:25,alignSelf:'center',borderRadius:30,backgroundColor:'#2185fb'}}>
                        <FontAwesome5 style={{alignSelf: 'center',}}
                                      name="plus"
                                      color="white"
                                      size={25}></FontAwesome5>
                        </View>
                    </TouchableOpacity>


                </View>

            </View>
        );
    }
}
export default InicioSc;
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
        width: '30%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
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
