
import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import Title from "../../Home/Cirugias/Component/Title";
import TextBox from '../Component/TextBox'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'

class AsistenteAdministrativo extends Component {
   state = {
      colegiado: 'Colegiado',
      especialidad: 'Especialidad'
   }
   goToToken = () => {

   }
   goToAsistenteAdministrativo = () => {
      this.props.navigation.navigate('AsistenteAdministrativo', {
         especialidad: this.state,
         user: this.props.route.params?.user,
         body: this.props.route.params?.body

      })
   }


   setColegiado = (colegiado) => {
      this.setState({ colegiado })
   }
   setEspecialidad = (especialidad) => {
      this.setState(especialidad)
   }


   render() {

      return (
         <ScrollCenter>
            <PaddingVertical vertical={1} />
            <Title title="Tu perfil como doctor" />
            <Container>
               <TextBox
                  placeholder={this.state.colegiado}
                  onChangeText={this.onChangeText}
               />
               <PaddingVertical vertical={0.1} />
               <TextBox
                  placeholder={this.state.especialidad}
                  onChangeText={this.onChangeText}
               />
               <PaddingVertical vertical={0.1} />
               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Validar Colegiado"
                     onPress={this.goToAsistenteAdministrativo}
                  />
               </PaddingVertical>
            </Container>
         </ScrollCenter>
      )

   }
}

export default AsistenteAdministrativo;