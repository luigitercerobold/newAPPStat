import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
import StatFont from '../../Lib/Component/StatFont'
export default ({tittle,title}) => {
   return (
      <View style={styles.container}>
      
      <StatFont
        style={[
          styles.text_login,

        ]}>
        {tittle}
        {title}
      </StatFont>
    </View>

   )

}

const styles = StyleSheet.create({

   text_login: {
   
     fontFamily: 'Questrial-Regular',
     fontWeight: '100',
     letterSpacing: 3,
     
    
 
 
     letterSpacing: 2,
 
     fontSize: 15,
   }, container: {
     paddingHorizontal: 20
   }
 
 });