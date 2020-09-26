import React from 'react'
import { View,Image,StyleSheet, Text} from 'react-native'
import Colors from 'newAPPStat/src/Lib/Colors'

const Add = ({img})=> {
   return(
      <View style={styles.container}>
         <Text>
            Anuncio
         </Text>
      </View>
   )
}

export default Add

const styles = StyleSheet.create(
   {
      container:{
         top:0,
         right:0,
         left:0,
         paddingTop:"56.55%",
         backgroundColor:Colors.add,
         position:"relative"
      }
   }
)
