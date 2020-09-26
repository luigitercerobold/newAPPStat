import React from 'react'
import { View, Image, StyleSheet, Text } from 'react-native'
import ContainerText from '../../Cirugias/Component/ContainerText'
import Colors from 'newAPPStat/src/Lib/Colors'
import Padding from '../../../Login/Component/PaddingVertical'

const Card = ({ img, text }) => {
   return (
      <View style={[styles.iconFrame]}>

         <View style={styles.imgCenter}>
            <Image style={styles.imgContainer} source={img} />
            <View style={styles.containertext}>
               <Text style={styles.text}>{text}</Text>
            </View>
            
         </View>
      </View>
   )
}

export default Card;

const styles = StyleSheet.create({
   iconFrame: {
      justifyContent: 'center',


      height: 230,
      width: 150,

      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 10,
      //shadowOffset: {height: 100, width: 100},
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 8,
      marginHorizontal:10,
      marginVertical:25
   },
   imgCenter: {
      justifyContent: "center",
      alignItems: "center"
   },
   imgContainer: {
      width: 75,
      height: 75
   },
   text:{
      color:Colors.grayLetter,
      fontSize:20,
      textAlign:"center",
      paddingVertical:10
   },
   containertext:{
      height:12
   }

})

