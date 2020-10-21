import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Button, Pressable } from 'react-native'
import Colors from '../Colors'
import Title from '../Title'
import Title3 from './Title3'
import url from '../../Lib/url'
import Description from './Description'
import StatFont from '../../Lib/Component/StatFont'


const SingleProduct = ({ product, proveedor,navigation,gallery}) => {

  

  
   const categorias = (categorias) => {
      if (categorias) {
         return (categorias.map(categoria => <StatFont key={categoria.id} >{categoria.name}</StatFont>))
      }
   }

   return (
      <View>
         <View style={styles.containerImg}>
            <View style={styles.img}>
               <Pressable
                  onPress= {()=>navigation.navigate('Gallery',{img:gallery
               })}
               >
               <Image style={styles.img} source={{
                  uri: url.img + product.image,
               }}></Image>
               </Pressable>
               

            </View>
            <StatFont>Marca del producto</StatFont>
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

