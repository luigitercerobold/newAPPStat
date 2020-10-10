import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import TextMenu from './TextMenu'
const Menu = () => {

   return (
      <View style ={styles.container}>
      
       <TextMenu title="Cirugía"/>
       <TextMenu title="Asistencia"/>
       <TextMenu title="Productos"/>
         
      </View>

   )

}

export default Menu

const styles = StyleSheet.create(
   {

      container:{
         flex:1
      }, 
      img:{
         width:100,
         height:100,
         
         
      }
   }
)
