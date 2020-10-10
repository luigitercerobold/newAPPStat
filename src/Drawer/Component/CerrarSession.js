import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TextMenu from './TextMenu'
const CerrarSession = () => {

   return (

      <View style={styles.container}>

        
         <TextMenu title="Cerrar sesión" />

      </View>
   )

}

export default CerrarSession

const styles = StyleSheet.create(
   {

      container: {
         flex: 1,
         justifyContent:'flex-end'
      },
      img: {
         width: 100,
         height: 100,


      }
   }
)
