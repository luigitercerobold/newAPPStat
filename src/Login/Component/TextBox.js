import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native'


const TextBox = ({ placeholder, onChangeText, keyword = 'default' , autocomplete = "off",style}) => {

   return (
      <View style={[styles.Container,style]}>
         <View style={styles.Row} >
            <TextInput
               style={styles.textStyle}
               onChangeText={text => onChangeText(text)}
               placeholder={placeholder}
               keyboardType={keyword}
               
            />
         </View>
      </View>
   )
}

export default TextBox;

const styles = StyleSheet.create({
   textStyle: {
      letterSpacing: 3,
      color: 'gray',
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
      fontSize: 22,

      borderBottomWidth: 1,
      borderBottomColor: '#2185fb',

      width: '100%',
      paddingHorizontal: 15,

   },
   Row: {

      flexDirection: 'row',
      justifyContent: 'center'
   }
   , Container: {
      paddingHorizontal: 25
   }

})
