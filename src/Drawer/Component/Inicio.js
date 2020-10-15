import React from 'react'
import {Image, StyleSheet, Text, View} from 'react-native'
import TextMenu from './TextMenu'
const Inicio = ({goTo}) => {

   return (
      <View style ={styles.container}>
           <TextMenu title="Inicio" onPress={goTo} />
         
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