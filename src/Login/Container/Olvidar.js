
import React, { Component } from 'react'
import { View, TextInput, Button } from 'react-native'
import Title from "../../Lib/Title";
import TextBox from '../Component/TextBox'
import Container from '../Component/LoginComponent/ContainerCenter'
import BtnSimple from '../Component/BtnSimple'
import ScrollCenter from '../Component/ScrollCenter'
import PaddingVertical from '../Component/PaddingVertical'
import SubTittle from '../../Lib/Component/SubTittle';

import Permisos from '../Component/PermisosAsistente'
class Olvidar extends Component {
   state = {
      eMail: "Correo Electronico"
   }
   setEmail = (eMail) => {
      this.setState({ eMail })
   }
   gotoToToken = (eMail) => {
      console.log("CorreoCorrectamente", this.props.route.params)
      this.props.navigation.navigate('CorreoCorrectamente')

   }
   render() {
      return (
         <>
            <Permisos
               onPress ={this.gotoToToken}
               title = "Nueva Contraseña"
               subTitle="Ingrese el correo registrado y se enviará una clave temporal a su correo electronico" 
               placeholder="Correo electrónico"
            >

            </Permisos>
          
         </>
      )
   }
}

export default Olvidar;