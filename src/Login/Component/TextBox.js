import React from 'react';
import {TextInput,StyleSheet,View} from 'react-native'
import Padding from './PaddingVertical';

const TextBox = ({ placeholder,value,onChangeText}) => {

   return (
      <View style =  {styles.Container}>
<View style ={styles.Row} >
         
         <TextInput 
          style ={styles.textStyle} 
          onChangeText ={text => onChangeText(text)}
          placeholder={placeholder}
         />
      </View>
      </View>
      
     
   )
}

export default TextBox;

const styles =  StyleSheet.create({
   textStyle:{
      letterSpacing: 3,
      color: 'gray',
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
      fontSize: 22,
    
      borderBottomWidth: 1,
      borderBottomColor: '#2185fb',
      
      width:'100%',
      paddingHorizontal:15,
      
   },
   Row: {
    
      flexDirection: 'row',
      justifyContent:'center'
   }
   ,Container:{
      paddingHorizontal:25
   }

})
