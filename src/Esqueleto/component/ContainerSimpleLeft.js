import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions } from 'react-native'
import Padding from '../../Login/Component/PaddingVertical'
import DimensionScreen from '../../Lib/Dimension'
import Btn from '../component/Btn'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const dimensionScreen = new DimensionScreen(window, screen)

let imgWidthBruto = 0;

const ContainerSimpleLeft = ({ data, renderItem, img }) => {

   const [imgSize, setImgSize] = useState({ height: 0, width: 0 })
   const [dimensions, setDimensions] = useState({ window, screen });
   //const [imgWidthBruto,setImgWidthBruto] = useState(0)
   const measureImg = ((event) => {

      setImgSize(
         {
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width
         }
      )
   })


   const onChange = ({ window, screen }) => {
      setDimensions({ window, screen });

   };
   useEffect(() => {
      Dimensions.addEventListener("change", onChange);
      return () => {
         Dimensions.removeEventListener("change", onChange);
      };
   });



   const heightMessure = (poss) => {
      const padding = 20
      const heightOriginal = 910
      const widthOriginal = 596
      const constanteCenter = heightOriginal / widthOriginal

      const centerToTop = imgSize.width * constanteCenter / 2
      const center = imgSize.height / 2 + padding

      const topVertical = center - centerToTop
      const TopHorizontal = center - imgSize.height / 2 //top de 

      const imgAsScreem = imgSize.height / dimensions.window.width


      if (constanteCenter < imgAsScreem) {
         console.log("mas  alta")
         imgWidthNeto = imgSize.width + 10
         imgWidthBruto = 0
         imgWidthBruto = (imgSize.width)

         return topVertical + ((centerToTop * 2) / 8) * poss
      }
      else {
         // los -10 son de un padinng que se encuentra en los boones 
         console.log("mas  ancha", dimensions.window.width, dimensions.window.height, imgSize.width)
         imgWidthNeto = imgSize.height / constanteCenter
         //imgSize.width= dimensions.window.width*2 
         imgWidthBruto = (dimensions.window.width * 2) - imgSize.width * .90
         return ((imgSize.height) / 8) * poss
      }
   }

   const render = () => {

      return (
         data.map(item =>
            //item, top,imgWidthBruto,imgWidthNeto
            renderItem(item, heightMessure(item.possition), imgWidthBruto, imgWidthNeto)

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
      flex: 1,
      //backgroundColor: "#5B68",
   },

   imgCon: {
      //backgroundColor: "red",
   },

   image: {
      height: '100%',
      //backgroundColor: "blue",
      aspectRatio: 596 / 910
   },

   right: {
      right: 0
   }
});
