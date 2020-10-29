
import React, { Component } from 'react'
import { Alert, Text } from 'react-native'
import Title from "../../../Lib/Title";
import TextBox from '../../../Login/Component/TextBox'

import Url from '../../../Lib/url'
import Container from '../../../Login/Component/LoginComponent/ContainerCenter'
import BtnSimple from '../../../Login/Component/BtnSimple'
import ScrollCenter from '../../../Login/Component/ScrollCenter'
import PaddingVertical from '../../../Login/Component/PaddingVertical'
import PassWord from '../../../Login/Component/PassWord'
import User from '../../../Lib/user'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url';


class    DatosNuevoUsuario extends Component {
   state = {
      name: "",
      lastName: "",
      eMail: "",
      passWord: "",
      phone: "",
      newPassword:""
   }

   componentDidMount() {


   }

   

   goToPerfil = async () => {

      const body =
      JSON.stringify(
      {
         // email: this.state.eMail,
         // password: this.state.passWord,
         oldPassword: this.state.passWord,
         newPassword: this.state.newPassword,
         //role:) 2
      })

      const req = await Http.instance.post(urlStat.editPassword, body, Http.instance.getToken())
      Alert.alert(
         "Usuario",
         "Mensaje de Stat: " +req. message,
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            { text: "OK", onPress: () => this.setState({ newPassword:"",passWord: "",}) }
         ],
         { cancelable: false }
      )
   }

   setNewPassword = (newPassword) => {
      this.setState({ newPassword })
   }

 
   setPassWord = (passWord) => {
      this.setState({ passWord })

   }

   render() {
      return (
         <>

            <Title title="Editar Contraseña" />
            <Container>
           
               <PaddingVertical vertical={0.1} />
               <PassWord
                  placeholder="Vieja Contraseña"
                  onChangeText={this.setPassWord}
               //onEndEditing={() => this.logIn(activateAuth)}
               />

               <PaddingVertical vertical={0.1} />
               <PassWord
                  placeholder="Nueva Contraseña"
                  onChangeText={this.setNewPassword}
               //onEndEditing={() => this.logIn(activateAuth)}
               />

         
               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Aceptar"
                     onPress={this.goToPerfil}
                  />
               </PaddingVertical>


            </Container>
         </>
      )

   }
}

export default DatosNuevoUsuario;