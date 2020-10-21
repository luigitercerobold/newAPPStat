import React from 'react'
import { Text, StyleSheet } from 'react-native'

const StatFont = ({ style, children }) => {



   return (
      <StatFont
         style={
            [styles.fontStyle]

         }
      >
         {children}
      </StatFont>

   )
}

export default StatFont

const styles = StyleSheet.create({
   fontStyle: {
   
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
  
    
      color: "black",


      letterSpacing: 1,

      fontSize: 20,

   }
})