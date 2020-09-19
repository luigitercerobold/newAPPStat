import react from "react";
import React, { Component } from 'react'
import { View, TextInput, Button,Text } from 'react-native'
import Title from "../../Home/Cirugias/Component/Title";
import TextBox from '../Component/TextBox'
import Http from '../../Lib/http'
import Url from '../../Lib/url'

class VerificarToken extends Component {
   state={
      token:"''",
      message:"ingresa el codigo que se envio al correo"
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
            token:this.state.token,
            email:this.props.route.params?.user.data.email,
            id:this.props.route.params?.user.data.id
         }
     
       const urlcomplete = `?id=${body.id}&email=${body.email}&token=${body.token}`
       console.log(urlcomplete)
      const validar = await Http.instance.post(
         Url.confirmUser+urlcomplete
         , body)
      console.log(validar)
      if (validar.message ==="Su correo ha sido validado correctamente."){
         this.props.navigation.navigate('Auth')

      }else {

         this.setState({message:validar.message})
      }
   }

   setToken=(token)=> {
      this.setState({token})
   }
   render() {

      return (

         <>
            <Title title="Verifica tus datos" />
            <Text>Se ha enviado un correo</Text>
            <TextBox
               placeholder={"Coloca el codigo que se envio por correo "}
               onChangeText={this.setToken}
            />
            <Button onPress={this.validar} title="Validar Datos" />
            <Text>
               {this.state.message}
            </Text>
         </>

      )

   }
}

export default VerificarToken;

