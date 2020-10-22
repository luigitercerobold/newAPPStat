import React, { useState, useEffect } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import Http from '../../Lib/http'
import Url from '../../Lib/url'
import User from '../../Lib/user'
import TextMenu from '../../Drawer/Component/TextMenu'
const Drawer = ({ onPress, close }) => {

   const [categories, setCategories] = useState([])
   useEffect(() => {
      getCategories()

   }, []

   )

   const getCategories = async () => {
      console.log(User.instance)
      const categories = await Http.instance.get(Url.getCategories, Http.instance.getToken())
      setCategories(categories.data)

   }
   const handlePress = (item) => {
      onPress(item)
      setTimeout(() => { close() }, 500);
   }

   return (
      <>

         <FlatList
            data={categories}
            renderItem={({ item }) => <Button key={item.id} title={item.name} onPress={() => handlePress(item)} />}
         />
      </>


   )
}

export default Drawer


const Button = ({ onPress, title }) => {
   return (
      <View style={styles.container}>

         <TextMenu
            title={title}
            onPress={onPress}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {


      flex: 1,
      justifyContent: 'center'

   }

})