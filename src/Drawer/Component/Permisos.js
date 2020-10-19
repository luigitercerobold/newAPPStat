import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import TextMenu from './TextMenu'
const Permisos = ({goTo}) => {

   return (
      <Pressable style={styles.container}
         onPress={goTo}
      >
          <Image resizeMode='contain' style = {styles.img} source  = {require('newAPPStat/assets/Icon/1x/permisos.png')}
          />
         <TextMenu 
         onPress={goTo} title="Permisos" />

         
      </Pressable>

   )

}

export default Permisos

const styles = StyleSheet.create(
   {

      container: {
         flex: 1,
         flexDirection:'row',
         alignItems:'center'
      },
      img: {
         width: 30,
         height: 30,
         marginRight: 10
      }
   }
)
