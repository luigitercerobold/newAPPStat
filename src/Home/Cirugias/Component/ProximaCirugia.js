import React, { Component, useEffect } from 'react'
import {  View } from 'react-native'

import Navigate from './NavigateCirugia'
import { useCirugia } from '../Context/CirugiaContext'
import Loading from '../../../Lib/Component/ActivitiIndicator'
const ProximaCirugia = ({ goTo }) => {
   const { isAuth, loading, proximaCirugia, getproximaCirugia } = useCirugia()
   useEffect(() => {
      getproximaCirugia()
   }, [])

   const avisoCirugia = (item) => {
      if (item?.name === undefined) {

         return "No tiene cirugías agendadas"
      }
      return "Operación de " + item?.name
   }


   return (
      <>
         {
            loading ?
               <View><Loading /></View>

               : <Navigate
                  img={require("newAPPStat/assets/Icon/1x/menu-cirugas.png")}
                  goToPage={goTo}
                  text1={avisoCirugia(proximaCirugia)}
                  text2={proximaCirugia?.hospital?.name}
                  text3={proximaCirugia?.date}
                  action="Agendar cirugía"
                  delate={false}
                  edit={false}
               >
               </Navigate>
         }

      </>
   )
}

export default ProximaCirugia;
