import React from 'react'
import { Component } from 'react';
import { Pressable, Text, View } from 'react-native'
import Title from '../../../Lib/Title';
import Add from 'newAPPStat/src/Lib/Add'
import Card from '../Component/Card'
import Container from '../../../Login/Component/LoginComponent/ContainerCenter'
import ContainerCenter from '../../../Login/Component/LoginComponent/ContainerCenter';
import ContainerCenterRow from '../../../Login/Component/LoginComponent/ContainerCenterRow';
import { ScrollView } from 'react-native-gesture-handler';
class IndexProduct extends Component {
   goToBodyPart = ()=> {
      this.props.navigation.navigate('BodyProducto')
   }
   goToProveedor =() =>{
      this.props.navigation.navigate('Provider')
     
   }
   render() {
      return (
         <ScrollView >
            <Title title="Productos" />
            <Add />
            <ContainerCenterRow>
               <Pressable
                  onPress={this.goToProveedor}
               >
                  <Card text="Proveedores" img={require('newAPPStat/assets/Icon/1x/proveedor_productos.png')} />
               </Pressable>
               <Pressable
                  onPress={this.goToBodyPart}
               >
                  <Card text="Parte del cuerpo" img={require('newAPPStat/assets/Icon/1x/parte_del_cuerpo-productos.png')} />
               </Pressable>

            </ContainerCenterRow>
         </ScrollView>

      )


   }
}
export default IndexProduct