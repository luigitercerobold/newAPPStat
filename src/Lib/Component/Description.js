import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Title3 from './Title3'
import StatFont from '../../Lib/Component/StatFont'
const Description = ({description}) => {

   return (
      <View>
        <Title3 title = "Descripción"/>  
         <StatFont style = {styles.text}>
            {description}
         </StatFont>
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