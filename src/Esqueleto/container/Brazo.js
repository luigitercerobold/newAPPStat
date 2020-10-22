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
         { id: 5, line: 1.1, name: 'Húmero', possition: 1.5, rigth: true },
         { id: 6, line: 1, name: 'Codo', possition: 3.6, rigth: true },
         { id: 7, line: 0.05, name: 'Radio', possition: 5, rigth: true },
         { id: 8, line: 2, name: 'Clavicula', possition: 0, rigth: true },
         //
         { id: 1, line: 1.4, name: 'Hombro', possition: 0.6, rigth: true }
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