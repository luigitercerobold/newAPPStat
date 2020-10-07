import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import Colors from '../Colors'
import Title from '../Title'
import Title3 from './Title3'
import url from '../../Lib/url'
import Description from './Description'

const SingleProduct = ({ product, proveedor }) => {

   console.log(product)

   const categorias = (categorias) => {
     console.log('categoria',categorias)
     if (categorias) {
      return (categorias.map(categoria => <Text key={categoria.id} >{categoria.name}</Text>))
     }
   }
   return (
      <View>
         <View style={styles.containerImg}>
            <View style={styles.img}>
               <Image style={styles.img} source={{
                  uri: url.img + product.image,
               }}></Image>

               

            </View>
            <Text>Marca del producto</Text>
            <Title title={product.name} />

            {categorias(product.categories)}
             
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

