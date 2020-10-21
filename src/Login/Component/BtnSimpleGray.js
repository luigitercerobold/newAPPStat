import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Color from 'newAPPStat/src/Lib/Colors'
import StatFont from '../../Lib/Component/StatFont'
const BtnSimple = ({onPress,title}) => {

   return (
      <Pressable 
         onPress={onPress}
         style={styles.Btn}>
         <StatFont style={styles.Text}>{title}</StatFont>
      </Pressable>

   )
}

export default BtnSimple;
const styles = StyleSheet.create(
   {
      Btn:{
         
         padding:20,
         paddingHorizontal:40
      },
      Text:{
         color:Color.grayLetter
      }
   }
)
