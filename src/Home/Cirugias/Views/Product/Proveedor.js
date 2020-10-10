import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import ButtonAddProduct from './Component/ButtonAddProduct'
import ListButton from '../../Component/ListButton'
import Title from '../../../../Lib/Title'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../Component/Listitem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import Header from '../../../src/Component/Header'

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
      this.props.navigation.navigate('Productos',{
         body:this.props.route.params?.body,
         proveedor:item,
         providerId:item.id,
         products:this.props.route.params.products
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
      height: 300,

      flexGrow: 0
   }
})