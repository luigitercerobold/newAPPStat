import React from 'react'
import { Text, FlatList, View, StyleSheet, Image, Pressable } from 'react-native'
import urlStat from '../../../Lib/url'
import StatFont from '../../../Lib/Component/StatFont'
import Colors from '../../../Lib/Colors'
const Doctors = ({ item, onPress, cancel,isDelete }) => {

   const onPressable = () => {
    
      onPress(item)
    

   }
   return (
      <Pressable style={styles.container}
         onPress={onPressable}
      >
         <View>
            {isDelete ?
               <View style={{ zIndex: 2, flexDirection: "row-reverse" }}>
                  <Pressable onPress={cancel} style={[styles.myButton, styles.red]}>
                     <Image style={styles.pencil} source={require("newAPPStat/assets/Icon/1x/cancerlar_informacion.png")} ></Image>
                  </Pressable>
               </View>
               :
               null}


            <Image
               style={styles.img}
               source={{ uri: urlStat.img + item.photo }}
            />
         </View>


         <View>

         </View>
         <StatFont style={styles.text} >{item.name}</StatFont>

      </Pressable>
   )
}

export default Doctors

const styles = StyleSheet.create({
   container: {
      margin: 15,
      width: 150,
      alignContent: 'center',
      justifyContent: 'center',
      alignItems: 'center'

   },
   img: {
      height: 125,
      width: 125
   },
   text: {
      maxWidth: 150,
      width: 150,
      textAlign: 'center'
   },
   myButton: {
      margin: 0,
      height: 15,
      width: 15,  //The Width must be the same as the height
      borderRadius: 100, //Then Make the Border Radius twice the size of width or Height   
      backgroundColor: Colors.blue,
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2
   },
   red: {
      backgroundColor: Colors.red,

   },
   pencil: {
      width: 30,
      height: 30,

   }
})