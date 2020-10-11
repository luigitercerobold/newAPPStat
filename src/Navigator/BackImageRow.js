import React from 'react'
import {Image} from 'react-native'
export function BackImageRow() {
   return (
     <Image
       style={{ width: 35, height: 35, }}
       source={require('newAPPStat/assets/Icon/1x/atras-ingresardatos.png')}
       resizeMode='contain'
     />
   );
 }