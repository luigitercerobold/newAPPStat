import React from 'react'
import { Component } from 'react'
import { Calendar } from '../../../../Lib/Component/CalendarBy'
import http from '../../../../Lib/http'
import urlStat from '../../../../Lib/url'
import Colors from '../../../../Lib/Colors'
import { ActivityIndicator, Text } from 'react-native'
import moment from 'moment'
import { cos } from 'react-native-reanimated'
import { FlatList } from 'react-native-gesture-handler'
import TextBox from '../../../../Login/Component/TextBox'
import ActivityIndicatorStat from '../../../../Lib/Component/ActivitiIndicator'
import Title from '../../../../Lib/Title'
class Calendar2 extends Component {

   state = {
      cirugia: [{ name: "" }],
      loading: false,
      finish: false,
      newFormat: [],
      minDate:""
   }

   componentDidMount() {
      this.getCirugias()

   }

   getCirugias = async () => {

      const today = new Date()
      
      this.setState({ loading: true })

      const body = JSON.stringify({
         "minDate":`${today.getFullYear()}-${today.getMonth()+1}-1`,
         "maxDate":`${today.getFullYear()}-${today.getMonth()+2}-1`

      })

      const cirugia = await http.instance.post(urlStat.getInvitation,body ,http.instance.getToken())

      this.customDatesStyles(cirugia.data)
      this.setState({ cirugia: cirugia.data, loading: false,minDate:today })

      console.log(cirugia)
      return cirugia.data
   }

   customDatesStyles = async (dates) => {

      let customDatesStyles = [];

      customDatesStyles = dates.map((element) => {

         let date = moment.utc(element.scheduleData.date).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
         console.log(date)
         return {
            date: date,
            style: { backgroundColor: Colors.blue },
            textStyle: { color: Colors.white }, // sets the font color
            containerStyle: []
         }
      })

      this.setState({
         newFormat: customDatesStyles,
      })

      return customDatesStyles
   }

   onDateChange = (date, type) => {

      const dates = new Date(date)
      console.log(dates.getDate())
     this.props.navigation.navigate('VerCirugia', { date:new Date(date) })

   }

   onMonthChange = async (date) => {
      const today = new Date(date)
   
      this.setState({ minDate:today, loading: true })

      console.log(`${today.getFullYear()}-${today.getMonth+1}-1`)
      const body = JSON.stringify({
         "minDate":`${today.getFullYear()}-${today.getMonth()+1}-1`,
         "maxDate":`${today.getFullYear()}-${today.getMonth()+2}-1`

      })

      const cirugia = await http.instance.post(urlStat.getInvitation,body ,http.instance.getToken())

      this.customDatesStyles(cirugia.data)
      this.setState({ cirugia: cirugia.data, loading: false })

      console.log(cirugia)
      return cirugia.data

   }

 

   render() {
      const {minDate} = this.state
      return (
         <>
            <Title
               title="Cirugías"
            />
            {this.state.loading ? <ActivityIndicatorStat />

               : <>

                  <Calendar
                     customDatesStyles={this.state.newFormat}
                     onDateChange={this.onDateChange}
                     onMonthChange ={this.onMonthChange}
                     
                     initialDate={minDate}
                  
                  />

               </>

            }

         </>
      )
   }


}

export default Calendar2