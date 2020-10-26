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
      newFormat: []
   }

   componentDidMount() {
      this.getCirugias()

   }

   getCirugias = async () => {
      this.setState({ loading: true })
      const cirugia = await http.instance.get(urlStat.getCirugias, http.instance.getToken())

      this.customDatesStyles(cirugia.data)
      this.setState({ cirugia: cirugia.data, loading: false })
      return cirugia.data
   }

   customDatesStyles = async (dates) => {

      let customDatesStyles = [];

      customDatesStyles = dates.map((element) => {

         let date = moment.utc(element.date).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');

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

   onDateChange =(date, type)=> {

      this.props.navigation.navigate('VerCirugia',{date:date})
      
   }  

   render() {

      return (
         <>
            <Title
               title="Cirugías"
            />
            {this.state.loading ? <ActivityIndicatorStat />

               : <>

                  <Calendar
                     customDatesStyles={this.state.newFormat}
                     onDateChange= {this.onDateChange}
                  />

               </>

            }

         </>
      )
   }


}

export default Calendar2