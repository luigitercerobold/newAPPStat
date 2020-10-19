import React from 'react'
import { Text, FlatList, View,StyleSheet,Image, Pressable} from 'react-native'
import urlStat from '../../../Lib/url'


const Doctors =({ item, onPress }) => {

   const onPressable = () => {
     onPress(item)
      
   } 
   return (
      <Pressable style = {styles.container}
         onPress = {onPressable}
      >
         <Image 
         style = {styles.img}
            source = {{uri: urlStat.img + item.photo}}
         />
         <Text style ={styles.text} >{item.name}</Text>
         
      </Pressable>
   )
}

export default Doctors

const styles = StyleSheet.create({
   container: {
      margin:15,
      width:150,
      alignContent:'center',
      justifyContent:'center',
      alignItems:'center'
      
   },
   img: {
      height:125,
      width:125
   },
   text: {
      maxWidth:150,
      width:150,
      textAlign:'center'
   }

})