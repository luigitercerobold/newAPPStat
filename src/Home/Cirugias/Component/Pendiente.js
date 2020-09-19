
import React from "react";
import {
    Text,StyleSheet
   
}from 'react-native';



function Pendiente (props) {
   return(
          <Text style={style.text}>
            No tienes ninguna cirugia pendiente
         </Text>
   )
}
export default Pendiente;

const style = StyleSheet.create({
   text:{
      color:"blue"
   }
})