import React, { Component } from 'react';
import {
   StyleSheet,
   Text,
   View
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';
import Colors from '../Colors'

export const Calendar = ({ minDate, customDatesStyles, onDateChange, onMonthChange }) => {

   return (
      <View style={styles.container}>
         <CalendarPicker
            minDate={minDate}
            todayTextStyle={{ fontWeight: 'bold' }}
            todayBackgroundColor={'transparent'}
            customDatesStyles={customDatesStyles}
            // minDate={today}
            selectedDayColor={Colors.blue}
            selectedDayTextColor={Colors.white}
            startFromMonday={true}
            //allowRangeSelection={true}
            weekdays={['Lun', 'Mar', 'Miér', 'Jue', 'Vier', 'Sáb', 'Dom']}
            months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']}
            previousTitle="Anterior"
            nextTitle="Siguiente"
            onDateChange={onDateChange}
            textStyle={{
               fontFamily: 'Questrial-Regular',

            }}
            onMonthChange={onMonthChange}
         />

      </View>
   );
}

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         selectedStartDate: null,
         selectedEndDate: null,
      };
      this.onDateChange = this.onDateChange.bind(this);
   }

   onDateChange(date, type) {
      if (type === 'END_DATE') {
         this.setState({
            selectedEndDate: date,
         });
      } else {
         this.setState({
            selectedStartDate: date,
            selectedEndDate: null,
         });
      }
   }
   onMonthChange(date) {
      console.log("hola")
   }
   render() {
      const { selectedStartDate, selectedEndDate } = this.state;
      const minDate = new Date(); // Today
      const maxDate = new Date(2018, 6, 3);
      const startDate = selectedStartDate ? selectedStartDate.toString() : '';
      const endDate = selectedEndDate ? selectedEndDate.toString() : '';


      let today = moment("2020-10-1", "YYYY-MM-DD")
      console.log("today", today)
      let day = today.clone().startOf('month');
      let customDatesStyles = [];
      customDatesStyles.push({
         date: today.clone(),
         style: { backgroundColor: Colors.blue },
         textStyle: { color: Colors.white }, // sets the font color
         containerStyle: []
      })


      return (

         <>
            <Calendar

               minDate={today}
               customDatesStyles={customDatesStyles}
               onDateChange={this.onDateChange}
               onMonthChange={this.onMonthChange}
            />
            <View>
               <Text>SELECTED START DATE:{startDate}</Text>
               <Text>SELECTED END DATE:{endDate}</Text>
            </View>
         </>
      );
   }
}

const styles = StyleSheet.create({
   container: {

      // backgroundColor: '#FFFFFF',

      marginTop: 150

   },
});