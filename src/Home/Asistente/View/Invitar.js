import React, { useState } from 'react'
import { View, Image, Linking, } from 'react-native'
import TextBox from '../../../Login/Component/TextBox'
import Title from '../../../Lib/Title'
import SimpleButom from '../../../Lib/Component/BotonSiemple'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url'

export const Invitar = ({ navigation }) => {
   const [mobileNumber, setMobileNumber] = useState('');
   const [whatsAppMsg, setWhatsAppMsg] = useState(
      'Please follow https://aboutreact.com',
   );
   const [user, setUser] = useState('')
   const [email, setEmail] = useState('')


   const initiateWhatsApp = () => {
      // Check for perfect 10 digit length

      if (mobileNumber.length != 8) {
         alert('Escriba un número correcto');
         return;
      }
      // Using 91 for India
      // You can change 91 with your country code
      let url =
         'whatsapp://send?text=' +
         "Hola, unete a STAT" +
         '&phone=502' + mobileNumber;
      Linking.openURL(url)
         .then((data) => {
            console.log('WhatsApp Opened');
         })
         .catch(() => {
            alert('Asegure instalar whatsapp');
         });
   };

   const onPress = () => {
      sendEmail()
      navigation.navigate('SendInvitation')
   }

   const sendEmail = async () => {
      const body = JSON.stringify({
         name: user,
         email
      })
      const req =await Http.instance.post(urlStat.sendEmail, body, Http.instance.getToken())
      console.log(req)
   }
   return (
      <View style={{ flex: 1 }}>

         <Title title="Invitar" />


         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}>


            <TextBox

               placeholder="Nombre de contacto"
               onChangeText={setUser}


            />

            <TextBox

               placeholder="Escribe un Email"
               onChangeText={setEmail}
               keyword='email-address'

            />
            <SimpleButom
               title="Enviar Invitacion"
               onPress={onPress}
               style={{ margin: 20 }}
            />

            <TextBox

               placeholder="WhatsApp"
               onChangeText={setMobileNumber}
               keyword='phone'

            />
            <SimpleButom
               title="Enviar Invitacion"
               onPress={initiateWhatsApp}
               style={{ margin: 20 }}
            />

         </View>




      </View>

   )

}

export default Invitar


