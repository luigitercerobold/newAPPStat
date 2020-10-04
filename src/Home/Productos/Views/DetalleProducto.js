import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';


import Title from '../../../Lib/Title'

import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ListItem from '../../../Lib/Component/ListItem'
import RowIconContact from '../../../Lib/Component/RowIconContact'
import SingleProduct from '../../../Lib/Component/SigleProduct'
import Description from '../../../Lib/Component/Description'

class FiltrarProveedor extends Component {
   state = {
      products: '',
      proveedor: [],
      loading: false,
      producto: [],
      proveedor: []
   }
   componentDidMount() {
      console.log("producto", this.props.route.params.product)
      console.log("proveedor", this.props.route.params.proveedor)
      this.getParams()
   }
   getParams = () => {
      this.setState(
         {
            producto: this.props.route.params.product,
            proveedor: this.props.route.params.proveedor
         }

      )
   }

   handlePress = (item) => {

   }
   render() {
      const { producto, proveedor, loading } = this.state
      return (
         <View>{loading ?
            <ActivityIndicator color={color.blue} size="large" /> : null
         }
            <Title title={"Proveedor - " + proveedor.name }/>
            <RowIconContact />
            
            <SingleProduct
               product={producto}
               proveedor={proveedor}
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