import React from 'react'
import Acept from '../../Lib/Component/Status'

const CorreoCorrectamente = ({navigation}) => {

   return (
      <Acept
         title = "Revisa tu correo electrónico"
         onPress = {() =>navigation.navigate('Login')}
         isOk = {true}
      />
   )
}

export default CorreoCorrectamente