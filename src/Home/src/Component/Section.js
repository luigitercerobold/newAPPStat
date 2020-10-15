import React from 'react';
import {
   View,
   Text,
   StyleSheet,
   Animated,
   Image,
   TextInput,
   TouchableOpacity, Button, Pressable
} from 'react-native';

import Card from './Card'

function Section({ nexPage, text, img, borderLine = true, container = true }) {
   const Stilene = () => {

      if (borderLine) {
         return styles.reactItem
      }
      return styles.reactItemNoLine
   }
   const negativemargin = () => {
      if (container) {
         return styles.contaninerNone
      }
      return styles.containerMarginNegative

   }

   return (
      <View style={styles.container}>
         <Pressable
            style={styles.container}
            onPress={nexPage}>
            <View style={[Stilene(), negativemargin(),{ flexDirection: 'row' }]}>
             
                  <View style={styles.containerText}>
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
      flex: 1,
      width: 250,
      justifyContent: 'center'
   },
   container: {
   flex:1,
      backgroundColor: 'white',
      paddingHorizontal: 10
   },

   contaninerNone: {
      flex:2  
   },
   containerMarginNegative: {
    
     flex:.85,
     paddingBottom:45
   },
   reactItem: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#000',
      paddingHorizontal: 15,
      alignContent: 'center',
      
      alignItems: 'center',
        
          marginTop:-20
   },
   reactItemNoLine: {

      paddingHorizontal: 15,
      alignContent: 'center',
    
      alignItems: 'center'
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