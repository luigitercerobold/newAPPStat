import React from 'react'
import {Image} from 'react-native'
export function BackImageRow() {
   return (
     <Image
       style={{ width: 30, height: 30, }}
       source={require('newAPPStat/assets/Icon/1x/atras-ingresardatos.png')}
       resizeMode='contain'
     />
   );
 }