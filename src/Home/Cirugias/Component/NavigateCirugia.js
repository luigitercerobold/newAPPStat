import React, { Component } from 'react'
import { Button, View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Colors from 'newAPPStat/src/Lib/Colors'
import StatFont from '../../../Lib/Component/StatFont'

import {useCirugia} from '../Context/CirugiaContext'
const NavigateCirugias = ({ text1, text2, text3, img, goToPage, action, delate = true, edit = true, deleting, view }) => {
   const {isAuth} = useCirugia()
   return (

      <View>
         {(text1) ?
            <View style={styles.container}>
               <View style={styles.containerSelector}>
                  <Image style={styles.img} source={img} resizeMode="contain"></Image>
                  <Pressable
                     onPress={view}
                     style={styles.containerCenter}>
                     <StatFont style={styles.texPrincipal}>
                        {text1}
                     </StatFont>
                     {text2 ?
                        <StatFont style={styles.texSeond}>
                           {text2}
                        </StatFont>
                        : null
                     }

                     {text3 ?
                        <StatFont style={styles.texSeond}>
                           {text3}
                        </StatFont>
                        : null}

                  </Pressable>
                  <View>
                     {delate
                        ? <Pressable onPress={deleting} style={[styles.myButton, styles.red]}>
                           <Image style={styles.pencil} source={require("newAPPStat/assets/Icon/1x/cancerlar_informacion.png")} ></Image>
                        </Pressable>
                        : null
                     }

                     {edit ?
                        <Pressable onPress={goToPage} style={styles.myButton}>
                           <Image style={styles.pencil} source={require("newAPPStat/assets/Icon/1x/editar_inofrmacion.png")} ></Image>
                        </Pressable>
                        : null
                     }

                  </View>
               </View>
            </View> :
            <View style={styles.containerCenterNone}>
               <Pressable onPress={goToPage} style={styles.containerNone}>
                  <View style={styles.myButton}>
                     <Image style={styles.pencil} source={require("newAPPStat/assets/Icon/1x/cirugias-agregar_cirugias.png")} ></Image>

                  </View>
                  <StatFont style={styles.textAdd}>{action}</StatFont>
               </Pressable>
            </View>

         }
      </View>

   )
}

export default NavigateCirugias;
const styles = StyleSheet.create({
   texSeond: {
      fontSize: 16,
      fontWeight: "600",
   },
   texPrincipal: {
      fontSize: 22,
      fontWeight: "900",
   },
   containerCenterNone: {

      alignItems: 'center'
   },
   containerNone: {
      flexDirection: 'row',
      width: 190,
      marginVertical: 25,
      alignContent: 'center',

      alignItems: 'center',

   },
   textAdd: {
      fontSize: 20,
      color: Colors.blue,
      marginLeft: 18,

   },
   container: {
      backgroundColor: Colors.gray,
      marginVertical: 6
   },
   containerSelector: {
      flexDirection: 'row',
      margin: 15,
      alignContent: 'center',
      justifyContent: 'space-between',
      alignItems: 'center',

   },
   myButton: {
      margin: 10,
      height: 30,
      width: 30,  //The Width must be the same as the height
      borderRadius: 400, //Then Make the Border Radius twice the size of width or Height   
      backgroundColor: Colors.blue,
      justifyContent: 'center',
      alignItems: 'center',
   },
   red: {
      backgroundColor: Colors.red,
   },
   containerCenter: {
      flex: 1,
      justifyContent: 'center',

      paddingHorizontal: 15
   },
   img: {
      width: 56,
      height: 56
   },
   pencil: {
      width: 40,
      height: 40
   }

})