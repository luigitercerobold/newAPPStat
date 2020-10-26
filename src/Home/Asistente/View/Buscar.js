import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Text, Alert } from 'react-native'
import Title from '../../../Lib/Title'
import Color from '../../../Lib/Colors'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url'
import ListOfDoctors from '../Component/ListOfDoctors'
import BtnSimple from '../../../Lib/Component/BotonSiemple'
import Search from '../../Productos/Component/ProviderSearch'
import ActivityIndicatorStat from '../../../Lib/Component/ActivitiIndicator'
export class Buscar extends Component {
   state = {
      loading: false,
      doctor: [],
      allDoctor: [],
      query: ""
   }

   componentDidMount() {
      this.getDoctor()
   }

   getDoctor = async () => {
      this.setState({ loading: true })
      const doctor = await Http.instance.get(urlStat.getDrs, Http.instance.getToken())
      this.setState({ doctor: doctor.data, allDoctor: doctor.data, loading: false })

      return doctor
   }

   onPress = async () => {

      this.props.navigation.navigate('InvitarContacto')
   }

   handleSearch = (query) => {
      const { allDoctor } = this.state
      const providerFiltered = allDoctor.filter(doctor => {
         return doctor.name.toLowerCase().includes(query.toLowerCase())
      })
      this.setState({ doctor: providerFiltered, query: query })
   }
   ayudante = () => {

      if (this.props.route.params.role == 1) {
         return "Doctor Asitentente"
      }
      return "Anestesia"
   }
   handlePress(item) {
      this.setState({ loading: true })
      item.role = this.props.route.params.role
      
      const body = JSON.stringify({
         contactId: item.id,
         role: item.role
      })
     this.agregarUser(body, item)
     
   }
   goto() {
      this.props.navigation.navigate('Asistencia', { update: true, contact: this.props.route.params.contact })
   }

   agregarUser = async (body, item) => {
      this.setState({ loading: true })
      const req = await Http.instance.post(urlStat.addContact, body, Http.instance.getToken())
   
      
      if (req.message === "Se ha agregado el contacto exitosamente.") {
         this.props.route.params.contact.push({
            contact: item
         })
         this.goto()
      }else{
         this.alert(req.message)
      }

   }

   alert = (message) => {

      Alert.alert(
         "Usuario",
         "Mensaje de Stat: " + message,
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
         ],
         { cancelable: false }
      )
   }

   buscar = async () => {
      this.setState({ loading: true })
      const body = JSON.stringify({
         queryText: this.state.query
      })
      const req = await Http.instance.post(urlStat.searchContact, body, Http.instance.getToken())
      this.setState({ doctor: req.data, loading: false })
   }

   render() {
      const { loading, doctor } = this.state
      return (


         <View style={styles.container}>
            <Title title={this.ayudante()} />
            {
               loading? 
               
               <ActivityIndicatorStat color={Color.blue} size="large" />
             :  <View style={styles.listCenter}>
               <Search style={styles.search} onChange={this.handleSearch} />
               <View style={styles.containerButtom}>
                  <BtnSimple
                     title={'Buscar'}
                     onPress={this.buscar}
                  />
               </View>
               <ListOfDoctors onPress={this.handlePress.bind(this)} loading={loading} item={doctor} />
               <View style={styles.containerButtom}>
                  <BtnSimple
                     title={'Inivitar'}
                     onPress={this.onPress}
                  />
               </View>
            </View>
            }
            
         </View>

      )
   }
}

export default Buscar

const styles = StyleSheet.create(
   {
      container: {
         flex: 1
      },
      listCenter: {

         flex: 1,
         alignContent: 'center',
         justifyContent: 'center',
         alignItems: 'center'
      },
      containerButtom: {
         padding: 15
      }
   },

)