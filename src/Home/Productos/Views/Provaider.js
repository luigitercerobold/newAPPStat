import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

import Title from '../../../Lib/Title'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../../Lib/Component/ListItem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'


class Proveedor extends Component {
   state = {
      products: bodyPart,
      proveedor: [],
      loading: false
   }
   componentDidMount() {
      this.getProvider()
   }
   getProvider = async () => {
      this.setState({ loading: true })
      const proveedor = await http.instance.get(urlStat.getProveedor, http.instance.getToken())
      this.setState({ proveedor: proveedor.data, loading: false })
      console.log(this.state.proveedor)
      return proveedor
   }

   handlePress = (item) => {
      console.log(item.id)
      this.props.navigation.navigate('ProductosProveedor',{
         
         body:{id:null},
         proveedor:item,
         providerId:item.id
      })
   }
   render() {
      const { products, proveedor, loading } = this.state
      return (
         <View>{loading ?
            <ActivityIndicator color={color.blue} size="large" /> : null
         }
            <Title title="Proveedor" />
            <FlatList
               data={proveedor}
               style={styles.flatList}
               renderItem={({ item }) => <ListItem onPress={() => this.handlePress(item)} item={ item.id+" " +  item.name} />}
            />
         </View>
      )
   }

}
export default Proveedor;

const styles = StyleSheet.create({
   flatList: {
      marginTop:20,
      flexGrow: 0
   }
})