import React from 'react';
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
class AgendaProducto extends Component {
   state = {
      products: []
      ,
      loading: false,
      pro: [],
      remove:false

   }

   componentDidUpdate() {

      if (this.props.route.params?.products) {
         if (this.props.route.params.products != this.state.products) {
            this.setState({ pro: this.props.route.params.products })
         }
      }

   }
   componentDidMount () {
     
      if (this.props.route.params.products) {
         this.setState({products:this.props.route.params.products})
      }

   }

   addProduct() {

   }
   onPress = () => {
      this.props.navigation.navigate('ElegirBody', { products: this.state.products })
   }
   goToAgandarCirugia = () => {
     
      this.props.navigation.navigate('AgendarCirugia', { pro: this.state.pro, producto: this.state.products,products: this.state.products })
   }
   removeElement = (item) => {

      const produtctos = this.state.products.filter(function(product) {
         return product.id !== item.id; 
     });
     this.setState({products:produtctos})
   }



   render() {
      const { products, loading } = this.state

      return (
         <View  style={{flex:1}}>
            <Title title="Productos Agregados" />
         

            <FlatList
               data={products}
               styles = {styles.flatLis}
               renderItem={({ item }) =>
              
                  <NavigateCirugia
                     item={item}
                     remove = {this.removeElement}
                  ></NavigateCirugia>
               }
            />
            <BtnProximaCirugia onPress={this.onPress} text="Agregar Producto" img={require("newAPPStat/assets/Icon/1x/cirugias-agregar_cirugias.png")} />
            <ListButton title="confirmar" onPress={this.goToAgandarCirugia} />
            
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
   flatLis:{
      flex:0.3
   }
})