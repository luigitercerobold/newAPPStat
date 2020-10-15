
import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Title from "../../Lib/Title";
import TextBox from '../Component/TextBox'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
import SubTittle from '../../Lib/Component/SubTittle';
class AsistenteAdministrativo extends Component{
   state={
      eMail:"Correo Electronico"
   }
   setEmail = (eMail) => {
      this.setState({eMail})
   }
   gotoToToken = () =>{
      console.log("got to vrificar token",this.props.route.params)
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
            
            <Title title="Permisos"/>
            <SubTittle tittle = "Ingrese el correo del asistente administrativo para otorgar accesos"/>
            <Container>
            <TextBox
               placeholder={"Asistent"}
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