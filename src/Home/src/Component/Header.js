import React, { Component } from 'react';
import {
   View,
   StyleSheet,
   Pressable,
   Image,
   SafeAreaView
} from 'react-native';
import Color from '../../../Lib/Colors'
import LogoWhite from '../../../../assets/img/logo.png';
import Padding from '../../../Login/Component/PaddingVertical';

const Header = ({navigation}) =>{



   return (
      <View style={styles.container} >
         <View style={styles.areaContainer}></View>

         <View style={styles.areaContainer, styles.containerImg}>
            <Image style={styles.img} source={require('newAPPStat/assets/Icon/1x/logostat-blanco.png')}
               resizeMode='contain' />

         </View>

         <Pressable style={styles.areaContainer, styles.containerHamburguesa}
         
         onPress ={navigation.toggleDrawer}
         >

            <Image style={styles.hambureguesa} source={require('newAPPStat/assets/Icon/1x/menu.png')}
               resizeMode='contain' />
         </Pressable>
      </View>
   );
   
}
export default Header;
const styles = StyleSheet.create({
   container: {
      height: 50,
      backgroundColor: Color.blue,
      flexDirection: 'row',

      
   },

   header: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2185fb',
   },

   footer: {
      flex: 2,
   },
   areaContainer: {
      flex: 1,
      // borderColor: 'red',
      // borderWidth: 1
   },
   img: { width: 100 },
   containerImg: {
      justifyContent: "center",
      flex: 1, alignItems: 'center'
   },
   containerHamburguesa: {
      justifyContent: "center",
      flex: 1,
      alignItems: 'flex-end',


   },
   hambureguesa: {
      flex: 1,
      marginRight: 25,
      width:35

   }

});