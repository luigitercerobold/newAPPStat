import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions } from 'react-native'
import Padding from '../../Login/Component/PaddingVertical'
import DimensionScreen from '../../Lib/Dimension'
import Btn from '../component/Btn'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const dimensionScreen = new DimensionScreen(window, screen)
let imgWidthNeto = 0

const ContainerImg = ({ craneo, data, renderItem }) => {
  
   const [imgSize, setImgSize] = useState({ height: 0, width: 0 })

   const measureImg = ((event) => {
     
      setImgSize(
         {
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width
         }
      )
   })

   const heightMessure = (poss) => {
      const padding = 40
      const heightOriginal = 930
      const widthOriginal = 496
      const constanteCenter = heightOriginal / widthOriginal

      const centerToTop = imgSize.width * constanteCenter / 2
      const center = imgSize.height / 2 + padding

      const topVertical = center - centerToTop
      const TopHorizontal = center - imgSize.height / 2

      if (imgSize.width  < imgSize.height && imgSize.height /imgSize.width >heightOriginal/widthOriginal) {
         
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
            <View style={styles.imgCon}>
               <Image
                  onLayout={(event) => measureImg(event)}
                  resizeMode='contain'
                  source={require('newAPPStat/assets/img/Esqueleto/STAT-esqueleto-72.png')} style={styles.image} />

            </View>
         </View>
         {render()}
      </View>

   )
}

export default ContainerImg
const styles = StyleSheet.create({

   container: {
      flex: 1,
      flexDirection: "column",
      //backgroundColor: "#5B68",

   },
   imgContainer: {
      paddingHorizontal: 98,
      paddingVertical: 30,

   },
   imgCon: {
      //backgroundColor: "red",
      position: 'relative',

   }
   ,
   image: {

      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: '100%',
      height: '100%',
      // position: 'absolute',
     // backgroundColor: "blue",

   },

   pelvis: {
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      position: 'absolute',

      margin: 0,
      padding: 0,
      backgroundColor: 'red',
   },

   right: {
      right: 0
   }


});
