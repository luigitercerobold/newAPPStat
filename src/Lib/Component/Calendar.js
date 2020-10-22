import React, { useState } from 'react';
import {
   StyleSheet,
   Text,
   View,
   TextInput,
   TouchableOpacity
} from 'react-native';
import * as AddCalendarEvent from 'react-native-add-calendar-event';
import moment from 'moment';
import SimpleButtom from './BotonSiemple'

const TIME_NOW_IN_UTC = moment.utc();
const Calendar = ({eventStart,eventFinish,title,description}) => {

   const [eventTitle, setEventTitle] = useState('Default event');

   const utcDateToString = momentInUTC => {
      console.log(momentInUTC)
      let s = moment.utc(momentInUTC).format('YYYY-MM-DDTHH:mm:ss.SSS[Z]');
      
      return s;
   };

   function addEventToCalendar() {
      const eventConfig = {
         title:title,
         startDate: utcDateToString(eventStart),
         endDate: utcDateToString(eventFinish ),
         notes: description,

      };

      AddCalendarEvent.presentEventCreatingDialog(eventConfig)
         .then(eventInfo => {
            alert(JSON.stringify(eventInfo));
         })
         .catch(error => {
            alert('Error ', error);
         });
   }
   return (
    
       

         <SimpleButtom
            onPress={addEventToCalendar}
            title="Sincronizar"
         />
    
 
   )

}

export default Calendar

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f8f8f2',
      paddingTop: 60
   },
   title: {
      fontSize: 20,
      textAlign: 'center'
   },
   inputContainer: {
      marginVertical: 20
   },
   text: {
      fontSize: 16,
      color: '#000',
      marginVertical: 5
   },
   input: {
      fontSize: 14,
      marginVertical: 10,
      padding: 5,
      backgroundColor: '#ebebeb',
      borderColor: '#333',
      borderRadius: 4,
      borderWidth: 1,
      textAlign: 'center'
   },
   button: {
      alignItems: 'center',
      backgroundColor: 'purple',
      padding: 10,
      marginTop: 10,
      borderRadius: 10
   }
});