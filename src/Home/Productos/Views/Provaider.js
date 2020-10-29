import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

import Title from '../../../Lib/Title'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../../Lib/Component/ListItem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ProviderSearch from '../Component/ProviderSearch'
import ActivityIndicatorStat from '../../../Lib/Component/ActivitiIndicator'

class Proveedor extends Component {
   state = {

      products: bodyPart,
      proveedor: [],
      loading: false,
      allProvider: []

   }

   componentDidMount() {

      this.getProvider()

   }

   getProvider = async () => {

      this.setState({ loading: true })
      const proveedor = await http.instance.get(urlStat.getProveedor, http.instance.getToken())
      this.setState({ proveedor: proveedor.data, loading: false, allProvider: proveedor.data })
    
      return proveedor
   }

   handlePress = (item) => {

      const passProveedor = {
         body: { id: null },
         proveedor: item,
         providerId: item.id
      }

      this.gotoProductoProveedor(passProveedor)

   }

   gotoProductoProveedor(passProveedor) {

      this.props.navigation.navigate('ProductosProveedor', passProveedor)
   }

   handleSearch = (query) => {

      const { allProvider } = this.state
      const providerFiltered = allProvider.filter(provider => {
         return provider.name.toLowerCase().includes(query.toLowerCase())
      })
      this.setState({ proveedor: providerFiltered })

   }

   render() {
      const { products, proveedor, loading } = this.state
      return (
         <View style={styles.container}>
            <View style = {styles.containerTittle}>
               <Title title="Proveedor" />
               <ProviderSearch style={styles.search} onChange={this.handleSearch} />
            </View>

            {loading ?
               <ActivityIndicatorStat color={color.blue} size="large" /> : null
            }
            <FlatList
               data={proveedor}
               style={styles.flatList}
               renderItem={({ item }) => <ListItem  name={item.companyName}key={item.id} onPress={() => this.handlePress(item)} item={item} />}
            />
         </View>
      )
   }
}

export default Proveedor;

const styles = StyleSheet.create({
   flatList: {
      marginTop:45,
      flexGrow: 0,
   },
   container: {
      flex: 1
   },
   containerTittle:{
      flexDirection:"row",
      alignItems:'center',
      alignContent:"center",
      justifyContent:"space-evenly"
   },
   search:{
      width:225
   }
})