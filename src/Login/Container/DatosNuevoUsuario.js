
import React, { Component } from 'react'
import { Alert, Text } from 'react-native'
import Title from "../../Lib/Title";
import TextBox from '../Component/TextBox'
import Http from '../../Lib/http'
import Url from '../../Lib/url'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
class DatosNuevoUsuario extends Component {
   state = {
      name: "Nombre",
      lastName: "Apellido",
      eMail: "eMail",
      passWord: "Clave",
      phone: "Teléfono"
   }
   goToToken = async () => {
      const body = JSON.stringify(
         {
            email: this.state.eMail,
            password: this.state.passWord,
            name: this.state.name + this.state.lastName,
            phone: this.state.phone,
            role: 0.1
         }
      )
      const user = await Http.instance.post(Url.creteUser, body)
      console.log(user)
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
   render() {
      return (
         <ScrollCenter>
           
            <Title title="Tus Datos" />
            <Container>
               <TextBox
                  placeholder={"Nombre"}
                  onChangeText={this.setName}
               />
               <PaddingVertical vertical={0.1} />
               <TextBox
                  placeholder={"Apellido"}
                  onChangeText={this.setLastName}
               />
               <PaddingVertical vertical={0.1} />
               <TextBox
                  placeholder={"Correo Electrónico"}
                  onChangeText={this.setEmail}
               />
               <PaddingVertical vertical={0.1} />
               <TextBox
                  placeholder={"Calve"}
                  onChangeText={this.setPassWord}
               />
               <PaddingVertical vertical={0.1} />
               <TextBox
                  placeholder={"Teléfono"}
                  onChangeText={this.setPhone}
               />
               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Siguiente"
                     onPress={this.goToToken}
                  />
               </PaddingVertical>


            </Container>
         </ScrollCenter>
      )

   }
}

export default DatosNuevoUsuario;