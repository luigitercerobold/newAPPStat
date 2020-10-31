
import React, { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator, Pressable } from 'react-native';

import Title from '../../../Lib/Title'

import ActivityIndicatorStat from '../../../Lib/Component/ActivitiIndicator'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ProuductRow from '../Component/ProductRow'
import ProuductIMG from '../Component/ProductoImg'
import AddBottom from '../../../Lib/AddBottom'

import Drawer from '../../../Drawer/DrawerMenu'
import SimpleButton from '../../../Lib/Component/BotonSiemple'

import ProviderSearch from '../Component/ProviderSearch'
import EmptyData from '../../../Lib/Component/EmptyData'
class Productos extends Component {
   constructor(props) {
      super(props)
      this.goToDetalleProdcuto.bind(this)
   }

   state = {

      producto: [],
      loading: false,
      selectProduct: "",
      proveedor: [],
      bodyPart: [],
      allProducto: []
   }


   componentDidMount() {
console.log("----",this.props.route.params.proveedor)
      this.getProdcuts();
      this.setState({
         proveedor: this.props.route.params.proveedor,
         bodyPart: this.props.route.params.body,

      })
   }

   getProdcuts = async () => {

      this.setState({ loading: true })

      const body = JSON.stringify({
         providerId: this.props.route.params?.providerId + "",
         bodyPartId: this.props.route.params?.body.id
      })
      const obj = await http.instance.post(urlStat.getProviderProducts, body, http.instance.getToken(),)
      this.setState({ allProducto: obj.data, producto: obj.data, loading: false })

   }

   onPress = (item) => {

      const query = {
         product: item,
         proveedor: this.props.route.params.proveedor,
      }
      this.goToDetalleProdcuto(query)

   }

   goToDetalleProdcuto(query) {

      this.props.navigation.navigate('DetalleProducto', query)

   }


   listas = (item) => {
    
      return (
         <ProuductIMG
            onPress={() => this.onPress(item.item)}
            product={item.item}
            key={item.item.id}
         >{item.item.name}</ProuductIMG>
      )

   }

   referenceDrawer = () => {

      console.log(this.refDrawer.drawer.openDrawer())

   }

   categoriesFilter = (query) => {

      console.log(query)
      const { allProducto } = this.state
      const providerFiltered = allProducto.filter(producto => {
         for (let canCategori = 0; canCategori < producto.categories.length; canCategori++) {
            const element = producto.categories[canCategori];
            if (element.id === query.id) {
               return producto
            }
         }
      })
      this.setState({ producto: providerFiltered })

   }
   handleSearch = (query) => {
      const { allProducto } = this.state
      const providerFiltered = allProducto.filter(producto => {
         return producto.name.toLowerCase().includes(query.toLowerCase())
      })
      this.setState({ producto: providerFiltered })
   }


   render() {
      const { producto, loading, proveedor, bodyPart,allProducto } = this.state
      return (

         <Drawer
            ref={drawer => this.refDrawer = drawer}
            onPress={this.categoriesFilter}
         >
            <View style = {{ flex:1}}>

               <View style={styles.categories}>
                  <Title title={proveedor.companyName} />
                  <SimpleButton
                     title='Categorías'
                     onPress={this.referenceDrawer}
                  />
               </View>
               <ProviderSearch style={styles.search} onChange={this.handleSearch} />
               {loading
                  ? <ActivityIndicatorStat color={color.blue} size="large" />
                  :  <FlatList
                  data={producto}
                  renderItem={this.listas}
                  numColumns={2}
                  style={styles.scroll}
                  ListEmptyComponent={() => <EmptyData />}
               />
               }
               
               <AddBottom />
            </View>
         </Drawer>

      )
   }

}

export default Productos;

const styles = StyleSheet.create({
   flatList: {
      height: 150,
      flexGrow: 0
   },
   scroll: {
      height: '73%'
   },
   categories: {
      flexDirection: "row",
      alignItems: 'center',
      alignContent: "center",
      justifyContent: "space-evenly"
   },search:{
      //width:225
   }
})