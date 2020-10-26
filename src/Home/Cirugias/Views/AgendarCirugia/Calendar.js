import React from 'react'
import { Component } from 'react';
import { Calendar } from '../../../../Lib/Component/CalendarBy'
import moment from 'moment'
import SingleButton from '../../../../Lib/Component/BotonSiemple'
import { View } from 'react-native';
import Title from '../../../../Lib/Title'

class Calendar2 extends Component {

   state = {
      selectedStartDate: null,
      selectedEndDate: null,
   };
   onDateChange = (date, type) => {
      this.setState({
         selectedStartDate: date,
      });

      setTimeout(() => { 
         this.props.navigation.navigate("FechaYHora", { date: this.state.selectedStartDate }) 
      }, 350);

   }

   onPress = () => {
      this.props.navigation.navigate("FechaYHora",)
   }

   render() {
      let today = moment()
      return (
         <View style={{ flex: 1 }}>
            <Title title='Agendar cirugía' ></Title>
            <View style={{ alignContent: 'center', alignItems: 'center', flex: 1 }}>
               <Calendar
                  minDate={today}
                  //customDatesStyles={customDatesStyles}
                  onDateChange={this.onDateChange}
               //onMonthChange={this.onMonthChange}
               />
               {/* <SingleButton
                  style={{margin:20}}
                  title="Continuar"
                  onPress = {this.onPress}
               /> */}
            </View>




         </View>

      )

   }

}

export default Calendar2