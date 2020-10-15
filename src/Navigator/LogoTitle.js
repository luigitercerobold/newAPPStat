import React, { Component } from 'react'
import { View, Image, Pressable } from 'react-native'
import {

   NavigationContext,
} from '@react-navigation/native';
export class LogoTitle extends Component {
   static contextType = NavigationContext;
   render() {
      const navigation = this.context;
      return (
         <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: "fff", justifyContent: 'center', flexDirection: "row" }}>
               <Image
                  style={{ width: 105, height: 35, }}
                  source={require('newAPPStat/assets/img/logo.png')}
                  resizeMode='contain'
               />
            </View>

          
         </View>

      );
   }
}
