import React,{useEffect} from 'react'
import { Button, SafeAreaView, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Header from './Component/Header'
import Inicio from './Component/Inicio'
import Menu from './Component/Menu'
import Permisos from './Component/Permisos'
import CerrarSesion from './Component/CerrarSession'
const CustomDrawerContent = (props) => {
  
  
   return (
      <View style={{flex:1 , margin:20}}>
       
      <Header />
      <Inicio goTo={()=>  props.navigation.navigate('Menu')}/>
      <Menu navigation ={props.navigation} />
      <Permisos goTo={()=>  props.navigation.navigate('AsistenteAdministrativo')}/>
      <CerrarSesion/>
      
      
      </View>


   )
}

export default CustomDrawerContent