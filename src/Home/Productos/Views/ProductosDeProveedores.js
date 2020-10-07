import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';

import Title from '../../../Lib/Title'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../../Lib/Component/ListItem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ProuductRow from '../Component/ProductRow'
import ProuductIMG from '../Component/ProductoImg'
import AddBottom from '../../../Lib/AddBottom'


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
      console.log('producto de proveedor', this.props.route.params)
      this.setState({
         proveedor: this.props.route.params.proveedor,
         bodyPart: this.props.route.params.body,

      })
   }
   getProdcuts = async () => {
      this.setState({ loading: true })
      console.log("poss id",this.props.route.params?.body.id )
      const body = JSON.stringify({
         providerId: this.props.route.params?.providerId + "",
         bodyPartId: this.props.route.params?.body.id 
      })
      const obj = await http.instance.post(urlStat.getProviderProducts, body, http.instance.getToken(),)
      this.setState({ producto: obj.data, loading: false })
      console.log(this.state.producto)

   }

   onPress = (item) => {
      console.log(item)

      this.props.navigation.navigate('DetalleProducto', {
         product: item
         ,
         proveedor: this.props.route.params.proveedor,
      })
   }
   listas = () => {
      return this.state.producto.map(product => (
         <ProuductIMG
            onPress={() => this.onPress(product)}
            product = {product}
         >{product.name}</ProuductIMG>
      ))
   }
   render() {
      const { producto, loading, proveedor, bodyPart } = this.state

      return (
         <View>{loading ?
            <ActivityIndicator color={color.blue} size="large" /> : null
         }
            <Title title={proveedor.name} />
            {/* <FlatList
               data={producto}
               style={styles.flatList}
               renderItem={({ item }) => <ListItem onPress={()=>this.handlePress(item)} item={item.name} />}
            /> */}
            <ScrollView
            style ={styles.scroll}>
               <ProuductRow
                  
               >
                  {this.listas()}
               </ProuductRow>
            </ScrollView>

            <AddBottom />
         </View>
      )
   }

}
export default Productos;

const styles = StyleSheet.create({
   flatList: {
      height: 150,
      flexGrow: 0
   },
   scroll:{
      height:'80%'
   }
})