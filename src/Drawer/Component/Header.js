import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Use } from 'react-native-svg'
import User from '../../Lib/user'
import Datos from './Datos'
import Color from '../../Lib/Colors'
const Header = () => {
   
   const [count, setCount] = useState(0);
   const [user, setUser] = useState(User.instance.user)
   useEffect(() => {
      if (User.instance.getUser() != null || user != User.instance.getUser()) {

         setUser(User.instance.getUser())
      }
   }

   );

   return (
      <View style={styles.container}>
         <View style={styles.containerElement}>
            <Image style={styles.img} source={require('newAPPStat/assets/Icon/1x/bienvenido.png')}></Image>
            {user
               ?
               <Datos
                  name={user.name}
                  email={user.email}
               />

               : <Datos
                  name={'User.name'}
                  email={'User.email'}
               />
            }

         </View>

      </View>

   )

}

export default Header

const styles = StyleSheet.create(
   {

      container: {
         flex: 1,
         paddingTop: 30

      },

      containerElement: {

         flexDirection: "row",


      },
      img: {
         width: 70,
         height: 70,
      },


   }
)
