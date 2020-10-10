import React from 'react';
import { Component,useEffect} from 'react';
import {View,FlatList, Button,Text,StyleSheet} from 'react-native';
import ButtonAddProduct from './Component/ButtonAddProduct'
import ListButton from '../../Component/ListButton'
import Title from '../../../../Lib/Title'
import BtnProximaCirugia from '../../Component/BtnProximaCirugia'
import Line from '../../Component/Line';
import Header from '../../../src/Component/Header'
class AgendaProducto extends Component {
   state={
      products:[],
      loading:false,
      pro:[]
    
   }

   componentDidUpdate(){
     if(this.props.route.params?.products){
        console.log(this.props.route.params?.products)
     }
      this.addProduct();
   }
   
   addProduct(){
   
   }
   onPress = () => {
      this.props.navigation.navigate('ElegirBody', {products:this.state.products})
   }
   goToAgandarCirugia = () => {
      console.log("se envio pro",this.state.pro)
      this.props.navigation.navigate('AgendarCirugia',{pro:this.state.pro, producto:this.state.products})
   }

   

   render(){
      const {products,loading} = this.state

      return (
         <View>
            <Title title="Productos Agregados"/>
            <FlatList
               data={products}
      renderItem={({ item }) => <Line><Text style={styles.text}> {item.name}</Text></Line>}
            />
            <BtnProximaCirugia onPress = {this.onPress} text="Agregar Producto" img={require("newAPPStat/assets/Icon/1x/cirugias-agregar_cirugias.png")}/>
            <ListButton title= "confirmar" onPress= {this.goToAgandarCirugia}/>
         </View>

      )
   }

}
export default AgendaProducto;
const styles = StyleSheet.create({
   text:{
      textAlign:"center",
      fontSize:20
   }
})