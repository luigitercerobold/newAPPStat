
import React from "react";
import {
   Text, StyleSheet

} from 'react-native';
import StatFont from '../../../Lib/Component/StatFont'


function Pendiente(props) {
   return (
      <StatFont style={style.text}>
         No tienes ninguna cirugia pendiente
      </StatFont>
   )
}
export default Pendiente;

const style = StyleSheet.create({
   text: {
      color: "blue"
   }
})