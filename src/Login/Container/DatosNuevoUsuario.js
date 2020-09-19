
import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Title from "../../Home/Cirugias/Component/Title";
import TextBox from '../Component/TextBox'
import Http from '../../Lib/http'
import Url from '../../Lib/url'
class DatosNuevoUsuario extends Component{
   state = {
      name:"Nombre",
      lastName:"Apellido",
      eMail:"eMail",
      passWord:"Clave",
      phone:"Teléfono"
   }
   goToToken= async () => {
      const body = JSON.stringify(
         {
         email : this.state.eMail,
         password : this.state.passWord,
         name : this.state.name+ this.state.lastName,
         phone : this.state.phone,
         role : 2
      }
      )
      const user = await Http.instance.post(Url.creteUser,body)
      console.log(user)
      this.props.navigation.navigate('PerfilNuevoUsuario',{user:user,body:body})
   }
   setName = (name) => {
      this.setState({name})
   }
   setLastName = (lastName) => {
      this.setState({lastName})
   }
   setEmail = (eMail) => {
      this.setState({eMail})
   }
   setPassWord = (passWord) => {
      this.setState({passWord})
      
   }
   setPhone = (phone) => {
     this.setState({phone})
   }
   render() {
      return(
         <>
            <Title title="Tus Datos"/>
            <TextBox
               placeholder={"Nombre"}
               onChangeText={this.setName}
            />
            <TextBox
               placeholder={"Apellido"}
               onChangeText={this.setLastName}
            />
            <TextBox
               placeholder={"Correo Electronico"}
               onChangeText={this.setEmail}
            />
              <TextBox
               placeholder={"Calve"}
               onChangeText={this.setPassWord}
            />
            <TextBox
               placeholder={"Teléfono"}
               onChangeText={this.setPhone}
            />
            <Button onPress={this.goToToken} title="Validar Datos"/>
         </>
      )

   }
}

export default DatosNuevoUsuario;