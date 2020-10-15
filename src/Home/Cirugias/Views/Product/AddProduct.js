import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator, Image } from 'react-native';
import ButtonAddProduct from './Component/ButtonAddProduct'
import ListButton from '../../Component/ListButton'
import Title from '../../../../Lib/Title'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../Component/Listitem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import { TextInput } from 'react-native-gesture-handler';
import Header from '../../../src/Component/Header'
import DetalleProducto from '../../../Productos/Views/DetalleProducto'

class AddProducto extends Component {
   state = {
      chage: [],
      comment: ""
   }
   componentDidMount() {

   }


   onChangeText = (comment) => {
      this.setState({comment})
   }
   onPress = () => {
      this.props.route.params.product.provider = this.props.route.params.proveedor
      this.props.route.params.product.comment = this.state.comment
      this.props.route.params.product.productId = this.props.route.params.productId

      this.props.route.params.products.push(this.props.route.params.product)
      
      this.props.navigation.navigate("AgendarProducto", {product :this.state.chage} )

   }

   render() {

      return (
         <>
            <ScrollView>
               <DetalleProducto {...this.props} />

               <UselessTextInput
                  placeholder ="Comentario"
                  multiline
                  numberOfLines={4}
                  onChangeText={text => this.onChangeText(text)}
                  value={this.state.comment}
                  style = {{marginHorizontal:30}}
                  
               />
               <ListButton title="Confirmar" onPress={this.onPress} />
            </ScrollView>

         </>

      )
   }

}
export default AddProducto;


const UselessTextInput = (props) => {
   return (
      <TextInput
         {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
         editable
         maxLength={40}
         
      />
   );
}
