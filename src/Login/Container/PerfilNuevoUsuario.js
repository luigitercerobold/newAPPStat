
import React, { Component } from 'react'
import { View, TextInput, Button, Alert } from 'react-native'
import Http from '../../Lib/http'
import Url from '../../Lib/url'
import Title from "../../Lib/Title";
import TextBox from '../Component/TextBox'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
import SubTittle from '../../Lib/Component/SubTittle';
import StatusBar from '../Component/Statusbar';
class AsistenteAdministrativo extends Component {
   state = {
      colegiado: 'Colegiado',
      especialidad: 'Especialidad'
   }
   goToToken = () => {

   }
   goToAsistenteAdministrativo = async () => {

      const body = this.props.route.params?.body

      body.idNumber = this.state.colegiado
      body.speciality = this.state.especialidad

    
      this.props.navigation.navigate('AsistenteAdministrativo', {
         especialidad: this.state,
        
         body: body
      })



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


               <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                  <StatusBar
                     step={3}
                  />
                  <BtnSimple
                     title="Continuar"
                     onPress={this.goToAsistenteAdministrativo}
                  />
               </View>

            </Container>
         </>
      )

   }
}

export default AsistenteAdministrativo;