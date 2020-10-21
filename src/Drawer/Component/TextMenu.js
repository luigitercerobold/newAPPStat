import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Color from '../../Lib/Colors'
import StatFont from '../../Lib/Component/StatFont'
const TextMenu = ({ title, onPress }) => {

   return (
      <Pressable
         onPress = {onPress}
         style={({ pressed }) => [
            
             pressed
                ? styles.containerPressable
                : styles.container,
            ,
            styles.container
          ]}
      >
         
            <StatFont style = {styles.text}>{title}</StatFont>
       
      </Pressable>


   )

}

export default TextMenu

const styles = StyleSheet.create(
   {

      container: {
      
         height:40,
         justifyContent:'center',
         flex:1
      },
      containerPressable:{
         backgroundColor:Color.gray,
         
         
      },
      text: {
         paddingHorizontal:20,
         fontSize:15
      }
      
   }
)
