import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions } from 'react-native'
import Padding from '../../Login/Component/PaddingVertical'
import DimensionScreen from '../../Lib/Dimension'
import Btn from '../component/Btn'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const dimensionScreen = new DimensionScreen(window, screen)
let imgWidthNeto = 0


const ContainerSimpleLeft = ({data,renderItem,img}) => { 

   const [imgSize, setImgSize] = useState({ height: 0, width: 0 })
  
   const measureImg = ((event) => {
      console.log('event peroperties: ', event.nativeEvent.layout.height);
      setImgSize(
         {
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width
         }
      )
   })
   

   const heightMessure = (poss) => {
      const padding = 30
      const heightOriginal = 910
      const widthOriginal = 596
      const constanteCenter = heightOriginal / widthOriginal

      const centerToTop = imgSize.width * constanteCenter / 2
      const center = imgSize.height / 2 + padding

      const topVertical = center - centerToTop
      const TopHorizontal = center - imgSize.height / 2

      if (imgSize.width + 300 < imgSize.height) {
         
         imgWidthNeto = imgSize.width
         return topVertical + ((centerToTop * 2) / 8) * poss
      }
      else {
         imgWidthNeto= imgSize.height / constanteCenter
         return TopHorizontal + -20 + ((imgSize.height) / 8) * poss
      }
   }

   const render = () => {

      return (
         data.map(item =>
            renderItem(item, heightMessure(item.possition), imgSize.width,imgWidthNeto)

         )
      )
   }
   return (
      <View style={styles.container}>
         
         <View style={styles.imgContainer}>
            <View style= {styles.imgCon}>
            <Image
               onLayout={(event) => measureImg(event)}
               resizeMode='contain'
               source={img} style={styles.image} />

            </View>
         </View>
      {render()}
         
      </View>

   )
   
}

export default ContainerSimpleLeft
const styles = StyleSheet.create({

   container: {
      flex:1,
      //backgroundColor: "#5B68",
   },
  
   imgCon:{
     // backgroundColor: "red",
   },
   
   image: {  
      height :'100%',
     // backgroundColor: "blue",
    
      aspectRatio: 596/910
   },

   right: {
      right:0
   }
});
