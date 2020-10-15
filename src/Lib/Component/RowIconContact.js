import React, { useCallback }  from 'react'
import {View,Image,StyleSheet,Linking, Pressable} from 'react-native'

const RowIconContact = ({information}) => {

   const handlePress =  () => {
       Linking.openURL(`tel:${information.phone}`)
      // Checking if the link is supported for links with custom URL scheme.
   }
    
   
   return (
      <View style ={styles.container}>
         <Pressable 
            onPress = {handlePress}
         >
         <Image style ={styles.img} source ={require('newAPPStat/assets/Icon/1x/llamar-proveedores.png')}/>
         </Pressable>
         
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