import React from 'react'
import { Text, FlatList, StyleSheet } from 'react-native'
import Doctors from './Doctors'
import Color from '../../../Lib/Colors'
import ActivityIndicatorStat from '../../../Lib/Component/ActivitiIndicator'
const ListOfDoctors = ({ item, loading, onPress,cancel }) => {

   const itemFilter = (item) => {
      if (item.contact === undefined || item.contact === null) {
         return item
      } else {

         return item.contact
      }
   }
   return (
      <>
         {loading ?
            <ActivityIndicatorStat color={Color.blue} size="large" />

            : null
         }
         <FlatList
            data={item}
            renderItem={({ item }) => <Doctors cancel={()=>cancel(item)}onPress={onPress} item={itemFilter(item)} />}
            numColumns={2}
            style={styles.container}
         />

      </>
   )
}

export default ListOfDoctors

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }

})