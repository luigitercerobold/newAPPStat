import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import User from '../../Lib/user'
import Color from '../../Lib/Colors'

const Datos = ({ name, email }) => {

   return (
      <View style = {styles.container}>
         <Text style = {styles.name}>{name}</Text>
         <Text>{email}</Text>
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
