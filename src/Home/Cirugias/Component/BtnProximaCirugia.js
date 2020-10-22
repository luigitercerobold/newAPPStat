import React from 'react';
import {
   View,
   Pressable,
   StyleSheet, Text, Image
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Color from 'newAPPStat/src/Lib/Colors'
import StatFont from '../../../Lib/Component/StatFont'
const BtnProximaCirugia = ({ text, img, onPress }) => {

   return (

      <View style={styles.container}>
         <StatFont style={styles.text}> {text}</StatFont>
         <Pressable onPress={onPress} style={({ pressed }) => [
            {
               backgroundColor: pressed
                  ? Color.bluePressed
                  : Color.blue,
            },
            styles.myButton
         ]}

         >
            <Image style={styles.img} source={img} ></Image>

         </Pressable>
      </View>)

}

export default BtnProximaCirugia;

const styles = StyleSheet.create({
   container: {
      alignItems: "center",
      justifyContent: "center",

   },
   myButton: {

      height: 45,
      width: 45,  //The Width must be the same as the height
      borderRadius: 400, //Then Make the Border Radius twice the size of width or Height   

      justifyContent: 'center',
      alignItems: 'center',
   },
   img: {
      width: 45,
      height: 45,


   },
   text: {
      color: Color.blue,
      marginVertical: 15,
      fontSize: 25,
   }

})