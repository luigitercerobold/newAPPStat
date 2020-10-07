import React from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import url from '../../../Lib/url'
const ProductoImg = ({ children, onPress, product }) => {

   return (

      <Pressable
         onPress={onPress}
      >
         <View style={styles.container}>
            <Image style={styles.img} source={{
               uri: url.img + product.image,
            }}></Image>
         </View>
         <Text style={styles.text}> {children} </Text>


      </Pressable>

   )
}

export default ProductoImg

const styles = StyleSheet.create({
   container: {
      margin: 21,
      backgroundColor: 'white',
      height: 150,
      width: 150
   },
   text: {
      paddingLeft: 20,
      marginBottom: 21
   },
   img: {
      width: 150,
      height: 150
   }

})