import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

const ProductoImg = ({ children,onPress}) => {

   return (

      <Pressable
         onPress={onPress}
      >
         <View style={styles.container}>
            
         </View>
         <Text style = {styles.text}> {children}</Text>
      </Pressable>

   )
}

export default ProductoImg

const styles = StyleSheet.create({
   container: {
      margin: 21,
      backgroundColor:'white',
      height:150,
      width:150
   },
   text:{
      paddingLeft:20,
      marginBottom:21
   }

})