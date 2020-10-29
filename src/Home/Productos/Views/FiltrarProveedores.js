import React from 'react';
import { Component } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';


import Title from '../../../Lib/Title'
import Color from '../../../Lib/Colors'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ListItem from '../../../Lib/Component/ListItem'
import Header from '../../src/Component/Header'
import ProviderSearch from '../Component/ProviderSearch'
import ActivityIndicatorStat from '../../../Lib/Component/ActivitiIndicator'

class FiltrarProveedor extends Component {
   constructor(props) {
      super(props)
      this.goToProductoProveedor.bind(this)
   }

   state = {
      products: '',
      proveedor: [],
      loading: false,
      allProvider: []
   }

   componentDidMount() {
      this.getProvider()
   }

   getProvider = async () => {
      this.setState({ loading: true })

      const body = JSON.stringify({
         bodyPartId: this.props.route.params?.body.id + ""
      })
      const proveedor = await http.instance.post(urlStat.getByBodypart, body, http.instance.getToken())
      this.setState({ proveedor: proveedor.data, loading: false, allProvider: proveedor.data })
      console.log('provvedores', this.state.proveedor)
      return proveedor
   }

   handlePress = (item) => {
      const query = {
         body: this.props.route.params?.body,
         proveedor: item,
         providerId: item.id
      }
      this.goToProductoProveedor(query)
   }

   goToProductoProveedor(query) {
      this.props.navigation.navigate('ProductosProveedor', query)

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
               renderItem={({ item }) => <ListItem  name={item.companyName} key={item.id} onPress={() => this.handlePress(item)} item={item} />}
            />
         </View>
      )
   }

}
export default FiltrarProveedor;

const styles = StyleSheet.create({
   flatList: {
      marginTop: 45,
      flexGrow: 0,
   },
   container: {
      flex: 1
   },
   containerTittle: {
      flexDirection: "row",
      alignItems: 'center',
      alignContent: "center",
      justifyContent: "space-evenly"
   },
   search: {
      width: 225
   }
})

