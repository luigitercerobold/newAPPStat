import React, { Component } from 'react'
import { Text, View, Pressable, ActivityIndicator } from 'react-native'
import Title from '../../../Lib/Title'
import Navigate from '../Component/NavigateCirugia'
import { getActiveChildNavigationOptions } from 'react-navigation'
import http from '../../../Lib/http'
import url from '../../../Lib/url'
import init from 'newAPPStat/src/Lib/init'
import ListButton from '../Component/ListButton'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../../Home/src/Component/Header'
import Status from '../../../Lib/Component/Status'
import CirugiaContext, { Context } from '../Context/CirugiaContext'
class AgendarCirugia extends Component {
   state = {
      loading: false,
      message: 'Bad',
      isOk: true,
      loading2: false,
      screen: "EstadoCirugia"
   }


   componentDidMount() {

      if (this.props.route.params !== undefined) {
         if (this.props.route.params.cirugia != undefined) {
            this.cargarCirugia(this.props.route.params.cirugia)
         }

      }
   }

   cargarCirugia = async (cirugia) => {

      this.setState({ loading2: true })

      const ciru = await http.instance.get(url.getDetails(cirugia.scheduleData.id), http.instance.getToken())

      const details = ciru.data
      // console.log("dotails", cirugia.scheduleData)

      this.llenarDoctores(details.doctorsInvited, cirugia.scheduleData.id)
      this.llenarProducto(details.scheduleProducts, cirugia.scheduleData.id)
      this.props.route.params.date = details.date
      this.props.route.params.timer = details.end
      this.props.route.params.bodyPart = details.name
      this.props.route.params.procedimiento = details.description
      this.props.route.params.hospital = details.hospital
      this.props.route.params.schedule = cirugia.scheduleData.id
      this.props.route.params.id = cirugia.scheduleData.id
      this.props.route.params.name = cirugia.scheduleData.name
      this.props.route.params.date = details.date
      this.props.route.params.address = cirugia.scheduleData.address
      this.props.route.params.description = this.props.route.params.procedimiento
      this.props.route.params.hospitalId = cirugia.scheduleData.hospital_id
      this.props.route.params.end = this.props.route.params.timer

      this.setState({ loading2: false })


   }

   llenarProducto = async (productos, schedule) => {
      let product = []
      product = productos.map((element) => {
         element.product.schedule = schedule
         return element.product
      })

      this.props.route.params.producto = product
      this.context.setProductos(product)
   }

   llenarDoctores = async (doctoresInvitados, schedule) => {

      let allDoctor = []
      let doctors = []
      let anestesista = []

      allDoctor = doctoresInvitados.map((element) => {
         element.user.role = element.role
         element.user.schedule = schedule
         element.user.invitation = element.id
         return element.user
      })

      doctors = allDoctor.filter((element) => element.role === 1)

      anestesista = allDoctor.filter((element) => element.role === 2)


      this.props.route.params.allDoctor = allDoctor
      this.props.route.params.anestesia = anestesista
      this.props.route.params.doctor = doctors
      this.context.setAsistentes(allDoctor)

   }

   editCirugia = () => {
      return {
         schedule: this.props.route.params?.schedule,
         schedule: this.props.route.params.schedule,
         id: this.props.route.params.id,
         name: this.props.route.params.name,
         date: this.props.route.params.date,
         address: this.props.route.params.address,
         description: this.props.route.params.description,
         hospitalId: this.props.route.params.hospitalId,
         end: this.props.route.params.end
      }

   }
   goToDate() {
      this.props.navigation.navigate('Calendar', this.editCirugia())
   }
   goToCuerpo() {
      this.props.navigation.navigate('Cuerpo', this.editCirugia())
   }
   goToHospital() {
      this.props.navigation.navigate('Hospital', this.editCirugia())
   }
   goToAsistent() {

      this.props.navigation.navigate('AgregarAsistente',
         {
            allDoctor: this.props.route.params?.allDoctor,
            anestesia: this.props.route.params?.anestesia,
            doctor: this.props.route.params?.doctor,
            schedule: this.props.route.params?.schedule
         }
      )
   }

   goToProducto() {
      this.props.navigation.navigate('AgendarProducto',
         {
            products: this.props.route.params?.producto, schedule: this.props.route.params?.schedule
         }
      )
   }

   isHospital() {
      if (!this.props.route.params?.hospital) {
         return ""
      }
      return this.props.route.params?.hospital.name
   }

   isAsist(asistentes) {

      if (!this.props.route.params?.allDoctor) {
         return ""
      }
      if (asistentes.length > 0) {

         return asistentes[0].name
      }
      return "sin datos"

   }

   isProduct(productos) {


      if (!this.props.route.params?.producto) {
         return ""
      }
      if (productos.length > 0) {

         return productos[0].name
      }

      return "sin datos"
   }

   createBody() {

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
         orders: this.props.route.params?.producto,
         guests: this.props.route.params?.allDoctor
      });
      return body
   }

   confirmar = () => {
      if (this.state.screen === "EstadoCirugia") {
         this.crearCirugia()

      } else {
         this.editarCirugia()
      }
   }

   editarCirugia = async () => {


   }

   crearCirugia = async () => {
      const body = this.createBody()

      this.setState({ loading: true, loading2: true })

      const data = await this.cargarABaseDeDatos(body)

      this.setState({ message: data.message })
      this.setState({ loading2: false })

      this.goToFromMessage(this.state.message)

   }

   goToFromMessage(message) {
      if (message === 'Se ha creado la cita correctamente.') {
         this.setState({ isOk: true })
      } else {
         this.setState({ isOk: false })
      }

   }

   cargarABaseDeDatos = async (body) => {
      return await http.instance.post(url.saveCirugia, body, http.instance.getToken())
   }

   handlePress = () => {
      if (this.state.message === 'Se ha creado la cita correctamente.') {

         this.setState({ isOk: true })
         this.gotoEstado()
      } else {
         this.setState({ isOk: false })
         this.goToBack()
      }

   }
   gotoEstado = () => {
      this.props.navigation.navigate(this.state.screen)
      this.setState({ isOk: true })
   }

   goToBack = () => {
      this.setState({ loading: false })
   }

   render() {
      const { loading } = this.state
      return (
         <View style={{ flex: 1 }}>
            {loading

               ? <Status
                  title={this.state.message}
                  onPress={this.handlePress}
                  isOk={this.state.isOk}
                  loading={this.state.loading2}
                  eventStart={this.props.route.params.fullStart}
                  eventFinish={this.props.route.params.fullTime}
                  titleCalendar={this.props.route.params?.procedimiento}
                  hospitalName={this.isHospital()}

               />
               :
               <CirugiaContext.Consumer>
                  {
                     ({ asistentes, productos, setAsistentes, saludo, getProductos }) => {
                        return (
                           <ScrollView>
                              <Title title={"Agendar Cirugía"} />

                              <Navigate
                                 img={require("newAPPStat/assets/Icon/1x/menu-cirugas.png")}
                                 goToPage={() => this.goToDate()}
                                 text1={this.props.route.params?.date}
                                 text2={this.props.route.params?.timer}
                                 // text3={}
                                 action="Agendar cirugía"
                                 delate={false}
                              ></Navigate>
                              <Navigate
                                 img={require("newAPPStat/assets/Icon/1x/cirugia_agendada.png")}
                                 goToPage={() => this.goToCuerpo()}
                                 text1={this.props.route.params?.bodyPart}
                                 text2={this.props.route.params?.procedimiento}
                                 action="Añadir cirugía"
                                 delate={false}
                              ></Navigate>
                              <Navigate
                                 img={require("newAPPStat/assets/Icon/1x/hospital-agregado.png")}
                                 goToPage={() => this.goToHospital()}
                                 text1={this.isHospital()}

                                 action="Añadir Hopital"
                                 delate={false}
                              ></Navigate>
                              <Navigate
                                 img={require("newAPPStat/assets/Icon/1x/asistencia-agregada.png")}
                                 goToPage={() => this.goToAsistent()}
                                 text1={this.isAsist(asistentes)}
                                 action="Añadir Asistencia"
                                 delate={false}
                              ></Navigate>
                              <Navigate
                                 img={require("newAPPStat/assets/Icon/1x/menu-productos.png")}
                                 goToPage={() => this.goToProducto()}
                                 text1={this.isProduct(productos)}
                                 text2="..."
                                 action="Añadir Productos"
                                 delate={false}
                              ></Navigate>
                              <ListButton title="Aceptar" onPress={this.confirmar} />
                           </ScrollView>
                        )
                     }
                  }
               </CirugiaContext.Consumer>
            }
         </View>
      )
   }
}

AgendarCirugia.contextType = Context;
export default AgendarCirugia;

