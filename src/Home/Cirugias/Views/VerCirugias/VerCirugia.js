import React from 'react';
import { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import Title from '../../../../Lib/Title'
import BtnProximaCirugia from '../../Component/BtnProximaCirugia'
import Line from '../../Component/Line';
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import Navigate from '../../Component/NavigateCirugia'
import color from '../../../../Lib/Colors'
import ActivityIndicatorStat from '../../../../Lib/Component/ActivitiIndicator'
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

   render() {
      const { cirugia, loading } = this.state

      return (
         <>
            <Title title="Cirugías" />

            { loading ?
               <ActivityIndicatorStat color={color.blue} size="large" />
               :

               <FlatList
                  data={cirugia}
                  renderItem={({ item }) =>
                     <Navigate
                        key={item?.invitationData?.id}
                        img={require("newAPPStat/assets/Icon/1x/menu-cirugas.png")}
                        goToPage={() => this.goTo(item)}
                        text1={"Operación de " + item?.scheduleData?.name}
                        text2={item?.scheduleData?.hospital?.name}
                        text3={item?.scheduleData?.date}
                        action="Agendar cirugía"
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