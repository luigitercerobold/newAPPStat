import React, { version } from 'react';
import { Component, useEffect } from 'react';
import { View, FlatList, Button, Text, StyleSheet } from 'react-native';
import ButtonAddProduct from './Component/ButtonAddProduct'
import ListButton from '../../Component/ListButton'
import Title from '../../../../Lib/Title'
import BtnProximaCirugia from '../../Component/BtnProximaCirugia'
import Line from '../../Component/Line';
import Header from '../../../src/Component/Header'
import NavigateCirugia from '../../Component/NavigateProducto'
import { ScrollView } from 'react-native-gesture-handler';
import Http from '../../../../Lib/http'
import urlStat from '../../../../Lib/url'
class AgendaProducto extends Component {

   state = {
      products: [],
      loading: false,
      pro: [],
      remove: true,
      edit: -1


   }



   componentDidMount() {

      if (this.props.route.params.schedule !== 1) {

         this.getData()
      } else {
         this.setState({
            products: this.props.route.params.products,
            edit: this.props.route.params.schedule || -1,

         })
      }

   }


   getData = async () => {

      const req = await Http.instance.get(urlStat.getProductFromschedule(this.props.route.params.schedule), Http.instance.getToken())


      let productos = req.data

      let schedule = this.props.route.params.schedule

      let product = []
      product = productos.map((element) => {
         console.log(element.id, element.product.id)
         element.product.role = element.role
         element.product.schedule = schedule
         element.product.invitation = element.id
         element.product.id =element.id
         return element.product
      })

      this.props.route.params.producto = product
      this.setState({
         products: product,
         edit: this.props.route.params.schedule || -1,
         remove: false

      })

   }

   addProduct() {

   }

   onPress = () => {
      this.props.navigation.navigate('ElegirBody', { 
         products: this.state.products,
         schedule:this.props.route.params.schedule
      })
   }

   goToAgandarCirugia = () => {


      this.props.navigation.navigate('AgendarCirugia', { producto: this.state.products })

   }

   removeElement = (item) => {


      this.props.route.params.products
      const products = this.state.products.filter(function (product) {
         return product.id !== item.id;
      });

      this.setState({ products })
      if (this.state.edit != -1) {
         this.deleteOnDemand(item)

      }

   }
   deleteOnDemand = async (item) => {
      console.log(item)
      const req = await Http.instance.deleting(urlStat.onDemandDeleteProduct(item.invitation), Http.instance.getToken())

   }

   render() {
      const { products, loading } = this.state

      return (

         <View style={{ flex: 1 }}>
            <Title title="Productos Agregados" />


            <FlatList
               data={products}
               styles={styles.flatLis}
               renderItem={({ item }) =>

                  <NavigateCirugia
                     item={item}
                     remove={this.removeElement}
                  ></NavigateCirugia>
               }
            />
            <View style={{ marginBottom: 10 }}>
               <BtnProximaCirugia onPress={this.onPress} text="Agregar Producto" img={require("newAPPStat/assets/Icon/1x/cirugias-agregar_cirugias.png")} />

               {this.state.remove ? <ListButton title="confirmar" onPress={this.goToAgandarCirugia} />
                  : null


               }

            </View>
         </View>

      )
   }

}
export default AgendaProducto;
const styles = StyleSheet.create({
   text: {
      textAlign: "center",
      fontSize: 20
   },
   flatLis: {
      flex: 0.3
   }
})