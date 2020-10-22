import React from 'react'
import Acept from '../../../Lib/Component/Status'

const SendInvitation = ({ navigation }) => {

   return (
      <Acept
         title="Se envío la invitación"
         onPress={() => navigation.navigate('Menu')}
         isOk={true}
      />
   )
}

export default SendInvitation