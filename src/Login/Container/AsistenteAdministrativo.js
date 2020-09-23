import react from "react";
import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Title from "../../Home/Cirugias/Component/Title";
import TextBox from '../Component/TextBox'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
class AsistenteAdministrativo extends Component{
   state={
      eMail:"Correo Electronico"
   }
   setEmail = (eMail) => {
      this.setState({eMail})
   }
   gotoToToken = () =>{
      this.props.navigation.navigate('VerificarToken',{
         especialidad:this.props.route.params?.especialidad,
         user:this.props.route.params?.user,
         body:this.props.route.params?.body,
         asistente:this.state.eMail
         
      })
      
   }
   render() {
      return(
         <ScrollCenter>
            <PaddingVertical vertical={1} />
            <Title title="Asistente Administrativo"/>
            <Container>
            <TextBox
               placeholder={this.state.eMail}
               onChangeText={this.setEmail}
            />
            <PaddingVertical vertical={3}>
                  <BtnSimple
                     title="Siguiente"
                     onPress={this.gotoToToken}
                  />
               </PaddingVertical>
               <PaddingVertical vertical={3}>
                  <BtnSimple
                     title="Omitir"
                     onPress={this.gotoToToken}
                  />
               </PaddingVertical>
            
            </Container>
         </ScrollCenter>
      )
   }
}

export default AsistenteAdministrativo;