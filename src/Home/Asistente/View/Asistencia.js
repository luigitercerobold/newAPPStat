import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, FlatList, Text } from 'react-native'
import Title from '../../../Lib/Title'
import Color from '../../../Lib/Colors'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url'
import ListOfDoctors from '../Component/ListOfDoctors'
import BtnSimple from '../../../Lib/Component/BotonSiemple'
import Tab from '../Component/Tabs'
import AsitenciaComponent from '../Component/Asistencia'
export class Asistencia extends Component {
   state = {
      loading: false,
      doctor: [],
      anestesia: [],
      allDoctor: [],
      reload: false,
      pro: []

   }


   componentDidUpdate() {
      console.log("actualizar1")
      if (this.props.route.params) {


         if (this.props.route.params.update === true) {
            console.log("actualizar2", this.props.route.params.update)
            this.setState({ reload: !this.state.reload, pro: this.props.route.params.contact, loading: true, })
            this.props.route.params.update = false
            this.setState({ loading: false })
         }
      }
   }
   componentDidMount() {
      this.getDoctor()
   }

   getDoctor = async () => {
      this.setState({ loading: true })
      const doctor = await Http.instance.get(urlStat.getDrs, Http.instance.getToken())

      const doctors = await Http.instance.get(urlStat.getContacts, Http.instance.getToken())
      this.setState({ allDoctor: doctors.data })
      this.updateDoctors()
      return doctor
   }

   updateDoctors() {
      this.filtrarDoctores(this.state.allDoctor, 1)
      this.filtrarDoctores(this.state.allDoctor, 2)
   }

   filtrarDoctores = (doctor, query) => {
      const myDoctor = doctor.filter(doctor => {
         if (doctor.role === query) {
            return doctor
         }
      })
      if (query == 1) {
         this.setState({ doctor: myDoctor, loading: false })
      } else {

         this.setState({ anestesia: myDoctor, loading: false })
      }

   }



   onPress = (role) => {
      this.setState({ reload: true })
      const array = this.elegirDoctor(role)
      this.goto(role, array)
   }

   goto(role, array) {
      console.log(role, array)
      this.props.navigation.navigate('BuscarContacto', { role: role, contact: array, allDoctor: this.state.allDoctor })

   }

   elegirDoctor = (role) => {
      if (role == 1) {
         return this.state.doctor
      } else {
         return this.state.anestesia

      }
   }

   cancelDoctors = (item) => {
     
      const allDoctor = this.state.allDoctor.filter(function (elemet) {
         return elemet.id !== item.id;
      });
      const anestesia = this.state.anestesia.filter(function (elemet) {
         return elemet.id !== item.id;
      });
      const doctor = this.state.doctor.filter(function (elemet) {
         return elemet.id !== item.id;
      });

      this.setState({
         allDoctor,
         anestesia,
         doctor,
      
      })
   }
   

   component1 = (loading, component, item) => {

      return (
         <>
            <ListOfDoctors cancel={this.cancelDoctors} onPress={this.handlePress.bind(this)} loading={loading} item={item} />
            <View style={{ padding: 15 }}>
               <View style={{ alignItems: 'center' }}>
                  <BtnSimple
                     title={'Agregar nuevo'}
                     onPress={() => this.onPress(component)}
                  />
               </View>

            </View>
         </>
      )
   }


   handlePress(item) {

   }

   render() {
      const { loading, doctor, anestesia } = this.state
      return (
         <AsitenciaComponent
            component1={this.component1}
            pressAcept={() => console.log('aceptar ')}
            doctor={doctor}
            anestesia={anestesia}
            loading={loading}
            aceptButton={false}
         />
      )
   }
}

export default Asistencia

const styles = StyleSheet.create(
   {
      container: {
         flex: 1
      },
      listCenter: {
         flex: 1,
         alignItems: 'center'
      }
   },

)