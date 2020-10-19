import React, { Component } from 'react'
import { View } from 'react-native'
import Tabs from '../../../../Asistente/Component/Tabs'
import StatContact from '../../../../Asistente/View/Buscar'
class AgregarDeStat extends StatContact {
   handlePress(item) {
      console.log(item)
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
      console.log(this.props.route.params.contact)

      this.props.navigation.navigate('AgregarAsistente', {
         update: true,
         contact: this.props.route.params.contact,
         allDoctor: this.props.route.params.allDoctor
      })
   }

}

export default AgregarDeStat