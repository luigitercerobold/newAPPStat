import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Colors from '../Colors'
import Title from '../Title'
import Title3 from './Title3'
import Description from './Description'

const SingleProduct = ({ product, proveedor }) => {
   return (
      <View>
         <View style={styles.containerImg}>
            <View style={styles.img}></View>
            <Text>Marca del producto</Text>
            <Title title={product.name} />
            <Text>Categoria 1</Text>
         </View>
         <View>
            <Description description={product.description}></Description>
         </View>

      </View>
   )

}
export default SingleProduct

const styles = StyleSheet.create(
   {
      containerImg: {
         justifyContent: 'center',
         alignContent: 'center',
         alignItems: 'center'

      },
      img: {
         height: 150,
         width: 150,
         backgroundColor: 'white'
      },
      marca: {
         color: Colors.gray
      },
   }
)

