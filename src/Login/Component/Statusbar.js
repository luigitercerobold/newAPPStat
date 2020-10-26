import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../Lib/Colors'

const StatusBar = ({ step, journaly = 10 }) => {
   const completed = (poss) => {
      if (step >= poss) {
         return styles.steptComplete

      } else {
         return styles.steptNoComplete
      }
   }


   return (
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
         <View style={styles.container}>
            <View style={completed(1)}></View>
            <View style={completed(2)}></View>
            <View style={completed(3)}></View>
            <View style={completed(4)}></View>
            <View style={completed(5)}></View>
         </View>

      </View>

   )
}

export default StatusBar

const styles = StyleSheet.create(
   {
      container: {

         height: 20,
         width: '100%',
         maxWidth:500,

         flexDirection: "row",
         backgroundColor: Colors.gray,
         marginVertical: 30
      },
      steptComplete: {
         backgroundColor: Colors.blue,
         flex: 1,
      },
      steptNoComplete: {
         backgroundColor: Colors.gray,
         flex: 1,
      }


   }


)