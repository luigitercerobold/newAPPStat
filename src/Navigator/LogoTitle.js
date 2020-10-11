import React from 'react'
import {View,Image,Pressable} from 'react-native'
export function LogoTitle(props) {

   console.log('logo props', props)
   return (
     <View style={{ flexDirection: "row" }}>
       <View style={{ flex: 1, alignItems: 'center', backgroundColor: "fff", justifyContent: 'center', flexDirection: "row" }}>
         <Image
           style={{ width: 105, height: 35, }}
           source={require('newAPPStat/assets/img/logo.png')}
           resizeMode='contain'
         />
       </View>
 
       <Pressable
       // onPress = {() => navigation.toggleDrawer()}
       >
         <Image
           style={{ width: 40, height: 30 }}
           source={require('newAPPStat/assets/Icon/1x/menu.png')}
           resizeMode='contain'
         />
       </Pressable>
     </View>
 
   );
 }
 