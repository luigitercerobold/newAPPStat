import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, Button, Pressable } from 'react-native'
import Colors from '../Colors'
import Title from '../Title'
import Title3 from './Title3'
import url from '../../Lib/url'
import Description from './Description'
import StatFont from '../../Lib/Component/StatFont'


const SingleProduct = ({ product, proveedor, navigation, gallery }) => {




   const categorias = (categorias) => {

      if (categorias) {
         return (categorias.map(categoria => <StatFont key={categoria.id} >{categoria.name}</StatFont>))
      }
   }

   return (
      <View>
         <View style={styles.containerImg}>
            <View >
               <Pressable
                  onPress={() => navigation.navigate('Gallery', {
                     img: gallery
                  })}
               >
                  <Image style={styles.img} source={{
                     uri: url.img + product.image,
                  }}></Image>

                  <StatFont style={{marginVertical:10,textAlign:'center',fontSize:12,color:Colors.blue}}>Ver Galería</StatFont>
               </Pressable>


            </View>
            <View style={{ flexDirection: "row", alignContent: "space-between", alignItems: 'center', marginTop: 15 }}>
               <StatFont>Marca del producto</StatFont>
               <Image source={{ uri: `https://www.countryflags.io/${product?.country?.iso}/flat/64.png` }} style={{ width: 15, height: 15, marginHorizontal: 10 }}></Image>
            </View>
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
         alignItems: 'center',
         
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

