import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const TextMenu = ({title}) => {

   return (
      <View style ={styles.container}>
         <Text>{title}</Text>
         
      </View>

   )

}

export default TextMenu

const styles = StyleSheet.create(
   {

      container:{
         flex:0.5
      }, 
      img:{
         width:100,
         height:100,
         
         
      }
   }
)
