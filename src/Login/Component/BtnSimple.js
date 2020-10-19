import React, {useState} from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Color from 'newAPPStat/src/Lib/Colors'


const BtnSimple = ({onPress,title,onePress=true}) => {

   const [pressOne, setPressOne] = useState(true)
   const onlyOnePress = () => {
      onPress()
      if (pressOne) {
        
      }
      
      if (onePress === true) {
         setPressOne(false)
      }


   }
   return (
      <Pressable 
         onPress={onlyOnePress}
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
