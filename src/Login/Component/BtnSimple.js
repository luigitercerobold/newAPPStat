import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Color from 'newAPPStat/src/Lib/Colors'

const BtnSimple = ({onPress,title}) => {

   return (
      <Pressable 
         onPress={onPress}
         style={({ pressed }) => [
            {
              backgroundColor: pressed
                ? Color.bluePressed
                : Color.blue,
            },
            styles.Btn
          ]}>
         <Text style={styles.Text}>{title}</Text>
      </Pressable>

   )
}

export default BtnSimple;
const styles = StyleSheet.create(
   {
      Btn:{
        
         padding:10,
         paddingHorizontal:40
      },
      Text:{
         color:Color.white
      }
   }
)
