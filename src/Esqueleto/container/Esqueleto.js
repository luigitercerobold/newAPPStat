import React from 'react'
import { Component } from 'react';
import { View, Text } from 'react-native';
import ContainerImg from '../component/ContainerImg'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'
class Esqueleto extends Component {
   anatomica = {
      data: [ 
         {id:1, line:4.8, name:'Craneo',possition:0,rigth:true},
         {id:2, line:2.6, name:'Hombro',possition:1,rigth:false},
         {id:3, line:5, name:'Columna',possition:2,rigth:false},
         {id:4, line:2.4, name:'Codo',possition:2.3,rigth:true},
         {id:5, line:3.6, name:'Pelvis',possition:3,rigth:false}, 
         {id:6, line:1, name:'Mano',possition:3.8,rigth:true},  
         {id:7, line:3.5, name:'Pierna',possition:4.2,rigth:false}, 
         {id:8, line:3.8, name:'Pies',possition:7,rigth:true}, 
    ]
 
    }
   gotoCraneo = () => {
      console.log('craneo')
      this.props.navigation.navigate('Craneo')
   }
   gotoBrazo = () => {
      console.log('go to brazo')
      this.props.navigation.navigate('Brazo')
   }
   renderItem = (item, top) => {
      return (
         <Btn onPress={this.gotoCraneo}top = {top} text={item.name} right={item.rigth} line={item.line} />
      )
   }
   render() {

      return (
         <>
            <Title title='Región Anatomica' />
            <ContainerImg
               craneo={this.gotoCraneo}
               brazo={this.gotoBrazo}

               data={this.anatomica.data}
               renderItem={this.renderItem}
            />
         </>


      )
   }

}
export default Esqueleto