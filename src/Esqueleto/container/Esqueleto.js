import React from 'react'
import { Component } from 'react';
import { View, Text } from 'react-native';
import ContainerImg from '../component/ContainerImg'
import Title from '../../Lib/Title'
import Btn from '../component/Btn'
import Header from '../../Home/src/Component/Header'


class Esqueleto extends Component {
   gotToView() {
      return 'Esqueleto'
   }
   
   gotoCraneo  ()  {
      console.log('craneo')
      this.props.navigation.navigate('Craneo',{onPress:this.onPress.bind(this)})
   }
   gotoBrazo  ()  {
      console.log('go to brazo')
      this.props.navigation.navigate('Brazo',{onPress:this.onPress.bind(this)})
   }
   gotoPiernas () {
      console.log('go to brazo')
      this.props.navigation.navigate('Piernas',{onPress:this.onPress.bind(this)})
   }
   gotoPies  ()  {
      console.log('go to brazo')
      this.props.navigation.navigate('Pies',{onPress:this.onPress.bind(this)})
   }
   onPress ( item) {
      console.log(item)
      this.props.navigation.navigate(this.gotToView(),{body:item});
   }

   //sacro
   anatomica = {
      data: [ 
         {id:1, line:4.8, name:'+',possition:0,rigth:true,fun:this.gotoCraneo.bind(this)},
      {id:1, line:2.6, name:'Hombro',possition:1,rigth:false, fun: this.onPress.bind(this)},
         {id:2, line:4.9, name:'Lumbar',possition:2.6,rigth:false, fun: this.onPress.bind(this)},
         {id:4, line:2.4, name:'+',possition:2,rigth:true,fun:this.gotoBrazo.bind(this) },
        // {id:3, line:4.8, name:'Sacro',possition:3,rigth:false,  fun: this.onPress.bind(this)}, 
         {id:4, line:1, name:'Mano',possition:3.8,rigth:false, fun: this.onPress.bind(this)},  
         {id:7, line:3.5, name:'+',possition:4.2,rigth:true,fun:this.gotoPiernas.bind(this)   }, 
         {id:8, line:3.8, name:'+',possition:7,rigth:true ,fun:this.gotoPies.bind(this)   }, 
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