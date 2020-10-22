import React from 'react'
import {View, Image, StyleSheet} from 'react-native'

const Card = ({img}) => {
   return(
      <View style={[styles.iconFrame, { marginRight: 3, marginTop: 10 }]}>
         <View style={styles.imgCenter}>
            <Image style={styles.imgContainer} source={img}  resizeMode='contain'/>
         </View>
      </View>
   )
}

export default Card;

const styles = StyleSheet.create({
   iconFrame: {
      justifyContent: 'center',
      
      // paddingLeft:90,
      height: 125,
      width: 125,
      
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 10,
      //shadowOffset: {height: 100, width: 100},
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 8,
    },
    imgCenter:{
      justifyContent:"center",
      alignItems:"center"
    },
    imgContainer:{
      width:66,
      height:66
    },

})

