import React from  'react'
import {View, StyleSheet} from 'react-native'


class DimEsqueleto{
  
   constructor(window,screen) {
      this.paddingVertical = 60
      this.nav = 58
      this.paddingHorizontal = 58
      this.window = window
      this.screen = screen
      this.esqueleto = 0
      this.start = 0
   }
   pelvis() {
      return StyleSheet.create ({
         position:{
            top: this.esqueleto,
         }
      })      
   }
   paddingHorizontal(){
      return this.paddingHorizontal
   }

   paddingVertical() {
      return this.paddingVertical

   }
   setEsqueleto = (esqueleto) =>{
      this.esqueleto = esqueleto
   }
}



export default DimEsqueleto