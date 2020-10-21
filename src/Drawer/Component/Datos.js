import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import User from '../../Lib/user'
import Color from '../../Lib/Colors'
import StatFont from '../../Lib/Component/StatFont'
const Datos = ({ name, email }) => {

   return (
      <View style = {styles.container}>
         <StatFont style = {styles.name}>{name}</StatFont>
         <StatFont>{email}</StatFont>
      </View>
   )

}

export default Datos

const styles = StyleSheet.create(
   {
      container:{
         paddingHorizontal:10
      },
      name: {
         color: Color.blue,
         fontSize: 20
      }
   }
)
