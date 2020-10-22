import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Tabs from '../../../../Asistente/Component/Tabs'
import Asistencia from '../../../../Asistente/View/Asistencia'
class AgregarDeContacto extends Asistencia {
   handlePress(item) {

      this.props.route.params.contact.push({
         contact: item
      })

      this.props.route.params.allDoctor.push({
         id: item.id,
         role: this.props.route.params.role,
         status: 0,
         description: "",
         response: "",
         name: item.name
      })

      this.props.navigation.navigate('AgregarAsistente', { update: true, contact: this.props.route.params.contact, allDoctor: this.props.route.params.allDoctor })
   }

   goto(role, array) {

      this.props.navigation.navigate('AgregarAsistenteDeStat', { role: this.props.route.params.role, contact: this.props.route.params.contact, allDoctor: this.props.route.params.allDoctor })

   }
}

export default AgregarDeContacto