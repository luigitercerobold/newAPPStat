import React, { Component, useEffect, useState, useRef } from 'react';
import { Button, View, StyleSheet } from "react-native";
import Padding from '../../../Login/Component/PaddingVertical'
import BtnSimple from '../../../Login/Component/BtnSimple'
const ListButton =({onPress,title})=> {
      return(
         <View style={styles.buttonContainer}>
            {/* <View style={styles.button} >
              <Button title="Cancelar"></Button>
            </View> */}
           
            <Padding vertical={3}>
            <BtnSimple
              title={title}
              onPress={onPress}
            />
          </Padding>
          </View>
      );  
}
export default ListButton;
const styles = StyleSheet.create({
   button:{
     
     
   }, 
   buttonContainer:{
     flexDirection:"row",
     alignItems:"center",
     justifyContent:'space-evenly',
   },
   containerAccion:{
     justifyContent:'center',
   },
 
   container: {
     flex: 1,
     backgroundColor: 'white',
   },
   absoluteFilled: {
     position: 'absolute',
     left: 0,
     right: 0,
     top: 0,
     bottom: 0,
   },
   progressBar: {
     height: 8,
     flexDirection: 'row',
     width: '100%',
     backgroundColor: 'white',
     // borderBottomColor: '#2185fb',
     // borderBottomWidth: 4.5,
   },
   header: {
     flex: 1,
     flexDirection: 'row',
     //alignItems: 'center',
     //justifyContent: 'center',
     backgroundColor: '#2185fb',
     paddingHorizontal: 26,
   },
 
   footer: {
     flex: 7,
   },
   inputview: {
     paddingHorizontal: 17,
   },
   text_login: {
     color: '#2185fb',
     fontFamily: 'Questrial-Regular',
     fontWeight: '100',
     letterSpacing: 3,
     fontSize: 18,
   },
   login: {
     width: '40%',
     height: 40,
     marginStart: 20,
     justifyContent: 'center',
     alignItems: 'center',
   },
   text_input: {
     marginStart: 8,
     marginEnd: 27,
     borderBottomWidth: 1,
     borderBottomColor: '#2185fb',
     fontFamily: 'Questrial-Regular',
     fontWeight: '100',
     letterSpacing: 2,
     fontSize: 18,
   },
   button: {
     elevation: 0,
     flexDirection: 'row',
     fontFamily: 'Questrial-Regular',
     alignItems: 'center',
     marginTop: 40,
   },
 });
 const pickerSelectStyles = StyleSheet.create({
 
   inputIOS: {
     fontSize: 18,
     width: 40,
     fontFamily: 'Questrial-Regular',
     paddingVertical: 12,
     paddingHorizontal: 10,
     //borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 4,
     color: 'black',
     //paddingRight: 30, // to ensure the text is never behind the icon
   },
   inputAndroid: {
     fontSize: 18,
     width: 40,
     fontFamily: 'Questrial-Regular',
     paddingHorizontal: 10,
     paddingVertical: 8,
     //borderWidth: 0.5,
     borderColor: 'black',
     borderRadius: 8,
     color: 'black',
     //paddingRight: 30, // to ensure the text is never behind the icon
   },
 });
 const pickerSelectStyles2 = StyleSheet.create({
 
   inputIOS: {
     fontSize: 18,
     width: 40,
     fontFamily: 'Questrial-Regular',
     paddingVertical: 12,
     paddingHorizontal: 10,
     //borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 4,
     color: 'black',
     //paddingRight: 30, // to ensure the text is never behind the icon
   },
   inputAndroid: {
     fontSize: 18,
     width: 40,
     fontFamily: 'Questrial-Regular',
     paddingHorizontal: 10,
     paddingVertical: 8,
     //borderWidth: 0.5,
     borderColor: 'black',
     borderRadius: 8,
     color: 'black',
     //paddingRight: 30, // to ensure the text is never behind the icon
   },
 });
 const pickerSelectStyles3 = StyleSheet.create({
 
   inputIOS: {
     fontSize: 18,
     width: 50,
     fontFamily: 'Questrial-Regular',
     paddingVertical: 12,
     paddingHorizontal: 10,
     //borderWidth: 1,
     borderColor: 'gray',
     borderRadius: 4,
     color: 'black',
     //paddingRight: 30, // to ensure the text is never behind the icon
   },
   inputAndroid: {
     fontSize: 18,
     width: 50,
     fontFamily: 'Questrial-Regular',
     paddingHorizontal: 10,
     paddingVertical: 8,
     //borderWidth: 0.5,
     borderColor: 'black',
     borderRadius: 8,
     color: 'black',
     //paddingRight: 30, // to ensure the text is never behind the icon
   },
 });