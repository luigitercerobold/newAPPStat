import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Http from '../../../../../Lib/http'
import urlStat from '../../../../../Lib/url'
import Tabs from '../../../../Asistente/Component/Tabs'
import Asistencia from '../../../../Asistente/View/Asistencia'
class AgregarDeContacto extends Asistencia {
   handlePress(item) {

      if (this.props.route.params.schedule) {

         this.OnDemandChange(this.props.route.params.schedule, this.props.route.params.role, item.id,item)
      } else {


         this.addContact(item)

      }


   }

   addContact = (item) => {

      this.props.route.params.contact.push({
         id: item.id,
         role: this.props.route.params.role,
         status: 0,
         description: "",
         response: "",
         name: item.name,
         photo: item.photo
      })

      this.props.route.params.allDoctor.push({
         id: item.id,
         role: this.props.route.params.role,
         status: 0,
         description: "",
         response: "",
         name: item.name
      })

      this.props.navigation.navigate('AgregarAsistente', { 
         update: true, contact: this.props.route.params.contact,
          allDoctor: this.props.route.params.allDoctor ,
          schedule: this.props.route.params.schedule
         })
   }
   OnDemandChange = async (scheduleId, role, userId,item) => {
      this.setState({
         loading:true
      })
      const body = JSON.stringify({
         scheduleId,
         role,
         userId
      })
      const req = await Http.instance.post(urlStat.addDoctorOnDemand, body, Http.instance.getToken())
      console.log(req)
      this.addContact(item)
      this.setState({
         loading:false
      })
   }

   goto(role, array) {

      this.props.navigation.navigate('AgregarAsistenteDeStat', { role: this.props.route.params.role, contact: this.props.route.params.contact, allDoctor: this.props.route.params.allDoctor })

   }
   isDelete() {
      return false
   }
}

export default AgregarDeContacto