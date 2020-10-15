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
         <Pressable
            onPress={() => navigation.toggleDrawer()}
         >
            <Image
               style={{ marginHorizontal:15, width: 35, height: 35 }}
               source={require('newAPPStat/assets/Icon/1x/menu.png')}
               resizeMode='contain'
            />
         </Pressable>




      );
   }
}

export default LogoTitle