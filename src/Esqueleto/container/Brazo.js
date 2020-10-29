import React from 'react'
import { Component } from 'react';
import { View, Text } from 'react-native';
import ContainerSimpleLeft from '../component/ContainerSimpleLeft'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'
import Header from '../../Home/src/Component/Header'

class Brazo extends Component {
   craneo = {
      data: [
         
         { id: 6, line: 1.3, name: 'Codo', possition: 3.7, rigth: true },
         { id: 7, line: 0.05, name: 'Radio', possition: 5, rigth: true },
         { id: 5, line: 1.6, name: 'Húmero', possition: 2, rigth: true },
         { id: 8, line: 3, name: 'Clavicula', possition: 0.1, rigth: true },
         //
         { id: 1, line: 3.2, name: 'Escápula', possition: 1, rigth: true }
      ]

   }

   renderItem = (item, top, imgWidthBruto, imgWidthNeto) => {

      return (
         <>

            <Title title='región anatómica' />
            <Btn
               imgWidthNeto={imgWidthNeto}
               imgWidthBruto={imgWidthBruto}
               onPress={() => this.props.route.params.onPress(item)}

               top={top}
               text={item.name}
               right={item.rigth}
               line={item.line} />
         </>
      )
   }

   render() {
      return (
         <>
            <Title title='Región Superior' />
            <ContainerSimpleLeft
               data={this.craneo.data}
               renderItem={this.renderItem}
               craneo={this.gotoCraneo}
               img={require('newAPPStat/assets/img/Esqueleto/STAT-esqueleto-regiones-75.png')}

            />
         </>
      )
   }

}
export default Brazo