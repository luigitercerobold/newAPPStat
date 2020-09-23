import React from 'react'
import { Text, View, StyleSheet} from 'react-native'

const Padding = (props) =>{
      const childer = props.children
      const vertical =props.vertical
   return(
      <View style={{paddingVertical: 15 +3 *vertical}}>
         {childer}
  
      </View>

   )
}
export default Padding

const styles = StyleSheet.create({
   container:{
      paddingVertical:150
   }

})