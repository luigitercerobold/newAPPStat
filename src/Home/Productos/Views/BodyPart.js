import React from 'react';
import { Component } from 'react';
import {View,FlatList, Button,Text,ScrollView,StyleSheet} from 'react-native';
import BodyPart from  '../../../Lib/BodyParts'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url'
import Esqueleto from '../../../Esqueleto/container/Esqueleto'
class BodyProducto extends Esqueleto {

   onPress ( item,view) {
      this.props.navigation.navigate('FiltrarProveedores',{body:item})
   }
 
}
export default BodyProducto;

