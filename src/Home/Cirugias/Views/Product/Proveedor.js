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
import FiltrarPorveedore from '../../../Productos/Views/FiltrarProveedores'

class Proveedor extends FiltrarPorveedore {
   goToProductoProveedor (query){
      query.products = this.props.route.params.products
      this.props.navigation.navigate('Productos',query)

   }

  
}
export default Proveedor
   