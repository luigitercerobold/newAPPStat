import React from 'react';
import { Component } from 'react';
import {View,FlatList, Button,Text,ScrollView,StyleSheet} from 'react-native';
import BodyPart from  '../../../Lib/BodyParts'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url'
class BodyProducto extends Component {
   state={
      products:'',
      loading:false
   }
   componentDidMount(){
      this.getBoddy();
   }

   handlePress = (item) => {
     
      this.props.navigation.navigate('FiltrarProveedores',{body:item})
   } 
   getBoddy = async () => {
      this.setState({ loading: true })
      const proveedor = await Http.instance.get(urlStat.getBoddy, Http.instance.getToken())
      this.setState({ products: proveedor.data, loading: false })
      console.log(this.state.products)
      return proveedor
   }
  render(){
     return(
      <BodyPart
         products={this.state.products}
         handlePress = {this.handlePress}
      />
     )
  }

}
export default BodyProducto;

