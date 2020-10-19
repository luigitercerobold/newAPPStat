import React from 'react'
import { Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native'
import Doctors from './Doctors'
import Color from '../../../Lib/Colors'
const ListOfDoctors = ({ item, loading, onPress }) => {

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
            <ActivityIndicator color={Color.blue} size="large" />

            : <FlatList
               data={item}
               renderItem={({ item }) => <Doctors onPress={onPress} item={itemFilter(item)} />}
               numColumns={2}
               style={styles.container}
            />
         }

      </>
   )
}

export default ListOfDoctors

const styles = StyleSheet.create({
   container: {
      flex: 1,
   }

})