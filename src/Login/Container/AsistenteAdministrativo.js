import react from "react";
import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Title from "../../Home/Cirugias/Component/Title";
import TextBox from '../Component/TextBox'
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
         <>
            <Title title="Asistente Administrativo"/>
            <TextBox
               placeholder={this.state.eMail}
               onChangeText={this.setEmail}
            />
            <Button onPress={this.gotoToToken} title="Validar Asistente"/>
            <Button onPress={this.gotoToToken} title="Omitir"/>
         </>
      )
   }
}

export default AsistenteAdministrativo;