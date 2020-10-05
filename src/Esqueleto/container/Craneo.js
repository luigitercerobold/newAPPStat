import React from 'react'
import { Component } from 'react';
import { View,Text } from 'react-native';
import ContainerSimpleLeft from '../component/ContainerSimpleLeft'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'

class Craneo extends Component {
   craneo = {
      data: [ 
         {id:6, line:3, name:'Craneo',possition:0.5,rigth:true},
        
         {id:7, line:3, name:'Cuello',possition:2.3,rigth:true},
        
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
         <Title title = 'Región Craneo'/> 
         <ContainerSimpleLeft
            data = {this.craneo.data}
            renderItem = {this.renderItem}
            craneo={this.gotoCraneo}
            img={require('newAPPStat/assets/img/Esqueleto/STAT-esqueleto-regiones-74.png')}
            
         />
      </>
      )
   }

}
export default Craneo