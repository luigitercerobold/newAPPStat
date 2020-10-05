import React from 'react'
import { Component } from 'react';
import { View, Text } from 'react-native';
import ContainerImg from '../component/ContainerImg'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'
class Esqueleto extends Component {
   
   gotoCraneo = () => {
      console.log('craneo')
      this.props.navigation.navigate('Craneo',{onPress:this.onPress})
   }
   gotoBrazo = () => {
      console.log('go to brazo')
      this.props.navigation.navigate('Brazo',{onPress:this.onPress})
   }
   gotoPiernas = () => {
      console.log('go to brazo')
      this.props.navigation.navigate('Piernas',{onPress:this.onPress})
   }
   gotoPies = () => {
      console.log('go to brazo')
      this.props.navigation.navigate('Pies',{onPress:this.onPress})
   }
   onPress =( item) => {
      console.log(item)
   }
   anatomica = {
      data: [ 
         {id:1, line:4.8, name:'+',possition:0,rigth:true,fun:this.gotoCraneo},
         {id:2, line:2.6, name:'Hombro',possition:1,rigth:false, fun: this.onPress},
         {id:3, line:5, name:'Columna',possition:2,rigth:false, fun: this.onPress},
         {id:4, line:2.4, name:'+',possition:2.3,rigth:true,fun:this.gotoBrazo },
         {id:5, line:3.6, name:'Pelvis',possition:3,rigth:false,  fun: this.onPress}, 
         {id:6, line:1, name:'Mano',possition:3.8,rigth:true, fun: this.onPress},  
         {id:7, line:3.5, name:'+',possition:4.2,rigth:false,fun:this.gotoPiernas   }, 
         {id:8, line:3.8, name:'+',possition:7,rigth:true ,fun:this.gotoPies   }, 
    ]
 
    }
   
   renderItem = (item, top,imgWidthBruto,imgWidthNeto) => {
      console.log(item)
      return (
         <Btn 
            imgWidthNeto={imgWidthNeto} 
            imgWidthBruto={imgWidthBruto} 
            onPress={() => item.fun (item)}
            top = {top} 
            text={item.name} 
            right={item.rigth} 
            line={item.line} />
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