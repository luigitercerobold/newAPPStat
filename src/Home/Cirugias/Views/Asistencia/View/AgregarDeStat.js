import React, { Component } from 'react'
import { View } from 'react-native'
import Tabs from '../../../../Asistente/Component/Tabs'
import StatContact from '../../../../Asistente/View/Buscar'
import {Context} from '../../../Context/CirugiaContext'
import Http from '../../../../../Lib/http'
import urlStat from '../../../../../Lib/url'
class AgregarDeStat extends StatContact {
   handlePress(item) {

      if (this.props.route.params.schedule) {

         this.OnDemandChange(this.props.route.params.schedule, this.props.route.params.role, item.id, item)
      
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
         name: item.name,
         invitation:item.invitation
      })
      this.context.setAsistentes(this.props.route.params.allDoctor)
      this.props.navigation.navigate('AgregarAsistente', { update: true, contact: this.props.route.params.contact, allDoctor: this.props.route.params.allDoctor })
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
  
      item.id =req.data.id
      item.invitation=req.data.id
      this.setState({
         loading:false
      })
      this.addContact(item)
      
   }

 
}
AgregarDeStat.contextType = Context
export default AgregarDeStat


