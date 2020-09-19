import React from 'react';
import { Text, View,StyleSheet,Pressable } from 'react-native'
import Line from './Line'
import color from 'newAPPStat/src/Lib/Colors';

const Listitem = ({ item, onPress,activate }) => {
  const state={
      activate:false
   }
   const activated = () =>{
      if (state.activated){
         return styles.container
      }else {
         return styles.container
      }
   }
   const pressed = () => {
      console.log('presable')
      onPress();
   }

   return (
      <Pressable onPress={pressed} style={activated}>
         <Line>
            <View style={styles.containerItem}>
               <Text>{item}</Text>
            </View>
         </Line>
      </Pressable>
   );
}
export default Listitem;

const styles = StyleSheet.create(
   {
      
      activated:{
         margin:10,
         flex:1,
         backgroundColor:color.blue,
      },
      container:{
         margin:10,
         flex:1,
      },
      containerItem:{
         alignItems:'center'
      }
   }
)