import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const Scroll = (props) =>{
   return (

      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
         {props.children}
      </ScrollView>
   )

}
export default Scroll