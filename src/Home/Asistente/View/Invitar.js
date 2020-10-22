import React, { useState } from 'react'
import { View, Image } from 'react-native'
import TextBox from '../../../Login/Component/TextBox'
import Title from '../../../Lib/Title'
import SimpleButom from '../../../Lib/Component/BotonSiemple'

export const Invitar = ({ navigation }) => {

   const [contact, setContact] = useState('')
   const setUser = () => {


   }

   const onPress = () => {
      navigation.navigate('SendInvitation')
   }
   return (
      <View style={{ flex: 1 }}>
         <View style={{ flex: 1 }}>
            <Title title="Invitar" />
         </View>

         <View style={{ flex: 1, }}>
            <TextBox

               placeholder="Correo o WhatsApp"
               onChangeText={setUser}
               keyword='email-address'

            />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>

               <Image
                  source={require('newAPPStat/assets/Icon/1x/whatsapp.png')}
                  style={{ height: 80, width: 80, marginVertical: 40 }}
               />
            </View>

         </View>

         <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'flex-end', alignContent: 'flex-end', alignItems: 'center' }}>

               <SimpleButom
                  title="Enviar Invitacion"
                  onPress={onPress}
               />
            </View>

         </View>


      </View>

   )

}

export default Invitar


