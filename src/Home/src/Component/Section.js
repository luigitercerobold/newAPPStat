import React from 'react';
import {
   View,
   Text,
   StyleSheet,
   Animated,
   Image,
   TextInput,
   TouchableOpacity, Button,Pressable
} from 'react-native';

import Card from './Card'

function Section({nexPage,text,img}) {

   return (
      <View style = {styles.container}>
         <Pressable
            style={styles.container}
            onPress={nexPage}>
            <View style={[styles.reactItem, { flexDirection: 'row' }]}>
               <View style = {styles.containerText}>
               <Text style={styles.text_input}>{text}</Text>
               </View>
               <Card
                  img={img}
                />
            </View>
         </Pressable>

      </View>

   )

}

export default Section;


const styles = StyleSheet.create({

   containerText: {
      flex:1,
      width:250,
      justifyContent:'center'
   }, 
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   
   reactItem: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#000',
      paddingHorizontal: 15,
      alignContent: 'center',
      flex:1,
      alignItems:'center'
   },
  
   text_input: {
    
      paddingTop: 23,
      
      
      color: '#1f2d49',
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
      letterSpacing: 2,
      fontSize: 28,
   },
});