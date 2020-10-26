
import React, { Component } from 'react'
import { Alert, Text, View } from 'react-native'
import Title from "../../Lib/Title";
import TextBox from '../Component/TextBox'
import Http from '../../Lib/http'
import Url from '../../Lib/url'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
import PassWord from '../Component/PassWord'
import StatusBar from '../Component/Statusbar';
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


   goToPerfil = () => {
      if (this.state.phone.length == 8) {
         const body =
         {
            email: this.state.eMail,
            password: this.state.passWord,
            name: this.state.name + " " + this.state.lastName,
            phone: this.state.phone,
            role: 2
         }

         this.props.navigation.navigate('PerfilNuevoUsuario', { body: body })
      } else {
         Alert.alert('Error', "Debe elegir un número de 8 dígitos", [
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

            <Title title="Nuevo Usuario" />
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
                  keyword='email-address'
               />

               <PaddingVertical vertical={0.1} />
               <PassWord
                  placeholder="Password"
                  onChangeText={this.setPassWord}
               //onEndEditing={() => this.logIn(activateAuth)}
               />
               <PaddingVertical vertical={0.1} />
               <TextBox
                  placeholder={"Teléfono"}
                  onChangeText={this.setPhone}
                  keyword='number-pad'
               />

               <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>

                  <StatusBar
                     step={1}
                  />
                  <BtnSimple
                     title="Siguiente"
                     onPress={this.goToPerfil}
                  />

               </View>

            </Container>
         </ScrollCenter>
      )

   }
}

export default DatosNuevoUsuario;