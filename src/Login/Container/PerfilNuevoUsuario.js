
import React, { Component } from 'react'
import { View, TextInput, Button,Alert } from 'react-native'
import Http from '../../Lib/http'
import Url from '../../Lib/url'
import Title from "../../Lib/Title";
import TextBox from '../Component/TextBox'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
import SubTittle from '../../Lib/Component/SubTittle';

class AsistenteAdministrativo extends Component {
   state = {
      colegiado: 'Colegiado',
      especialidad: 'Especialidad'
   }
   goToToken = () => {

   }
   goToAsistenteAdministrativo  = async () => {

      const body = this.props.route.params?.body
      
      body.idNumber = this.state.colegiado
      body.speciality = this.state.especialidad 

      const user = await Http.instance.post(Url.creteUser, JSON.stringify( body))
      console.log("se ha registrado correctament",user)
      if (user.message === "Se ha registrado exitosamente.") {
         this.props.navigation.navigate('AsistenteAdministrativo', {
            especialidad: this.state,
            user: user,
            body: this.props.route.params?.body

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


   setColegiado = (colegiado) => {
      this.setState({ colegiado })
   }
   setEspecialidad = (especialidad) => {
      this.setState(especialidad)
   }

   colegiado = (text) => {
      this.setState({
         colegiado: text
      })
   }

   especialidad = (text) => {
      this.setState({
         especialidad: text
      })
   }
   render() {

      return (
      
<>
            <Title title="Perfil" />
            
               
            <Container>
               <TextBox
                  placeholder={"Colegiado"}
                  onChangeText={this.colegiado}
               />
               <PaddingVertical vertical={0.1} />
               <TextBox
                  placeholder={"Especialidad"}
                  onChangeText={this.especialidad}
               />
               <PaddingVertical vertical={0.1} />
               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Validar Colegiado"
                     onPress={this.goToAsistenteAdministrativo}
                  />
               </PaddingVertical>
            </Container>
    </>
      )

   }
}

export default AsistenteAdministrativo;