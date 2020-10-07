import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Title3 from './Title3'

const Description = ({description}) => {

   return (
      <View>
        <Title3 title = "Descripción"/>  
         <Text style = {styles.text}>
            {description}
         </Text>
      </View>
   )

}

export default Description

const styles = StyleSheet.create (
   {
      text:{
         padding:25
      }
   }
)