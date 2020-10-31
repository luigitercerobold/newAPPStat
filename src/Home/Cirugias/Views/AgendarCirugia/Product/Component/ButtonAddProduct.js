import React from 'react'
import {View,Pressable,Image} from 'react-native'

const ButtomAddProduct = ({onPress}) =>{

   return(
      <Pressable onPress={onPress}>
         <Image source={require("newAPPStat/assets/Icon/1x/cirugias-agregar_cirugias.png")}/>
      </Pressable>
   )

}

export default ButtomAddProduct;