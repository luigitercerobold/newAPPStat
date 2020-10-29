import React from 'react'
import {
   View,
   Text,
   StyleSheet,
   Image
} from 'react-native';
import PaddingVertical from '../../Login/Component/PaddingVertical'
import StatFont from '../Component/StatFont'

function EmptyComponent(props) {
   return (
      <View style={styles.container}>
        <Image
         style= {styles.img}
         source = {require('newAPPStat/assets/Icon/1x/no_se_encuentran_resultados.png')}
        />
        <StatFont>No hay datos que mostrar</StatFont>
      </View>

   )

}
export default EmptyComponent;

const styles = StyleSheet.create({

   text_login: {
      color: '#2185fb',
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
      letterSpacing: 3,
      fontSize: 20,
      color: '#2185fb',


      letterSpacing: 2,

      fontSize: 16,
   }, container: {
    
      marginTop:75,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }, img:{
      height:75,width:75,
      marginVertical:15

   }


});
