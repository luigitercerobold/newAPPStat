import React from 'react';
import { Text, View,StyleSheet,Pressable, Image } from 'react-native'
import Line from './Line'
import color from 'newAPPStat/src/Lib/Colors';
import url from '../../../Lib/url'

const Listitem = ({ item, onPress,activate,img }) => {
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
               <Image 
                  resizeMode='contain'
               style = {styles.img}source = {{
                  uri: url.img + img
                         
               }}></Image>
               <Text>{item}</Text>

            </View>
         </Line>
      </Pressable>
   );
}
export default Listitem;

const styles = StyleSheet.create(
   {
      img:{
         height:100,maxWidth:150,width:'100%'
      },
      
      activated:{
         backgroundColor:color.blue,
      },
      container:{
         //backgroundColor:'rgb(255, 0, 255)',
         
      },
      containerItem:{
         alignItems:'center',
         
        // backgroundColor:'rgb(255, 125, 255)'
      }
   }
)