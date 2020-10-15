import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import Color from '../../Lib/Colors'
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
         
            <Text style = {styles.text}>{title}</Text>
       
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
