


   
    import React from 'react';
import { Component } from 'react';
import {View,FlatList, Button,Text,ScrollView,StyleSheet} from 'react-native';

import Title from '../../../../Lib/Title'
import bodyPart from  'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../Component/Listitem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import Esqueleto from '../../../../Esqueleto/container/Esqueleto'


class Body extends Esqueleto {
  
   onPress ( item,view) {
      this.props.route.params.body = item
      this.props.navigation.navigate('Procedimiento',this.props.route.params)
   }
   
}
export default Body;

const styles = StyleSheet.create({
   flatList: {
      height: 300,
    
      flexGrow: 0
    }
})