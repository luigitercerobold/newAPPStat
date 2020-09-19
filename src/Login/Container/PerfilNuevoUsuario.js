
import React, {Component} from 'react'
import {View, TextInput, Button} from 'react-native'
import Title from "../../Home/Cirugias/Component/Title";
import TextBox from '../Component/TextBox'
class AsistenteAdministrativo extends Component{
   state = {
      colegiado:'Colegiado',
      especialidad:'Especialidad'
   }
   goToToken= () => {

   }
   goToAsistenteAdministrativo = () => {
      this.props.navigation.navigate('AsistenteAdministrativo',{
         especialidad:this.state,
         user:this.props.route.params?.user,
         body:this.props.route.params?.body
         
      })
   }

  
   setColegiado = (colegiado) => {
      this.setState({colegiado})
   }
   setEspecialidad = (especialidad) => {
      this.setState(especialidad)
   }
   

   render() {
      
      return(
         <>
            <Title title="Tu perfil como doctor"/>
            <TextBox
               placeholder={this.state.colegiado}
               onChangeText={this.onChangeText}
            />
            <TextBox
               placeholder={this.state.especialidad}
               onChangeText={this.onChangeText}
            />
            <Button onPress={this.goToAsistenteAdministrativo} title="Validar Colegiado"/>
         </>
      )

   }
}

export default AsistenteAdministrativo;