import React from 'react'
import { Text, StyleSheet } from 'react-native'
import Colors from 'newAPPStat/src/Lib/Colors'
import StatFont from '../../../Lib/Component/StatFont'

const ContainerText = (props) => {

   return (
      <StatFont style={styles.text}>
         {props.children}
      </StatFont>
   )
}

export default ContainerText

const styles = StyleSheet.create(
   {
      text: {

         fontSize: 25,
         color: Colors.grayLetter

      }
   }

)