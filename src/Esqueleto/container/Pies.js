import React from 'react'
import { Component } from 'react';
import { View,Text } from 'react-native';
import ContainerSimpleLeft from '../component/ContainerSimpleLeft'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'
import Header from '../../Home/src/Component/Header'

class Pies extends Component {
   craneo = {
      data: [ 
         {id:19, line:3.9, name:'Tibia',possition:4,rigth:true},
         {id:20, line:3.8, name:'Tobillo',possition:5.6,rigth:true},
         {id:21, line:3.7, name:'Pie',possition:6.5,rigth:true},
         
    ]
 
    }
    /**
     * 
     * @param {los datos de item} item 
     * @param {*la suma del top del} top 
     * @param {*} imgWidthBruto 
     * @param {*} imgWidthNeto 
     */
    renderItem =(item, top,imgWidthBruto,imgWidthNeto)=>{
       
       return(
          <>
         
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
         <Title title = 'Extremidad Inferior'/> 
         <ContainerSimpleLeft
            data = {this.craneo.data}
            renderItem = {this.renderItem}
            craneo={this.gotoCraneo}
            img={require('newAPPStat/assets/img/Esqueleto/STAT-esqueleto-regiones-76.png')}
            
         />
      </>
      )
   }

}
export default Pies