import React from 'react'
import { Component } from 'react';
import { View,Text } from 'react-native';
import ContainerSimpleLeft from '../component/ContainerSimpleLeft'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'

class Craneo extends Component {
   craneo = {
      data: [ 
         {id:9, line:3, name:'Craneo',possition:0.5,rigth:true},
        
         {id:10, line:3, name:'Cervical',possition:2.3,rigth:true},
         {id:11, line:3, name:'Maxilo',possition:1.6,rigth:true},
         {id:12, line:1.8, name:'PRP',possition:1.05,rigth:true},
        
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