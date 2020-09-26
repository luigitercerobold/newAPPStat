import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Color from 'newAPPStat/src/Lib/Colors'

const BtnSimple = ({onPress,title}) => {

   return (
      <Pressable 
         onPress={onPress}
         style={styles.Btn}>
         <Text style={styles.Text}>{title}</Text>
      </Pressable>

   )
}

export default BtnSimple;
const styles = StyleSheet.create(
   {
      Btn:{
         
         padding:50,
         paddingHorizontal:40
      },
      Text:{
         color:Color.blue
      }
   }
)
