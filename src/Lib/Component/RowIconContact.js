import React from 'react'
import {View,Image,StyleSheet} from 'react-native'

const RowIconContact = () => {

   return (
      <View style ={styles.container}>
         <Image style ={styles.img} source ={require('newAPPStat/assets/Icon/1x/llamar-proveedores.png')}/>
         <Image style ={styles.img} source ={require('newAPPStat/assets/Icon/1x/info-proveedores.png')}/>
         <Image style ={styles.img} source ={require('newAPPStat/assets/Icon/1x/ubicacion-proveedores.png')}/>
      </View>

   )
}

export default RowIconContact
const styles =  StyleSheet.create (
   {
      container:{
         flexDirection:'row',
         padding:15
      },
      img:{
         margin: 5,
         height:35,
         width:35
      }
   }

)