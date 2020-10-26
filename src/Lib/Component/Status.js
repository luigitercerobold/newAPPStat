import { CardStyleInterpolators } from '@react-navigation/stack'
import React,{useEffect} from 'react'
import { View, StyleSheet, Text, Image, StatusBar, ActivityIndicator } from 'react-native'
import Color from '../Colors'
import SimpleBoton from './BotonSiemple'
import StatFont from '../../Lib/Component/StatFont'
import Calendar from '../../Lib/Component/Calendar'
import ActivityIndicatorStat from '../../Lib/Component/ActivitiIndicator'
const AceptRequest = ({ title = 'Aceptar', onPress, isOk, loading, eventStart, eventFinish, titleCalendar,hospitalName }) => {
   console.log(isOk)
   useEffect(()=> {
      console.log('entrada',eventStart, eventFinish, titleCalendar)

   })

   return (
      <View style={styles.container}>
         <View style={styles.container}>
         </View>
         {!loading
            ?
            <>

               <View style={styles.container}>
                  <View style={styles.message}>
                     {isOk
                        ? <Image style={styles.containerImg} source={require('newAPPStat/assets/Icon/1x/finalizar.png')} />
                        : <Image style={styles.containerImg} source={require('newAPPStat/assets/Icon/1x/cancelar.png')} />
                     }

                     <StatFont style={styles.text}>{title}</StatFont>
                  </View>
               </View>
               <View style={styles.container, styles.contButton}>
                  <View style={styles.containerButton}>
                     <SimpleBoton
                        title='Aceptar'
                        onPress={onPress}
                     />

                  </View>

                  {titleCalendar ? <View style={styles.containerButton}>
                     <Calendar
                        title={"STAT - "+ titleCalendar}
                        eventFinish={eventFinish}
                        eventStart={eventStart}
                        description = {hospitalName}
                     />
                  </View>: null
                  }

               </View>
            </>
            : <ActivityIndicatorStat color={Color.blue} size="large" />
         }
      </View>

   )
}

export default AceptRequest

const styles = StyleSheet.create(
   {
      container: {
         flex: 1
      },
      text: {
         fontSize: 20,
         color: Color.blue
      },
      message: {
         alignItems: 'center'
      }
      ,
      containerImg: {
         marginBottom: 20
      },
      containerButton: {
         alignItems: 'center',
         margin: 5,
         maxWidth: 200

      },
      contButton: {
         margin: 20,
         justifyContent: 'flex-end',
         alignContent: 'center',
         alignItems: 'center'
      }

   }
)