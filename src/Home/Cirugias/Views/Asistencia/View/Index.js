import React, { Component } from 'react'
import { View } from 'react-native'
import Tabs from '../../../../Asistente/Component/Tabs'
import MenuAsistente from '../../../Component/NavigateAsistente'
import AddAsistencia from '../../../../Asistente/View/Asistencia'
import AsitenciaComponent from '../../../../Asistente/Component/Asistencia'
class Index extends AddAsistencia {

   goto(role, array) {
    
      this.props.navigation.navigate('AgregarDeContacto', { role: role, contact: array, allDoctor: this.state.allDoctor })

   }


   componentDidMount() {
      this.setState({
         allDoctor: this.props.route.params?.allDoctor || [],
         anestesia: this.props.route.params?.anestesia || [],
         doctor: this.props.route.params?.doctor || []
      })
   }
   enviarACirugia() {
      this.props.navigation.navigate('AgendarCirugia', {
         allDoctor: this.state.allDoctor,
         anestesia: this.state.anestesia,
         doctor: this.state.doctor

      })
   }

   render() {
      const { loading, doctor, anestesia } = this.state
      return (
         <AsitenciaComponent
            component1={this.component1}
            pressAcept={this.enviarACirugia.bind(this)}
            doctor={doctor}
            anestesia={anestesia}
            loading={loading}
            aceptButton={true}
         />
      )
   }

}

export default Index