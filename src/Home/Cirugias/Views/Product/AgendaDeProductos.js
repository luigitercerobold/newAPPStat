import React from 'react';
import { Component,useEffect} from 'react';
import {View,FlatList, Button,Text,StyleSheet} from 'react-native';
import ButtonAddProduct from './Component/ButtonAddProduct'
import ListButton from '../../Component/ListButton'
import Title from '../../Component/Title'
import BtnProximaCirugia from '../../Component/BtnProximaCirugia'
import Line from '../../Component/Line';

class AgendaProducto extends Component {
   state={
      products:[{
      id:0,
      name:"",
      description:"Producto utilizado para cirugias",
      price:0,
      providerId:27,
      image:"",
      requested:0,
      status:true}],
      loading:false,
      pro:[]
   }

   componentDidUpdate(){
     
      this.addProduct();
   }
   
   addProduct(){
      
      if(this.props.route.params){

         
         this.state.products.push(this.props.route.params?.producto )
         this.state.pro.push(this.props.route.params?.pro )
         console.log("pro",this.props.route.params?.pro )
         
      }    
   }
   onPress = () => {
      this.props.navigation.navigate('ElegirBody')
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

            
            <ListButton onPress= {this.goToAgandarCirugia}/>
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