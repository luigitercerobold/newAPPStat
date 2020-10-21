import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Color from 'newAPPStat/src/Lib/Colors'
import StatFont from '../../Lib/Component/StatFont'
const BtnSimple = ({onPress,title}) => {

   return (
      <Pressable 
         onPress={onPress}
         style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? 'rgb(210, 230, 255)'
                : 'white'
            },
            styles.Btn
          ]}>
         <StatFont style={styles.Text}>{title}</StatFont>
      </Pressable>

   )
}

export default BtnSimple;
const styles = StyleSheet.create(
   {
      Btn:{
         
         padding:10,
         paddingHorizontal:50,
         
      },
      Text:{
         color:Color.blue
      }
   }
)
