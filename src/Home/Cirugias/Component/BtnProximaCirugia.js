import React from 'react';
import {
   View,
   Pressable,
   StyleSheet, Text,Image
}from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import Colors from 'newAPPStat/src/Lib/Colors'
const BtnProximaCirugia = ({ text, img, onPress }) => {

   return (
   
   <View style ={style.container}>
      <Text style={style.text}> {text}</Text>
      <Pressable onPress={onPress} style={style.myButton}>
         <Image style = {style.img} source={img} ></Image>
      </Pressable>
   </View>)

}

export default BtnProximaCirugia;

const style = StyleSheet.create({
   container: {
      alignItems:"center",
      justifyContent:"center",
      marginTop:20
   }, 
   myButton: {
      padding: 5,
      height: 45,
      width: 45,  //The Width must be the same as the height
      borderRadius: 400, //Then Make the Border Radius twice the size of width or Height   
      backgroundColor: Colors.blue,
      justifyContent: 'center',
      alignItems: 'center',
   },
   img:{
      width:45,
      height:45,
      marginVertical:20
      
   },
   text:{
      color:Colors.blue,
      marginVertical:15,
      fontSize:25,
   }

})