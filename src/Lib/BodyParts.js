import React from 'react'
import {View,FlatList,StyleSheet} from 'react-native'
import Title from '../Lib/Title'
import ListItem from '../Lib/Component/ListItem'

const BodyParts = ({products,handlePress}) => {
   return(
      <View>
         <Title title="Elige la parte del cuerpo"/>
         <FlatList
            data={products}
            style={styles.flatList}
            renderItem={({ item }) => <ListItem onPress={()=>handlePress(item)} item={item.name} />}
         />
      </View>
   )
}
export default BodyParts;
const styles = StyleSheet.create({
   flatList: {
      height: '80%',
    
      flexGrow: 0
    }
}) 