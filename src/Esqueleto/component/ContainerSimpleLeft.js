import React, { useState, useEffect } from 'react'
import { Image, ImageBackground, Text, View, StyleSheet, Dimensions } from 'react-native'
import Padding from '../../Login/Component/PaddingVertical'
import DimensionScreen from '../../Lib/Dimension'
import Btn from '../component/Btn'


const ContainerSimpleLeft = ({data,renderItem}) => { 
   const [imgSize, setImgSize] = useState({ height: 0, width: 0 })
   useEffect(() => {
      Dimensions.addEventListener("change", onChange);
      return () => {
         Dimensions.removeEventListener("change", onChange);
      };
   });
   const measureImg= ((event) => {
      console.log('event peroperties: ', event.nativeEvent.layout.height);
      setImgSize(
         {
            height: event.nativeEvent.layout.height,
            width: event.nativeEvent.layout.width
         }
      )
   })

   const newMessure = ((poss) => {
      const padding = 30
      const heightOriginal = 910
      const widthOriginal = 596
      const constanteCenter = heightOriginal/widthOriginal 
      
      const centerToTop = imgSize.width * constanteCenter / 2       
      const center = imgSize.height/2 + padding

      const topVertical =  center - centerToTop
      const TopHorizontal = center - imgSize.height/2
            
      if(imgSize.width+300<imgSize.height )
         return topVertical + ((centerToTop *2)/8) * poss
      else{
         return TopHorizontal + ((imgSize.height)/8.4) * poss
      }
   })

   const render=()=>{
      
      return (
      data.map(item =>
         renderItem(item,newMessure(item.possition))
        
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
               source={require('newAPPStat/assets/img/Esqueleto/STAT-esqueleto-regiones-74.png')} style={styles.image} />

            </View>
         </View>
      {render()}
         
        
        
         
      </View>

   )
}

export default ContainerSimpleLeft
const styles = StyleSheet.create({

   container: {
      backgroundColor: "#5B68",
   },
  
   imgCon:{
      backgroundColor: "red",
   },
   
   image: {  
      height: '100%',
      backgroundColor: "blue",
      paddingLeft:0,
      aspectRatio: 1/1.9
   },
   
   pelvis: {
      color: "white",
      fontSize: 10,
      fontWeight: "bold",
      position: 'absolute',
      backgroundColor: 'red',
   },

   right: {
      right:0
   }
});
