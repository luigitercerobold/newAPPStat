import React from 'react'
import { View,Image,StyleSheet, Text} from 'react-native'
import Colors from 'newAPPStat/src/Lib/Colors'

const AddBottom = ({img})=> {
   return(
      <View style={styles.container}>
         <Text>
            Anuncio
         </Text>
      </View>
   )
}

export default AddBottom

const styles = StyleSheet.create(
   {
      container:{
         bottom:25,
         right:0,
         left:0,
         paddingTop:"18%",
         backgroundColor:Colors.add,
         justifyContent: 'flex-end',
         
      }
   }
)
