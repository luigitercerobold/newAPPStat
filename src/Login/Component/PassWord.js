import React from 'react';
import { TextInput, StyleSheet, View, Pressable, Button, Image } from 'react-native'
import { Switch } from 'react-native-gesture-handler';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const PassWord = ({ placeholder, value, onChangeText,onEndEditing }) => {
   const [secure, setScure] = React.useState(true);

   return (
      <View style={styles.Container}>
         <View style={styles.Row}
       
         >
            <TextInput
               secureTextEntry={secure}
               style={styles.textStyle}
               onChangeText={text => onChangeText(text)}
               placeholder={placeholder}
               onEndEditing ={onEndEditing}
               
            
            />
          <Pressable
               onPress={() => setScure(!secure)}
               style ={styles.imgContainer}
             
            >
               <Image
                 style ={styles.img}
                  source = {require('newAPPStat/assets/Icon/1x/ver.png')}
                  resizeMode='contain'
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
      paddingHorizontal: 55
   },
   img: {
      width:35,
      height:35
   },
   imgContainer:{
    justifyContent:'center'  
   }

})
