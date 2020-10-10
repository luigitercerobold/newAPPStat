import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';


import Title from '../../../Lib/Title'

import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ListItem from '../../../Lib/Component/ListItem'
import Header from '../../src/Component/Header'

class FiltrarProveedor extends Component {
   state = {
      products: '',
      proveedor: [],
      loading: false
   }
   componentDidMount() {
      this.getProvider()
   }
   getProvider = async () => {
      this.setState({ loading: true })
      
      const body = JSON.stringify({
         bodyPartId:this.props.route.params?.body.id+""
      })
      const proveedor = await http.instance.post(urlStat.getByBodypart,body,http.instance.getToken())
      this.setState({ proveedor: proveedor.data, loading: false })
      console.log('provvedores',this.state.proveedor)
      return proveedor
   }

   handlePress = (item) => {
      console.log(item.id)
      this.props.navigation.navigate('ProductosProveedor',{
         body:this.props.route.params?.body,
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
            <Title title="Proveedores" />
            <FlatList
               data={proveedor}
               style={styles.flatList}
               renderItem={({ item }) => <ListItem onPress={() => this.handlePress(item)} item={ item.id+" " +  item.name} />}
            />
         
         </View>
      )
   }

}
export default FiltrarProveedor;

const styles = StyleSheet.create({
   flatList: {
      height: 300,

      flexGrow: 0
   }
})