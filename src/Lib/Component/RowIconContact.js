import React, { useCallback }  from 'react'
import {View,Image,StyleSheet,Linking, Pressable,Alert} from 'react-native'
import Http from '../http'
import urlStat from '../url'

const RowIconContact = ({information,product,message}) => {

   const handlePress =  () => {
       Linking.openURL(`tel:${information.phone}`)
      // Checking if the link is supported for links with custom URL scheme.
   }
    
   const getProduct =async () => {
      console.log(urlStat.productTrial(information))
      const body = JSON.stringify({
         message:message
      })
      const req = await Http.instance.post(urlStat.productTrial(product.id),body,Http.instance.token)
      console.log(req.message)
     alert ("solicitaste informacion de " + product.name + ", se envió un correo electrónico con tus datos al proveedor " ) 
    
   }

  const alert = (message) => {

      Alert.alert(
         "Usuario",
         "Mensaje de Stat: " + message,
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
         ],
         { cancelable: false }
      )
   }
   
   return (
      <View style ={styles.container}>
         <Pressable 
            onPress = {handlePress}
         >
         <Image style ={styles.img} source ={require('newAPPStat/assets/Icon/1x/llamar-proveedores.png')}/>
         </Pressable>
         <Pressable
            onPress ={getProduct}
         >
         <Image style ={styles.img} source ={require('newAPPStat/assets/Icon/1x/info-proveedores.png')}/>
         </Pressable>
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