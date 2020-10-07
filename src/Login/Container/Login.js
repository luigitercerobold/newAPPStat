
import React, { Component } from 'react'
import {
   Alert, Button,Text
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

class Login extends Component {
   state = {
      user: '',
      password: '',
      status:'No Conectado a la base de datos'
   }

   componentDidMount() {
      this.ping()
      

   }
   ping = async () => {
      const data = await http.instance.get(urlStat.ping)
      console.log(data.message)
      this.setState({status:data.message})

   }

   setUser = (user) => {
      
      this.setState({ user })
   }

   setPassword = (password) => {
      this.setState({ password })
   }

   logIn = () => {
      this.getToken()
   }


   alert = (data) => {
      if( data.message != undefined) {
      Alert.alert(
         "Usuario",
         "Mensaje de Stat: " + data.message,
         [
           {
             text: "Cancel",
             onPress: () => console.log("Cancel Pressed"),
             style: "cancel"
           },
           { text: "OK", onPress: () => console.log("OK Pressed") }
         ],
         { cancelable: false }
       );}
   }
   olvidoPassWord = () => {
      console.log('OlvidePasword');
   }

   registrate = () => {
      this.props.navigation.navigate('DatosNuevoUsuario')
   }



   saveUser(data){
      http.instance.setToken(data.token)
      http.instance.setId(data.data.id)
      User.instance.newUser(data.data)
      console.log('save user',data.data)
   } 
   getToken = async () => {
      const url = urlStat.login
      const body = JSON.stringify({
         email: this.state.user,
         password: this.state.password,
      })
      const data = await http.instance.post(url, body)
      console.log("recibir", data);
      if (data.message !=undefined ){
         Alert.alert(
            "Usuario",
            "Mensaje de Stat: " +  data.message  ,
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
      if (data != null) {
        
         this.saveUser(data)
         if (data.data.role == "2") {
            this.props.navigation.navigate('Welcome')
         } else {
            this.setState({ alert: "no es posibe ingresar" })
            Alert.alert(
               "Usuario",
               "Mensaje de Stat: " +"estas cuentas solo son para doctores y no comerciantes" ,
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

      }
   }


   render() {
      return (
        
            <Container>
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
               <Padding vertical={0.5}>
                  <PassWord
                     placeholder="Password"
                     onChangeText={this.setPassword}
                     onEndEditing = {this.logIn}
                  />
               </Padding>
               <Padding vertical={1}>
                  <BtnSimple
                     title="Iniciar"
                     onPress={this.logIn}
                  />
               </Padding>
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
           
      )
   }
}

export default Login