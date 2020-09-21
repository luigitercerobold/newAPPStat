import React, {Component} from 'react';
import {
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  View,
  Text,
  StyleSheet,
  Animated,
  TextInput,
  Image,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import LogoBlue from '../../../assets/img/logoblue.png';
//import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons';
//import * as Font from 'expo-font';
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import {connect} from 'react-redux'
class AuthSc extends Component {

    state = {
    fontLoaded: false
  }

  async componentDidMount() {
    // load fonts
    await this.loadFonts();
  }

  loadFonts = async () => {
    // load the font 
    await Font.loadAsync({
      'Montserrat-Bold': require('../../../assets/fonts/Montserrat-Bold.otf'),
      'Questrial-Regular': require('../../../assets/fonts/Questrial-Regular.ttf'),
    });
    this.setState({fontLoaded: true})
  }
  // closeSpinner() {
  //   setTimeout(
  //     this.setState({
  //       animating: false,
  //     }),
  //     2000,
  //   );
  // }

  constructor(props) {
    super(props);
    global.fechita='';
    this.state = {
      // animating: false,
      check_textInputChange: false,
      user: '',
      password: '',
      secureTextEntry: true,
      alert:""
    };
  }
  getToken = async () =>{
    const url =urlStat.login
    const body = JSON.stringify({
      email: this.state.user,
      password:this.state.password,
    })
    const data  = await http.instance.post(url,body) 
    console.log("recibir",data);  
    
    if(data!=null){
      http.instance.setToken(data.token)
      http.instance.setId(data.data.id)
      if(data.data.role == "2"){
        this.props.navigation.navigate('Welcome')
      }else {
        this.setState({alert:"no es posibe ingresar"})
      }
      
    }
 }
  textInputChange(value) {
    if (value.length !== 0) {
      this.setState({
        check_textInputChange: true,
        user: value,
      });
    } else {
      this.setState({
        check_textInputChange: false,
      });
    }
  }
  goToWelcome = () =>{
    this.getToken()
    
  }
 
  render() {
    console.log( 'los props ',this.props)
    return (
      <View style={styles.container}>
        <View
          style={[
            styles.header,
            {
              marginTop: 20,
            },
          ]}>
          <Image
            style={{width: 145, height: 35, resizeMode: 'contain'}}
            source={LogoBlue}
          />
        </View>
        <View style={styles.header}>
          <Text style={styles.text_header}>login</Text>
        </View>
        <View style={styles.footer}>
          <View style={styles.action}>
            <TextInput
              placeholder="Usuario"
              style={[
                styles.text_input,
                {
                  marginEnd: 27,
                  borderBottomWidth: 1,
                  borderBottomColor: '#2185fb',
                },
              ]}
              onChangeText={text => this.textInputChange(text)}
            />
          </View>
          <View
            style={[
              styles.action,
              {
                marginTop: 50,
              },
            ]}>
            {this.state.secureTextEntry ? (
              <TextInput
                secureTextEntry={true}
                placeholder="Contraseña"
                style={[
                  styles.text_input,
                  {
                    borderBottomWidth: 1,
                    borderBottomColor: '#2185fb',
                  },
                ]}
                value={this.state.password}
                onChangeText={text =>
                  this.setState({
                    password: text,
                  })
                }
              />
            ) : (
              <TextInput
                placeholder="Contraseña"
                style={[
                  styles.text_input,
                  {
                    borderBottomWidth: 1,
                    borderBottomColor: '#2185fb',
                  },
                ]}
                value={this.state.password}
                onChangeText={text =>
                  this.setState({
                    password: text,
                  })
                }
              />
            )}
            <FontAwesome5
              style={{alignSelf: 'center'}}
              name="eye-slash"
              color="#2185fb"
              size={22}
            />
          </View>
          <View style={styles.button}>
            {/* <LinearGradient
              colors={['#2185fb', '#0c71e8']}
              style={styles.login}> */}
              <TouchableOpacity
                style={[
                  styles.absoluteFilled,
                  {alignItems: 'center', justifyContent: 'center'},
                ]}
                onPress={this.goToWelcome}
                
                >
                <Text
                  style={[
                    styles.text_login,
                    {
                      color: 'white',
                    },
                  ]}>
                  {' '}
                  Ingresar
                </Text>
              </TouchableOpacity>

                <Text>{this.state.alert}</Text>
              <Button
                title='Ingresar'
                onPress={this.goToWelcome}
              >

              </Button>
              <Text>
                  Ingresar
              </Text>
              {/*<ActivityIndicator*/}
              {/*  animating={this.state.animating}*/}
              {/*  color='#2185fb'*/}
              {/*  size="small"*/}
              {/*  style={styles.activityIndicator}*/}
              {/*/>*/}
            {/* </LinearGradient> */}
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Confirmar')}
              style={[
                styles.login,
                {
                  justifyContent: 'center',
                  width: '100%',
                  height: 45,
                },
              ]}>
              <Text
                style={[
                  styles.text_login,
                  {
                    textAlign: 'center',
                    width: '100%',
                    color: 'black',
                    fontSize: 14,
                  },
                ]}>
                ¿Olvidó su usuario?
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DatosNuevoUsuario')}
              style={[
                styles.login,
                {
                  width: '100%',
                  height: 75,
                  justifyContent:'center',
                },
              ]}>
              <Text
                style={[
                  styles.text_login,
                  {
                    textAlign:'center',
                    color: '#2185fb',
                    letterSpacing: 3,
                    fontWeight: '100',
                    fontSize: 26,
                  },
                ]}>
                Registrarse
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
const mapStateToProps = (reducers) => {
  return reducers.usuariosReducer;
}
export default connect(mapStateToProps,{/*actions*/ }) (AuthSc);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  absoluteFilled: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  footer: {
    flex: 3,
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  action: {
    paddingLeft: 30,

    flexDirection: 'row',
  },
  button: {
    elevation: 0,
    fontFamily: 'Questrial-Regular',
    alignItems: 'center',
    marginTop: 70,
  },
  text_input: {
    flex: 1,
    letterSpacing: 3,
    color: 'gray',
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    fontSize: 22,
  },
  text_header: {
    letterSpacing: 7,
    fontSize: 32,
    color: 'gray',
    fontFamily: 'Questrial-Regular',
  },
  text_login: {
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    fontSize: 20,
  },

  login: {
    width: '38%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
});
