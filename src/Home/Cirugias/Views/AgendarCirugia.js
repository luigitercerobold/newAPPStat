import React, { Component } from 'react'
import { Text, View, Pressable } from 'react-native'
import Title from '../../../Lib/Title'
import Navigate from '../Component/NavigateCirugia'
import { getActiveChildNavigationOptions } from 'react-navigation'
import http from 'newAPPStat/src/Lib/http'
import url from 'newAPPStat/src/Lib/url'
import init from 'newAPPStat/src/Lib/init'
import ListButton from '../Component/ListButton'
import { ScrollView } from 'react-native-gesture-handler'

import Container from '../../../Login/Component/LoginComponent/ContainerCenter'
import BtnSimple from '../../../Login/Component/BtnSimple'
import ScrollCenter from '../../../Login/Component/ScrollCenter'
import PaddingVertical from '../../../Login/Component/PaddingVertical'
import Padding from '../../../Login/Component/PaddingVertical'


class AgendarCirugia extends Component {
   state = {
      fontLoaded: false,
      date: 'd',
      hour: 'h',
      timer: 't',
      token: ''
   }

   goToDate() {
      this.props.navigation.navigate('FechaYHora')
   }
   goToCuerpo() {
      this.props.navigation.navigate('Cuerpo')
   }
   goToHospital() {
      this.props.navigation.navigate('Hospital',)
   }
   goToProducto() {

   }
   goToAsistent() {
      this.props.navigation.navigate('Asistente',)
   }
   goToProducto() {
      this.props.navigation.navigate('AgendarProducto')
   }

   changeDate(date, hour, timer) {
      console.log(date, hour, timer)
   }

   isHospital() {
      if (!this.props.route.params?.hospital) {
         return ""
      }
      return this.props.route.params?.hospital.name
   }
   isProduct() {
      if (!this.props.route.params?.producto) {
         return ""
      }
      return this.props.route.params?.producto[1].name
   }


   confirmar = () => {
      console.log('confirmar');
      // name, date, address, hostedBy, description, hospital, duration
      // name parte del cuerpo
      // date hora y fecha
      // direccion del hospital
      // HostedBy: iddel creador
      // decriptcion: procedimiento
      // id del hospital,
      // duracion de de es
      // orders: [idprovedero, listado ]
      // guests: id, rol, description, respuesta

      const body = JSON.stringify({

         name: this.props.route.params?.bodyPart,
         date: this.props.route.params?.fullStart,
         address: this.props.route.params?.hospital.address,
         hostedBy: http.instance.getId(),
         description: this.props.route.params?.procedimiento,
         hospital: this.props.route.params?.hospital.id,
         duration: {
            hours: this.props.route.params?.fullTime.getHours(),
            minutes: this.props.route.params?.fullTime.getMinutes(),
         },
         orders: this.props.route.params?.pro,
         guests: [
            {
               id: 1,
               role: 1,
               status: 0,
               description: "",
               response: ""
            },]
      });
      console.log(body)
      http.instance.post(url.saveCirugia, body, http.instance.getToken())
      this.props.navigation.navigate('EstadoCirugia', { body: body })

   }

   render() {

      return (
         <ScrollView>
            <Title title="Agendar Cirugía" />
         
               <Navigate
                  img={require("newAPPStat/assets/Icon/1x/menu-cirugas.png")}
                  goToPage={() => this.goToDate()}
                  text1={this.props.route.params?.date}
                  text2={this.props.route.params?.timer}
                  // text3={}
                  action="Agendar cirugía"
               ></Navigate>
               <Navigate
                  img={require("newAPPStat/assets/Icon/1x/cirugia_agendada.png")}
                  goToPage={() => this.goToCuerpo()}
                  text1={this.props.route.params?.bodyPart}
                  text2={this.props.route.params?.procedimiento}

                  action="Añadir cirugía"
               ></Navigate>
               <Navigate
                  img={require("newAPPStat/assets/Icon/1x/hospital-agregado.png")}
                  goToPage={() => this.goToHospital()}
                  text1={this.isHospital()}

                  action="Añadir Hopital"
               ></Navigate>
               <Navigate
                  img={require("newAPPStat/assets/Icon/1x/asistencia-agregada.png")}
                  goToPage={() => this.goToAsistent()}
                  text1={this.props.route.params?.asistente}
                  action="Añadir Asistencia"
               ></Navigate>
               <Navigate
                  img={require("newAPPStat/assets/Icon/1x/menu-productos.png")}
                  goToPage={() => this.goToProducto()}
                  text1={this.isProduct()}
                  text2="..."
                  action="Añadir Productos"
               ></Navigate>
               <ListButton title="Acpetar" onPress={this.confirmar}/>
                
              
            
         </ScrollView>
      )
   }
}
export default AgendarCirugia;

