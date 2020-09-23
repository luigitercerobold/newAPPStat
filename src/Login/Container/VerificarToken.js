import react from "react";
import React, { Component } from 'react'
import { View, TextInput, Button, Text } from 'react-native'
import Title from "../../Home/Cirugias/Component/Title";
import TextBox from '../Component/TextBox'
import Http from '../../Lib/http'
import Url from '../../Lib/url'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'

class VerificarToken extends Component {
   state = {
      token: "''",
      message: "ingresa el codigo que se envio al correo"
   }

   validar = async (token) => {

      // this.props.navigation.navigate('login',{
      //    especialidad:this.props.route.params?.especialidad,
      //    user:this.props.route.params?.user,
      //    body:this.props.route.params?.body,
      //    asistente:this.state.eMail

      // })
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
         this.props.navigation.navigate('Auth')

      } else {

         this.setState({ message: validar.message })
      }
   }

   setToken = (token) => {
      this.setState({ token })
   }
   render() {

      return (

         <ScrollCenter>
            <PaddingVertical vertical={1} />
            <Title title="Verifica tus datos" />
            <Container>
               <Text>Se envió un código a tu correo electrónico</Text>
               <TextBox
                  placeholder={"Introduce el código"}
                  onChangeText={this.setToken}
               />
             
               <Text>
                  {this.state.message}
               </Text>
               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Finalizar"
                     onPress={this.validar}
                  />
               </PaddingVertical>
            </Container>
         </ScrollCenter>

      )

   }
}

export default VerificarToken;

