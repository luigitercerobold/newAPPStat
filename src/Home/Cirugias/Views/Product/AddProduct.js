import React from 'react';
import { Component } from 'react';
import { View, FlatList, Button, Text, ScrollView, StyleSheet, ActivityIndicator, Image } from 'react-native';
import ButtonAddProduct from './Component/ButtonAddProduct'
import ListButton from '../../Component/ListButton'
import Title from '../../Component/Title'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListItem from '../../Component/Listitem'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import { TextInput } from 'react-native-gesture-handler';


class AddProducto extends Component {
   state = {
      products: bodyPart,
      proveedor: [],
      loading: false,
      producto: ''
   }
   componentDidMount() {
      this.setProduct()
   }


   setProduct = () => {
      this.setState({ producto: this.props.route.params?.producto })
      console.log("producto seleccionado detalle", this.props.route.params?.producto)
   }
   onPress=()=> {
      console.log("agregarproducto", this.props.route.params?.producto)
      const pro = {
         providerId: 27,
         products:[
            {
            productId:this.props.route.params?.producto.id,
            comment: "hoa"
         }]
      }
      
      this.props.navigation.navigate('AgendarProducto',{pro:pro,producto:this.state.producto})
   }
   render() {
      const { producto, proveedor, loading } = this.state
      return (
         <View style = {styles.container}>
            <Title title={producto.name} />
            <Image style={styles.img} source={require("newAPPStat/assets/img/multimedica.png")}></Image>
            <Text>{producto.description}</Text>
            <TextInput 
             multiline
             numberOfLines={4}
            style={styles.textInput}></TextInput>
            <ListButton onPress= {this.onPress}/>
         </View>
      )
   }

}
export default AddProducto;

const styles = StyleSheet.create({
   textInput:{
      margin:30,
      height:150,
      backgroundColor:"rgba(241,238,238,0.5)",
      width:220,
      borderBottomWidth: 1,
   },
   flatList: {
      height: 300,

      flexGrow: 0
   },
   img:{
      width:150,
      height:150
   },
   container:{
      justifyContent:"center",
      alignItems:"center",
      alignContent:"center"
   }
})