import React from 'react';
import { TextInput, StyleSheet, View, Pressable } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PassWord = ({ placeholder, value, onChangeText }) => {
   const [secure, setScure] = React.useState(true);

   return (
      <View style={styles.Container}>
         <View style={styles.Row}>
            <TextInput
               secureTextEntry={secure}
               style={styles.textStyle}
               onChangeText={text => onChangeText(text)}
               placeholder={placeholder}
            />
            <Pressable
               onPress={() => setScure(!secure)}
            >
               <FontAwesome5
                  style={{ alignSelf: 'center' }}
                  name="eye-slash"
                  color="#2185fb"
                  size={22}
               />
            </Pressable>
         </View>
      </View>


   )
}

export default PassWord;

const styles = StyleSheet.create({
   textStyle: {
      letterSpacing: 3,
      color: 'gray',
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
      fontSize: 22,
      // marginEnd: "10%",
      borderBottomWidth: 1,
      borderBottomColor: '#2185fb',
   
      width: '100%',
      borderBottomWidth: 1,
      borderBottomColor: '#2185fb',
   },
   Row: {
     
      flexDirection: 'row',
      justifyContent: 'center'
   }, 
   Container: {
      paddingHorizontal: 50
   }

})
