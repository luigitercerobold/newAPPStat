import React, { Component } from 'react'
import { StyleSheet, View, ActivityIndicator, Text } from 'react-native'
import Title from '../../../Lib/Title'
import Color from '../../../Lib/Colors'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url'

import BtnSimple from '../../../Lib/Component/BotonSiemple'
import Tab from './Tabs'
const Asistencia = ({ loading, component1, pressAcept, doctor, anestesia, aceptButton = false }) => {


   return (
      <View style={styles.container}>
         <Title title="Asistencia" />
         <View style={styles.listCenter}>
            <Tab
               component1={component1(loading, 1, doctor)}
               component2={component1(loading, 2, anestesia)}
            />
         </View>

         {
            aceptButton ?
               <View style={{ alignItems: "center", marginBottom: 15 }}>
                  <BtnSimple
                     title={'Aceptar'}
                     onPress={() => pressAcept()}
                  />
               </View>
               : null

         }



      </View>


   )

}

export default Asistencia

const styles = StyleSheet.create(
   {
      container: {
         flex: 1
      },
      listCenter: {
         flex: 1,
         alignItems: 'center'
      }
   },

)