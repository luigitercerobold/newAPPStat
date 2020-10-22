import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import TextMenu from './TextMenu'
import Context from '../../../Context'
const CerrarSession = () => {
   const onPress = (logAuth) => {
      logAuth()
   }
   return (

      <View style={styles.container}>

         <Context.Consumer>
            {
               ({ isAuth, activateAuth, logAuth }) => {
                  return (
                     <>
                        <TextMenu onPress={() => onPress(logAuth)} title="Cerrar sesión" />
                     </>
                  )
               }
            }
         </Context.Consumer>

      </View>
   )

}

export default CerrarSession

const styles = StyleSheet.create(
   {

      container: {
         flex: 1,
         justifyContent: 'flex-end'
      },
      img: {
         width: 100,
         height: 100,


      }
   }
)
