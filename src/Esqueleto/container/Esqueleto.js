import React from 'react'
import { Component } from 'react';
import { View, Text } from 'react-native';
import ContainerImg from '../component/ContainerImg'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'
import Header from '../../Home/src/Component/Header'


class Esqueleto extends Component {
   gotToView() {
      return 'Esqueleto'
   }

   gotoCraneo() {

      this.props.navigation.navigate('Craneo', { onPress: this.onPress.bind(this) })
   }
   gotoBrazo() {

      this.props.navigation.navigate('Brazo', { onPress: this.onPress.bind(this) })
   }
   gotoPiernas() {

      this.props.navigation.navigate('Piernas', { onPress: this.onPress.bind(this) })
   }
   gotoPies() {

      this.props.navigation.navigate('Pies', { onPress: this.onPress.bind(this) })
   }
   onPress(item) {

      this.props.navigation.navigate(this.gotToView(), { body: item });
   }

   //sacro
   anatomica = {
      data: [
         { id: 112, line: 4.8, name: '+', possition: 0, rigth: true, fun: this.gotoCraneo.bind(this) },
         { id: 1, line: 2.6, name: 'Hombro', possition: 1, rigth: false, fun: this.onPress.bind(this) },
         { id: 2, line: 4.9, name: 'Lumbar', possition: 2.6, rigth: false, fun: this.onPress.bind(this) },
         { id: 114, line: 2.4, name: '+', possition: 2, rigth: true, fun: this.gotoBrazo.bind(this) },
         // {id:3, line:4.8, name:'Sacro',possition:3,rigth:false,  fun: this.onPress.bind(this)}, 
         { id: 4, line: 1, name: 'Mano', possition: 3.8, rigth: false, fun: this.onPress.bind(this) },
         { id: 117, line: 3.5, name: '+', possition: 4.2, rigth: true, fun: this.gotoPiernas.bind(this) },
         { id: 118, line: 3.8, name: '+', possition: 7, rigth: true, fun: this.gotoPies.bind(this) },
         { id: 20, line: 0, name: 'Chips y Pastas', possition: 7, rigth: false, fun: this.onPress.bind(this) },
         { id: 21, line: 0, name: 'PRP', possition: 6, rigth: false, fun: this.onPress.bind(this) },
         { id: 22, line: 0, name: 'Células Madre', possition: 5, rigth: false, fun: this.onPress.bind(this) }
      ]

   }

   renderItem = (item, top, imgWidthBruto, imgWidthNeto) => {

      return (
         <Btn
            imgWidthNeto={imgWidthNeto}
            imgWidthBruto={imgWidthBruto}
            onPress={() => item.fun(item)}
            top={top}
            text={item.name}
            right={item.rigth}
            line={item.line} 
            key = {item.id}
            />
      )
   }

   render() {

      return (
         <>
            <Title title='Región Anatómica' />
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