import React, { Component } from 'react'
import { Text, View, Pressable, ActivityIndicator } from 'react-native'
import Title from '../../../Lib/Title'
import Navigate from '../Component/NavigateCirugia'
import { getActiveChildNavigationOptions } from 'react-navigation'
import http from 'newAPPStat/src/Lib/http'
import url from 'newAPPStat/src/Lib/url'
import init from 'newAPPStat/src/Lib/init'
import ListButton from '../Component/ListButton'
import { ScrollView } from 'react-native-gesture-handler'
import Header from '../../../Home/src/Component/Header'
import Status from '../../../Lib/Component/Status'
class AgendarCirugia extends Component {
   state = {
      fontLoaded: false,
      date: 'd',
      hour: 'h',
      timer: 't',
      token: '',
      loading:false,
      message:'Bad',
      isOk:true,
      loading2:false
      
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
 
   goToAsistent() {
      
      this.props.navigation.navigate('AgregarAsistente',
      {
         allDoctor:  this.props.route.params?.allDoctor,
         anestesia:  this.props.route.params?.anestesia,
         doctor:  this.props.route.params?.doctor
      }
   )
   }
   goToProducto() {
      this.props.navigation.navigate('AgendarProducto',{products: this.props.route.params?.producto})
   }

   changeDate(date, hour, timer) {
    
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
      if (this.props.route.params?.producto.length>0){
         return this.props.route.params?.producto[0].name
      }
      return "sin datos"
     
   }


   confirmar = async () => {
  
     
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
         guests: [
            {
               id: 1,
               role: 1,
               status: 0,
               description: "",
               response: ""
            },]
      });
   
      this.setState({loading:true,loading2:true})
      const data =  await http.instance.post(url.saveCirugia, body, http.instance.getToken())
      this.setState({message:data.message})
      this.setState({loading2:false})
      if (this.state.message === 'Se ha creado la cita correctamente.' ){
         this.setState({isOk:true})
         
      }else {
         this.setState({isOk:false})
         
      }
      
   }

   handlePress = () =>{
         if (this.state.message === 'Se ha creado la cita correctamente.'){
          
            this.setState({isOk:true})
            this.gotoEstado()
         }else {
            this.setState({isOk:false})
            this.goToBack()
         }
     
   }
   gotoEstado = () => {
      this.props.navigation.navigate('EstadoCirugia')
      this.setState({isOk:true})
   }
   goToBack = ()=> {
      this.setState({loading:false})
   }

   render() {
      const {loading} = this.state
      return (
         <View style = {{flex:1}}>
            {loading

            ? <Status
               title = {this.state.message}
               onPress ={this.handlePress}
               isOk = {this.state.isOk}
               loading = {this.state.loading2}
            />
            :<ScrollView>
            <Title title="Agendar Cirugía" />
         
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
               text1={this.props.route.params?.allDoctor[0].name}
               action="Añadir Asistencia"
               delate={false}
            ></Navigate>
            <Navigate
               img={require("newAPPStat/assets/Icon/1x/menu-productos.png")}
               goToPage={() => this.goToProducto()}
               text1={this.isProduct()}
               text2="..."
               action="Añadir Productos"
               delate={false}
            ></Navigate>
            <ListButton title="Aceptar" onPress={this.confirmar}/>
            </ScrollView>
            }
         </View>
      )   
   }
}
export default AgendarCirugia;

