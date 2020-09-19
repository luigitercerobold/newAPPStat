import React from 'react';
import {TextInput,StyleSheet} from 'react-native'

const TextBox = ({ placeholder,value,onChangeText}) => {

   return (
      <>
        <TextInput 
         style ={styles.textStyle} 
         onChangeText ={text => onChangeText(text)}
         placeholder={placeholder}
        />
      </>
   )
}

export default TextBox;

const styles =  StyleSheet.create({
   textStyle:{

   }

})
