import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import TextMenu from './TextMenu'
const Menu = ({ navigation }) => {

   return (
      <View style={styles.container}>

         <TextMenu onPress={() => navigation.navigate('Cirugia')} title="Cirugía" />
         <TextMenu onPress={() => navigation.navigate('Asistencia')} title="Asistencia" />
         <TextMenu onPress={() => navigation.navigate('IndexProduct')} title="Productos" />

      </View>

   )

}

export default Menu

const styles = StyleSheet.create(
   {

      container: {
         flex: 1
      },
      img: {
         width: 100,
         height: 100,


      }
   }
)
