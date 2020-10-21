import React from 'react';
import { Text, View,StyleSheet,Pressable, Image } from 'react-native'
import Line from './Line'
import color from '../Colors';
import urlStat from '../url';
import StatFont from '../../Lib/Component/StatFont'
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
      console.log(urlStat.img+ item.photo)
      onPress();
   }

   return (
      <Pressable onPress={pressed} style={[activated,styles.container]}>
         <Line>
            <View style={styles.containerItem}>
               <StatFont style = {styles.text}>{item.name}</StatFont>

             
               <Image resizeMode='contain' style = {styles.image} source= {{uri: urlStat.img+ item.photo}}></Image>
            </View>
         </Line>
      </Pressable>
   );
}
export default Listitem;

const styles = StyleSheet.create(
   {
      activated:{
         backgroundColor:color.gray,
         flex:1
      },
      container:{
         flex:1
      },
      containerItem:{
         alignItems:'center',
         paddingVertical:5,
         backgroundColor:color.gray
      },
      image:{
         height:100,
         width:'100%'
      },
      text:{
         margin: 10,
         fontSize: 20,
         color: color.grayLetter

      }
   }
)