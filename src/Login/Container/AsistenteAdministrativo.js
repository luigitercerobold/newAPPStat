
import React, { Component } from 'react'
import { View, TextInput, Button, Alert } from 'react-native'
import Title from "../../Lib/Title";
import TextBox from '../Component/TextBox'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
import SubTittle from '../../Lib/Component/SubTittle';
import StatusBar from '../Component/Statusbar';
import Permisos from '../Component/PermisosAsistente'
import Http from '../../Lib/http';
import urlStat from '../../Lib/url';

class AsistenteAdministrativo extends Component {
   state = {
      eMail: "",
      name: ""
   }
   setEmail = (eMail) => {
      this.setState({ eMail })
   }
   setName = (name) => {
      this.setState(name)
   }
   gotoToToken = (eMail) => {

      this.saveUser()

   }
   saveUser = async() => {
      const body = this.props.route.params?.body

      body.assistantName = this.state.name
      body.assistantEmail = this.state.eMail

      const user = await Http.instance.post(urlStat.creteUser, JSON.stringify(body))
      console.log("se ha registrado correctament", user)
      if (user.message === "Se ha registrado exitosamente.") {
         this.props.navigation.navigate('VerificarToken', {

            asistente: this.state.eMail
         })
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





   render() {
      return (
         <>
            <Title title="Permisos" />
            <SubTittle title={"Ingrese el correo del asistente administrativo para otorgar accesos"} />
            <Container>
               <Container>
               <TextBox
                     placeholder={"Nombre"}
                     onChangeText={this.setName}
                  />
                  <TextBox
                     placeholder={"email"}
                     onChangeText={this.setEmail}
                  />
                  <PaddingVertical vertical={3}>
                     <BtnSimple
                        title={"Omitir"}
                        onPress={() => onPress(eMail)}
                     />
                  </PaddingVertical>
               
               </Container>
               <View style={{ flex: .5, justifyContent: 'flex-end', alignItems: 'center', marginVertical: 20 }}>

                  <StatusBar
                     step={4}
                  />
                  <BtnSimple
                     title="Siguiente"
                     onPress={this.gotoToToken}
                  />

               </View>
            </Container>
         </>
      )
   }
}

export default AsistenteAdministrativo;