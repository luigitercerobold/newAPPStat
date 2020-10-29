import React from 'react';
import { Component } from 'react';
import { Alert, ScrollView, } from 'react-native';
import ButtonAddProduct from './Component/ButtonAddProduct'
import ListButton from '../../Component/ListButton'

import { TextInput } from 'react-native-gesture-handler';
import Header from '../../../src/Component/Header'
import DetalleProducto from '../../../Productos/Views/DetalleProducto'
import Http from '../../../../Lib/http';
import urlStat from '../../../../Lib/url';


class AddProducto extends Component {
   state = {
      chage: [],
      comment: ""
   }
   componentDidMount() {

   }


   onChangeText = (comment) => {
      this.setState({ comment })
   }

   onPress = () => {

      if (this.state.comment === "") {
         Alert.alert('Producto', "Agregue un comentario para que el proveedor pueda identificar su pedido")
      } else {

         if (this.props.route.params.schedule) {

            this.OnDemandChange()

         } else {

            this.addProduct()

         }
      }



      // if (this.state.comment === "") {
      //    Alert.alert('Producto', "Agregue un comentario para que el proveedor pueda identificar su pedido")
      // } else {

      //    this.props.route.params.product.provider = this.props.route.params.proveedor
      //    this.props.route.params.product.comment = this.state.comment + ""
      //    this.props.route.params.product.productId = this.props.route.params.product.id
      //    this.props.route.params.products.push(this.props.route.params.product)
      //    this.props.navigation.navigate("AgendarProducto", { product: this.state.chage })
      // }

   }
   ///api/schedule/product {productId: 2, message: "test message", scheduleId: 1}
   addProduct() {
      this.props.route.params.product.provider = this.props.route.params.proveedor
      this.props.route.params.product.comment = this.state.comment + ""
      this.props.route.params.product.productId = this.props.route.params.product.id
      this.props.route.params.products.push(this.props.route.params.product)
      this.props.navigation.navigate("AgendarProducto", { product: this.state.chage })
   }
   OnDemandChange = async () => {
      const body = JSON.stringify({
         productId: this.props.route.params.product.id,
         message: this.state.comment + "",
         scheduleId: this.props.route.params.schedule
      })
      const req = await Http.instance.post(urlStat.addProductOnDemand, body, Http.instance.getToken())
      console.log(req)
      this.addProduct()

   }

   render() {

      return (
         <>
            <ScrollView>
               <DetalleProducto {...this.props} />

               <UselessTextInput
                  placeholder="Comentario"
                  multiline
                  numberOfLines={4}
                  onChangeText={text => this.onChangeText(text)}
                  value={this.state.comment}
                  style={{ marginHorizontal: 30 }}

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
