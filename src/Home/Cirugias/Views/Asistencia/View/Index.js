import React, { Component } from 'react'
import { View } from 'react-native'
import Tabs from '../../../../Asistente/Component/Tabs'
import MenuAsistente from '../../../Component/NavigateAsistente'
import AddAsistencia from '../../../../Asistente/View/Asistencia'
import AsitenciaComponent from '../../../../Asistente/Component/Asistencia'
import Http from '../../../../../Lib/http'
import urlStat from '../../../../../Lib/url'
import  {Context} from '../../../Context/CirugiaContext'
class Index extends AddAsistencia {

   goto(role, array) {

      this.props.navigation.navigate('AgregarDeContacto', { 
         
         role: role, contact: array, 
         allDoctor: this.state.allDoctor,
         schedule: this.props.route.params.schedule
      
      })

   }


   componentDidMount() {
      console.log(this.props.route.params.schedule)
      if (this.props.route.params.schedule !== undefined ) {

         this.getData()

      } else {

         this.setState({
            allDoctor: this.props.route.params?.allDoctor || [],
            anestesia: this.props.route.params?.anestesia || [],
            doctor: this.props.route.params?.doctor || [],
            edit: this.props.route.params.schedule || -1
         })

      }

   }

   getData = async () => {

      const req = await Http.instance.get(urlStat.getDoctorsFromschedule(this.props.route.params.schedule), Http.instance.getToken())
      let doctoresInvitados = req.data
      let schedule = this.props.route.params.schedule

      let allDoctor = []
      let doctors = []
      let anestesista = []

      allDoctor = doctoresInvitados.map((element) => {
         element.user.role = element.role
         element.user.schedule = schedule
         element.user.invitation = element.id
         element.user.id =element.id
         return element.user
      })

      doctors = allDoctor.filter((element) => element.role === 1)

      anestesista = allDoctor.filter((element) => element.role === 2)


      this.props.route.params.allDoctor = allDoctor
      this.props.route.params.anestesia = anestesista
      this.props.route.params.doctor = doctors
      this.setState({
         allDoctor: this.props.route.params?.allDoctor || [],
         anestesia: this.props.route.params?.anestesia || [],
         doctor: this.props.route.params?.doctor || [],
         edit: this.props.route.params.schedule || -1
      })
    

   }

   enviarACirugia() {

      this.props.navigation.navigate('AgendarCirugia', {
         allDoctor: this.state.allDoctor,
         anestesia: this.state.anestesia,
         doctor: this.state.doctor

      })

   }

   isDelete() {
      return true
   }

   cancelDoctors(item) {

      const allDoctor = this.state.allDoctor.filter(function (elemet) {

         return elemet.id !== item.id;
      });

      const anestesia = this.state.anestesia.filter(function (elemet) {

         return elemet.id !== item.id;
      })

      const doctor = this.state.doctor.filter(function (elemet) {


         return elemet.id !== item.id;
      });

      if (this.state.edit != -1) {
         this.deleteOnDemand(item)

      }

      this.setState({
         allDoctor,
         anestesia,
         doctor,

      })

      this.context.setAsistentes(allDoctor)
   }


   deleteOnDemand = async (item) => {

      const req = await Http.instance.deleting(urlStat.onDemandDeleteDoctrs(item.invitation), Http.instance.getToken())

   }
   aceptButto = () => {
      if (this.state.edit != -1) {
         return false
      }
      return true
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
            aceptButton={this.aceptButto()}
         />
      )
   }

}
Index.contextType = Context
export default Index