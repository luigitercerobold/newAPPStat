import react from "react";
import { View, StyleSheet } from "react-native";
import React from 'react'

const ContainerCenter = (props) =>{

   return (
      <View style={styles.container}>
         {props.children}
      </View>
   )
}

export default ContainerCenter;
const styles = StyleSheet.create(
   {
      container:{
         flex:1,
         justifyContent: "center", 
         alignItems: "flex-start",
         flexDirection:'row'
      }
   }
)