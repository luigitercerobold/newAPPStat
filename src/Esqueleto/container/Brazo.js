import React from 'react'
import { Component } from 'react';
import { View,Text } from 'react-native';
import ContainerSimpleLeft from '../component/ContainerSimpleLeft'
import Title from '../../Lib/Title'

class Craneo extends Component {
   brazo = {
     data: [ 
        {id:1,name:'Humero'},
        {id:2,name:'Codo'},
        {id:3,name:'Cúbito'}
   ]

   }
   renderItem = ({id}) =>{
      return(
         <Text>{id}</Text>
      )
   }
   render(){
      return(
      <>
         <Title title = 'Región Craneo'/> 
         <ContainerSimpleLeft
            data = {this.brazo.data}
            renderItem = {this.renderItem}
         
         />
      </>
      )
   }

}
export default Craneo