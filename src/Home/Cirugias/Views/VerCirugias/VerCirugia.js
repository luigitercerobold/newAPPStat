import React from 'react';
import { Component } from 'react';
import { View, FlatList, StyleSheet,Alert } from 'react-native';
import Title from '../../../../Lib/Title'
import BtnProximaCirugia from '../../Component/BtnProximaCirugia'
import Line from '../../Component/Line';
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import Navigate from '../../Component/NavigateCirugia'
import color from '../../../../Lib/Colors'
import ActivityIndicatorStat from '../../../../Lib/Component/ActivitiIndicator'
import EmptyData  from '../../../../Lib/Component/EmptyData'
import Http from '../../../../Lib/http';
import User from '../../../../Lib/user';
class VerCirugia extends Component {
   state = {
      cirugia: [{ name: "" }],
      loading: false
   }

   componentDidMount() {
      this.getCirugias()
   }
   getCirugias = async () => {
      const today = this.props.route.params.date

      const nextDay = new Date(this.props.route.params.date)
      nextDay.setDate(nextDay.getDate() + 1)
      const body = JSON.stringify({
         "minDate": `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`,
         "maxDate": `${nextDay.getFullYear()}-${nextDay.getMonth() + 1}-${nextDay.getDate()}`

      })
      this.setState({ loading: true })
      const cirugia = await http.instance.post(urlStat.getInvitation, body, http.instance.getToken())

      this.setState({ cirugia: cirugia.data, loading: false })
      console.log(this.state.cirugia)
      return cirugia
   }
   onPress = () => {
      this.props.navigation.navigate('ElegirBody')
   }
   goToAgandarCirugia = () => {
      this.props.navigation.navigate('AgendarCirugia', { producto: this.state.products })
   }

   goTo = (item) => {
      
      this.props.navigation.navigate('AgendarCirugia', { cirugia: item })
   }
   deleting = (item) => {


      Alert.alert(
         "Usuario",
         "Mensaje de Stat: " + "Se borraran la Cirugía ",
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            { text: "OK", onPress: () => this.borrar(item) }
         ],
         { cancelable: false }
      )
   
      
   }

   borrar = async (item)=> {
      console.log(item)

      const req = await Http.instance.deleting(urlStat.deleteSchedule(item.scheduleData?.id),Http.instance.getToken())
      console.log(req)
      const allCirugia = this.state.cirugia
      const cirugia = allCirugia.filter(element => {
         
         return element.scheduleData?.id !== item.scheduleData?.id

      })
      this.setState({
         cirugia
      })
   }
   canEdit = (item)=> {
      User.instance.user.id 
      console.log("hola",item?.scheduleData?.hostedBy ,User.instance.user.id)
      if(item?.scheduleData?.hostedBy === User.instance.user.id ){
         return true
      }
      return false
     
   }

   render() {
      const { cirugia, loading } = this.state

      return (
         <>
            <Title title="Cirugía Agendadas" />

            { loading ?
               <ActivityIndicatorStat color={color.blue} size="large" />
               :

               <FlatList
               ListEmptyComponent={() => <EmptyData />}
                  data={cirugia}
                  renderItem={({ item }) =>
                     <Navigate
                        key={item?.scheduleData?.id}
                        img={require("newAPPStat/assets/Icon/1x/menu-cirugas.png")}
                        goToPage={() => this.goTo(item)}
                        text1={"Operación de " + item?.scheduleData?.name}
                        text2={item?.scheduleData?.hospital?.name}
                        text3={item?.scheduleData?.date}
                        action="Agendar cirugía"
                        deleting ={ () =>this.deleting (item)}
                        edit = {this.canEdit(item)}
                        delate = {this.canEdit(item)}
                        view={()=>view(item)}
                     ></Navigate>}
               />
            }

         </>
      )
   }

}
export default VerCirugia;
const styles = StyleSheet.create({
   text: {
      textAlign: "center",
      fontSize: 20
   }
})