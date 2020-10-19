
import React, { Component } from 'react'
import {
   Alert, Button, Text
}
   from 'react-native'
import ScrollCenter from '../Component/ScrollCenter'
import Container from '../Component/LoginComponent/ContainerCenter'
import Logo from '../Component/LoginComponent/Logo'
import PassWord from '../Component/PassWord'
import TextBox from '../Component/TextBox'
import BtnSimple from '../Component/BtnSimple'
import BtnNoBackground from '../Component/BtnSimpleGray'
import BtnBlue from '../Component/BtnSimpleBlue'
import urlStat from 'newAPPStat/src/Lib/url'
import http from 'newAPPStat/src/Lib/http'
import Padding from '../Component/PaddingVertical'
import { TextInput } from 'react-native-gesture-handler'
import User from '../../Lib/user'
import Context, { useAuth } from '../../../Context'
import Welcome from '../Component/Welcome'
class Login extends Component {
   state = {
      user: '',
      password: '',
      status: ' Error de conexión de red intente mas tarde.',
      isLogin: false
   }
   componentDidMount() {
      this.ping()
   }
   ping = async () => {
      const data = await http.instance.get(urlStat.ping)
      console.log(data.message)
      this.setState({ status: data.message })
   }

   setUser = (user) => {
      this.setState({ user })
   }

   setPassword = (password) => {
      this.setState({ password })
   }

   logIn = (activateAuth) => {
      this.getToken(activateAuth)
   }

   alert = (message) => {
      Alert.alert(
         "Usuario",
         "Mensaje de Stat: " + message,
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
         ],
         { cancelable: false }
      )
   }
   olvidoPassWord = () => {
      this.props.navigation.navigate('Olvidar')
   }
   registrate = () => {
      this.props.navigation.navigate('DatosNuevoUsuario')
   }
   saveUser(data) {
      http.instance.setToken(data.token)
      http.instance.setId(data.data.id)
      User.instance.newUser(data.data)
      console.log('save user', data.data)
   }
   getToken = async (activateAuth) => {
      const url = urlStat.login
      const body = JSON.stringify({
         email: this.state.user,
         password: this.state.password,
      })
      const data = await http.instance.post(url, body)
      console.log("recibir", data);

      if (data.message != undefined) {
         this.alert(data.message)
         if (data.message === "El correo electrónico que ha ingresado no está registrado.") {
            console.log('verificar correo')
            this.props.navigation.navigate('VerificarToken', { user: data })
         }
      } else {
         if (data != null) {
            this.saveUser(data)
            if (data.data.role == "2") {
               this.mostrarNuevaVista(activateAuth)
            } else {
               this.setState({ alert: "no es posibe ingresar" })
               this.alert("estas cuentas solo son para doctores y no comerciantes")
            }

         }
      }
   }

   mostrarNuevaVista = (activateAuth) => {

     this.setState({isLogin:!this.state.isLogin})
     setTimeout(
      function() {
         activateAuth()
      }
          .bind(this),
      2000
  );
   }


   render() {
      const { isLogin } = this.state;
      return (
         <>
            {isLogin
               ?<Welcome/>
         : <Container>

                  <Padding vertical={1}>
                     <Logo />
                  </Padding>
                  <Padding vertical={0.5}>
                     <TextBox

                        placeholder="Usuario"
                        onChangeText={this.setUser}
                        keyword='email-address'

                     />
                  </Padding>

                  <Context.Consumer>
                     {
                        ({ isAuth, activateAuth }) => {
                           return (
                              <>
                                 <Padding vertical={0.5}>
                                    <PassWord
                                       placeholder="Password"
                                       onChangeText={this.setPassword}
                                       onEndEditing={() => this.logIn(activateAuth)}
                                    />
                                 </Padding>
                                 <Padding vertical={1}>
                                    <BtnSimple
                                       title="Iniciar"
                                       onPress={() => this.logIn(activateAuth)}
                                    />
                                 </Padding>
                              </>

                           )
                        }
                     }
                  </Context.Consumer>

                  <BtnNoBackground
                     title="¿Olvidaste tu Contraseña?"
                     onPress={this.olvidoPassWord}
                  />

                  <BtnBlue
                     title="Registrate"
                     onPress={this.registrate}
                  />
                  <Text>{this.state.status}</Text>

               </Container>
            }



         </>


      )
   }
}

export default Login