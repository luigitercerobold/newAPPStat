import { CardStyleInterpolators } from '@react-navigation/stack'
import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Color from '../Colors'
import SimpleBoton from './BotonSiemple'

const AceptRequest = ({ title = 'Aceptar',onPress,isOk }) => {
   console.log(isOk)
   return (
      <View style={styles.container}>
         <View style={styles.container}>

         </View>
         <View style={styles.container}>
            <View style={styles.message}>
               {isOk 
               ? <Image style= {styles.containerImg}source={require('newAPPStat/assets/Icon/1x/finalizar.png')} />
                :  <Image style= {styles.containerImg}source={require('newAPPStat/assets/Icon/1x/cancelar.png')} />
            }
              
               <Text style={styles.text}>{title}</Text>
            </View>
         </View>
         <View style={styles.container,styles.contButton}>
            <View style={styles.containerButton}>
               <SimpleBoton
                  title='Aceptar'
                  onPress = {onPress}
               />
            </View>
         </View>


      </View>

   )
}

export default AceptRequest

const styles = StyleSheet.create(
   {
      container: {
         flex: 1
      },
      text: {
         fontSize: 20,
         color: Color.blue
      },
      message:{
         alignItems: 'center'
      }
      ,
      containerImg: {
         marginBottom:20
      },
      containerButton: {
         alignItems: 'center', 
      },
      contButton:{
        margin:20,
         justifyContent:'flex-end'
      }

   }
)