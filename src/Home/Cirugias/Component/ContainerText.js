import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from 'newAPPStat/src/Lib/Colors'


const ContainerText = (props) => {

   return(
      <Text style = {styles.text}>
         {props.children}
      </Text>
   )
}

export default ContainerText

const styles  = StyleSheet.create (
   {
      text:{
         
         fontSize:25,
         color:Colors.grayLetter
      
      }
   }

)