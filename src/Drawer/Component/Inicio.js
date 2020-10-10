import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'

const Inicio = () => {

   return (
      <View style ={styles.container}>
         <Text>Inicio</Text>
         
      </View>

   )

}

export default Inicio

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
