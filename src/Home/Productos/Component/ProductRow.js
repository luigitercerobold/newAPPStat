import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ProductoImg from './ProductoImg'

const ProductoRow = ({ children }) => {



   return (
      <View style={styles.container}>
         {children}
      </View>

   )
}

export default ProductoRow

const styles = StyleSheet.create(
   {
      container: {
         flexDirection: "row",
         flexGrow: 2,
         flexShrink: 2,
         flexWrap: 'wrap',

      }
   }
)