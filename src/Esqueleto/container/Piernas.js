import React from 'react'
import { Component } from 'react';
import { View, Text } from 'react-native';
import ContainerSimpleLeft from '../component/ContainerSimpleLeft'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'
import Header from '../../Home/src/Component/Header'

class Piernas extends Component {
   craneo = {
      data: [
         { id: 17, line: 3.8, name: 'Pelvis', possition: 0, rigth: true },
         { id: 18, line: 5.6, name: 'Sacro', possition: .7, rigth: true },
         { id: 13, line: 2.5, name: 'Cadera', possition: 1.4, rigth: true },
         { id: 15, line: 2.9, name: 'Diafisis', possition: 2.6, rigth: true },
         { id: 14, line: 3.3, name: 'Femur', possition: 3.6, rigth: true },

         { id: 16, line: 3.5, name: 'Rodilla', possition: 5.8, rigth: true },

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
            <Title title='Región Inferior' />
            <ContainerSimpleLeft
               data={this.craneo.data}
               renderItem={this.renderItem}
               craneo={this.gotoCraneo}
               img={require('newAPPStat/assets/img/Esqueleto/STAT-esqueleto-regiones-78.png')}

            />
         </>
      )
   }

}
export default Piernas