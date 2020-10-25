import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';


import Title from '../../../Lib/Title'

import Http from '../../../Lib/http'
import url from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import ListItem from '../../../Lib/Component/ListItem'
import RowIconContact from '../../../Lib/Component/RowIconContact'
import SingleProduct from '../../../Lib/Component/SigleProduct'
import Description from '../../../Lib/Component/Description'
import Header from '../../src/Component/Header'

class FiltrarProveedor extends Component {
   
   state = {
      products: '',
      proveedor: [],
      loading: false,
      producto: [],
      proveedor: [],
      gallery: []
   }

   componentDidMount() {
    console.log('DetalleProducto')
      this.getParams()
      this.getGallery()
   }

   getGallery = async () => {

      console.log("get gallery",this.props.route.params.product.id)
      const galeryURL = url.getGalery(this.props.route.params.product.id)
      const galery = await Http.instance.get(galeryURL, Http.instance.getToken())
         console.log("gallery", galery)
      const images = []
     
      galery.data.forEach(element => {
         images.push({ source: { uri: url.img + element.name } })
      });
      this.setState({ gallery: images })

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
            <Title title={"Proveedor - " + proveedor.name} />
            <RowIconContact information={proveedor} />

            <SingleProduct
               product={producto}
               proveedor={proveedor}
               navigation={this.props.navigation}
               gallery={this.state.gallery}
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