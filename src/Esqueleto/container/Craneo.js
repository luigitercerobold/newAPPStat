import React from 'react'
import { Component } from 'react';
import { View,Text } from 'react-native';
import ContainerSimpleLeft from '../component/ContainerSimpleLeft'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'

class Craneo extends Component {
   craneo = {
      data: [ 
         {id:1,name:'Craneo',possition:1,rigth:true},
         {id:2,name:'Cuello',possition:2,rigth:true},  
    ]
 
    }

    renderItem =(item,top)=>{
       
       return(
         <Btn top = {top} text={item.name} right={item.rigth} /> 
       )
    }

   render(){
      return(
      <>
         <Title title = 'Región Craneo'/> 
         <ContainerSimpleLeft
         data = {this.craneo.data}
         renderItem = {this.renderItem}
         />
      </>
      )
   }

}
export default Craneo