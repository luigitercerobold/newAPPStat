import React from 'react';
import { Component } from 'react';
import {View,FlatList, Button,Text,ScrollView,StyleSheet} from 'react-native';
import ButtonAddProduct from './Component/ButtonAddProduct'
import ListButton from '../../Component/ListButton'
import Title from '../../../../Lib/Title'
import bodyPart from  'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../Component/Listitem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import BodyParts from '../../../../Lib/BodyParts'
import Esqueleto from '../../../../Esqueleto/container/Esqueleto'


class Body extends Esqueleto {
   state={
      products:bodyPart,
      loading:false
   }
   
   componentDidMount(){
      this.getBoddy()
   }

   onPress ( item) {
      this.props.navigation.navigate('Proveedor',{
         body:item,
         products:this.props.route.params.products
      })
   }

 
   getBoddy = async () => {
      this.setState({ loading: true })
      const proveedor = await http.instance.get(urlStat.getBoddy, http.instance.getToken())
      this.setState({ products: proveedor.data, loading: false })
      console.log(this.state.products)
      return proveedor
   }


}
export default Body;

const styles = StyleSheet.create({
   flatList: {
      height: 300,
    
      flexGrow: 0
    }
})