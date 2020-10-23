import React, {useState} from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import Color from 'newAPPStat/src/Lib/Colors'
import StatFont from '../../Lib/Component/StatFont'

const BtnSimple = ({onPress,title,onePress=true,style}) => {

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
            styles.Btn,
            style
          ]}>
         <StatFont style={styles.Text}>{title}</StatFont>
      </Pressable>

   )
}

export default BtnSimple;
const styles = StyleSheet.create(
   {
      Btn:{
         maxWidth:200,
         padding:10,
         paddingHorizontal:30
      },
      Text:{
         color:Color.white
      }
   }
)
