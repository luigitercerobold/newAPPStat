
import React, { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator, Pressable } from 'react-native';

import Title from '../../../Lib/Title'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../../Lib/Component/ListItem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ProuductRow from '../Component/ProductRow'
import ProuductIMG from '../Component/ProductoImg'
import AddBottom from '../../../Lib/AddBottom'
import Header from '../../src/Component/Header'
import Drawer from '../../../Drawer/DrawerMenu'
import SimpleButton from '../../../Lib/Component/BotonSiemple'
class Productos extends Component {


   state = {

      producto: [],
      loading: false,
      selectProduct: "",
      proveedor: [],
      bodyPart: []
   }
   componentDidMount() {
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
      this.setState({ producto: obj.data, loading: false })


   }

   onPress = (item) => {

      this.props.navigation.navigate('DetalleProducto', {
         product: item,
         proveedor: this.props.route.params.proveedor,
      })
   }
   listas = () => {
      return this.state.producto.map(product => (
         <ProuductIMG
            onPress={() => this.onPress(product)}
            product={product}
         >{product.name}</ProuductIMG>
      ))
   }
   referenceDrawer = () => {
      console.log(this.refDrawer.drawer.openDrawer())
   }
   render() {
      const { producto, loading, proveedor, bodyPart } = this.state

      return (

         <Drawer
            ref={drawer => this.refDrawer = drawer}
         >
            <View>
               {loading
                  ? <ActivityIndicator color={color.blue} size="large" />
                  : null
               }

               <View style={styles.categories}>
                  <Title title={proveedor.name} />
                  <SimpleButton
                     title='categorías'
                     onPress= {this.referenceDrawer}
                  />
               </View>
               <ScrollView
                  style={styles.scroll}>
                  <ProuductRow>
                     {this.listas()}
                  </ProuductRow>
               </ScrollView>
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
      height: '80%'
   },
   categories:{
      flexDirection:"row"
   }
})