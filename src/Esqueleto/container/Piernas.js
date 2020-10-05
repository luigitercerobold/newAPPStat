import React from 'react'
import { Component } from 'react';
import { View,Text } from 'react-native';
import ContainerSimpleLeft from '../component/ContainerSimpleLeft'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'

class Piernas extends Component {
   craneo = {
      data: [ 
         {id:8, line:3.7, name:'Cadera',possition:1.3,rigth:true},
         {id:9, line:3.3, name:'Femur',possition:3.6,rigth:true},
         {id:10, line:3.7, name:'Rodilla',possition:5.8,rigth:true},
    ]
 
    }

    renderItem =(item, top,imgWidthBruto,imgWidthNeto)=>{
       
       return(
          <>
         <Title title='región anatómica' />
         <Btn 
            imgWidthNeto={imgWidthNeto} 
            imgWidthBruto={imgWidthBruto} 
            onPress={() => this.props.route.params.onPress (item)}
            top = {top} 
            text={item.name} 
            right={item.rigth} 
            line={item.line} />
         </>
       )
    }

   render(){
      return(
      <>
         <Title title = 'Región Inferior'/> 
         <ContainerSimpleLeft
            data = {this.craneo.data}
            renderItem = {this.renderItem}
            craneo={this.gotoCraneo}
            img={require('newAPPStat/assets/img/Esqueleto/STAT-esqueleto-regiones-78.png')}
            
         />
      </>
      )
   }

}
export default Piernas