import React from 'react'
import { View, StyleSheet } from 'react-native'
import Colors from '../../Lib/Colors'
const LineSelect = ({ line, imaginaryLine, btnHeigh, radioPunto, revese, btn }) => {

   const lines = () => {
      return (
         <View >
            <View style={[styles.line, { height: btnHeigh / 2, width: line }]}>

            </View>
            <View style={[styles.line2, { width: line }]}>

            </View>
         </View>
      )
   }

   const point = () => {
      return (
         <View style={styles.puntoContainer}>
            <View style={[styles.punto, {
               width: radioPunto,
               height: radioPunto
            }]}>
            </View>
         </View>
      )
   }
   const imaginary = () => {

      <View style={{ width: imaginaryLine }}></View>
   }
   if (revese) {
      return (
         <View style={styles.row}>

            {point()}
            {lines()}

         </View>



      )
   }
   return (
      <View style={styles.row}>


         {lines()}

         {point()}

      </View>



   )

}

export default LineSelect

const styles = StyleSheet.create({


   line: {

      borderBottomWidth: 1,
      borderBottomColor: Colors.blue,
      width: 1,
      // height: messure.btnHeigh / 2
   },
   line2: {
      backgroundColor: 'red',
      width: 1,

   },
   row: {
      flexDirection: 'row'
   },
   puntoContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
   },
   punto: {
      backgroundColor: Colors.blue,
      borderRadius: 100,
      //width: messure.punto,
      //height: messure.punto
   },




});
