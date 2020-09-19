import React, { Component } from 'react'
import { Button, View, Text, Image, StyleSheet, Pressable } from 'react-native'
import Colors from 'newAPPStat/src/Lib/Colors'

function NavigateCirugias(props) {
   return (

      <View>
         {(props.text1) ?
            <View style={styles.container}>
               <View style={styles.containerSelector}>
                  <Image style={styles.img} source={props.img}></Image>
                  <View style={styles.containerCenter}>
                     <Text style={styles.texPrincipal}>
                        {props.text1}
                     </Text>
                     <Text style={styles.texSeond}>
                        {props.text2}
                     </Text>
                     <Text>
                        {props.text3}
                     </Text>
                  </View>
                  <View>
                     <Pressable onPress={props.goToPage} style={styles.myButton}>
                        <Image style={styles.pencil} source={require("newAPPStat/assets/Icon/1x/editar_inofrmacion.png")} ></Image>
                     </Pressable>
                  </View>
               </View>
            </View> :
            <View style={styles.containerCenterNone}>
               <Pressable onPress={props.goToPage} style={styles.containerNone}>
                  <View style={styles.myButton}>
                     <Image style={styles.pencil} source={require("newAPPStat/assets/Icon/1x/cirugias-agregar_cirugias.png")} ></Image>
                  
                  </View>
                  <Text style={styles.textAdd}>{props.action}</Text>
               </Pressable>
            </View>

         }
      </View>

   )
}

export default NavigateCirugias;
const styles = StyleSheet.create({
   texSeond:{
      fontSize:16,
      fontWeight:"600",
   },
   texPrincipal:{
      fontSize:22,
      fontWeight:"900",
   },
   containerCenterNone:{
      
      alignItems:'center'
   },
   containerNone: {
      flexDirection: 'row',
      width:190,
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
      padding: 5,
      height: 45,
      width: 45,  //The Width must be the same as the height
      borderRadius: 400, //Then Make the Border Radius twice the size of width or Height   
      backgroundColor: Colors.blue,
      justifyContent: 'center',
      alignItems: 'center',

   },
   containerCenter: {
      flex: 1,
      justifyContent: 'center',

      paddingHorizontal: 30
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