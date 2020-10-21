import react from "react";
import React, { Component } from 'react'
import { View, TextInput, Button, Text,Alert } from 'react-native'
import Title from "../../Lib/Title";
import TextBox from '../Component/TextBox'
import Http from '../../Lib/http'
import Url from '../../Lib/url'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
import StatFont from '../../Lib/Component/StatFont'
class VerificarToken extends Component {
   state = {
      token: "''",
      message: "ingresa el codigo que se envio al correo"
   }

   componentDidMount(){
      console.log(this.props.route.params)
   }
   validar = async (token) => {

      const body =
      {
         token: this.state.token,
         email: this.props.route.params?.user.data.email,
         id: this.props.route.params?.user.data.id
      }

      const urlcomplete = `?id=${body.id}&email=${body.email}&token=${body.token}`
      console.log(urlcomplete)
      const validar = await Http.instance.post(
         Url.confirmUser + urlcomplete
         , body)
      console.log(validar)
      if (validar.message === "Su correo ha sido validado correctamente.") {
         this.props.navigation.navigate('Login')

      } else {
         this.alert(validar.message)
         this.setState({ message: validar.message })
      }
   }

   setToken = (token) => {
      this.setState({ token })
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
   
   render() {

      return (

         <>
            
            <Title title="Verifica tus datos" />
            <Container>
               <StatFont>Se envió un código a tu correo electrónico</StatFont>
               <TextBox
                  placeholder={"Introduce el código"}
                  onChangeText={this.setToken}
               />
             
               <StatFont>
                  {this.state.message}
               </StatFont>
               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Finalizar"
                     onPress={this.validar}
                  />
               </PaddingVertical>
            </Container>
         </>

      )

   }
}

export default VerificarToken;

