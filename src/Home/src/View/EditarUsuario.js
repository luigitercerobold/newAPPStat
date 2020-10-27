
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


class DatosNuevoUsuario extends Component {
   state = {
      name: "",
      lastName: "",
      eMail: "",
      passWord: "",
      phone: ""
   }

   componentDidMount() {

      console.log(User.instance.user)
      this.setState(
         {
            name: User.instance.user.name,
            eMail: User.instance.user.email,
            phone: User.instance.user.phone
         }
      )

   }

   goToToken = async () => {

      const body = JSON.stringify(
         {
            //email: this.state.eMail,
            //password: this.state.passWord,
            name: this.state.name + " " + this.state.lastName,
            phone: this.state.phone,
            role: 2
         }
      )
      const user = await Http.instance.post(Url.creteUser, body)
      console.log(user.message)
      if (user.message === "Se ha registrado exitosamente.") {
         this.props.navigation.navigate('PerfilNuevoUsuario', { user: user, body: body })
      } else {
         Alert.alert('Error', user.message, [
            {
               text: "Aceptar",
               onPress: () => { },
               style: "cancel"
            }
         ])
      }

   }

   goToPerfil = async () => {

      const body =JSON.stringify(
      {
         // email: this.state.eMail,
         // password: this.state.passWord,
         name: this.state.name,
         phone: this.state.phone,
         //role: 2
      }
      )
      const req = await Http.instance.post(urlStat.editNameAndPhone, body, Http.instance.getToken())
      if(req.data.message="Se guardó la información exitosamente"){
         User.instance.user.name = this.state.name
         User.instance.user.phone = this.state.phone
      }else(
         Alert.alert(req.data.message)

      )

   

   }

   setName = (name) => {
      this.setState({ name })
   }
   setLastName = (lastName) => {
      this.setState({ lastName })
   }
   setEmail = (eMail) => {
      this.setState({ eMail })
   }
   setPassWord = (passWord) => {
      this.setState({ passWord })

   }
   setPhone = (phone) => {
      this.setState({ phone })
   }

   editaPassword = () => {
      this.props.navigation.navigate("EditPassword")
   }
   render() {
      return (
         <ScrollCenter>

            <Title title="Editar Usuario" />
            <Container>
               <TextBox
                  placeholder={User.instance.user.name}
                  onChangeText={this.setName}
               />

               <PaddingVertical vertical={0.1} />
               <TextBox
                  placeholder={User.instance.user.phone}
                  onChangeText={this.setPhone}
                  keyword='number-pad'
               />

               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Editar Contraseña"
                     onPress={this.editaPassword}
                  />
               </PaddingVertical>
               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Aceptar"
                     onPress={this.goToPerfil}
                  />
               </PaddingVertical>


            </Container>
         </ScrollCenter>
      )

   }
}

export default DatosNuevoUsuario;