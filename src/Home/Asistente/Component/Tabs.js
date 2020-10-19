import React, { useState } from 'react'
import { Pressable, Text, View, StyleSheet } from 'react-native'
import Color from '../../../Lib/Colors'


const TabsDoctor = ({ component1, component2 }) => {
   const [press1, setPress1] = useState(true)
   const [press2, setPress2] = useState(false)

   const handlePress1 = () => {
      setPress1(true)
      setPress2(false)
   }
   const handlePress2 = () => {
      setPress1(false)
      setPress2(true)
   }
   const textActivate = (press) => {
   
      if (press) {
         return styles.textActivate
      }
      return styles.textDesactivate
   }

   const press = (press) => {
     

      if (press) {
         return styles.buttonTabActivate
      }
      return styles.buttomDesactivate
   }

   return (
      <View>
         <View style={{ flexDirection: "row", justifyContent: "space-around", marginHorizontal: 20 }}>

            <Pressable
               style={[press(press1),styles.buttom,styles.borderRadiusLeft]}
               onPress={handlePress1}
            >
               <Text style={[textActivate(press1),styles.text]}>Médico ayudante</Text>
            </Pressable>
            <Pressable
               style={[press(press2),styles.buttom,styles.borderRadiusRight]}
               onPress={handlePress2}
            >
               <Text style = {[textActivate(press2),styles.text]}>Anestesia</Text>
            </Pressable>


         </View>
         {
            press1
               ? component1
               : component2

         }

      </View>
   )

}

export default TabsDoctor

const styles = StyleSheet.create({
   buttom:{
      height:50,
 
      justifyContent:'center',
     

   },
   borderRadiusRight:{
      borderBottomRightRadius:15,
      borderTopRightRadius:15

   },
   borderRadiusLeft :{
      borderBottomLeftRadius:15,
      borderTopLeftRadius:15
   },
   buttonTabActivate: {
      backgroundColor: Color.blue,
      width: "50%"
   },

   buttomDesactivate: {
      backgroundColor: Color.gray,
      width: "50%"
   },
   textActivate: {
      color: Color.white
   },
   textDesactivate: {
      color: Color.black
   },
   text: {
      fontSize:20,
      marginLeft:5,
      textAlign:'center'
   }


}) 