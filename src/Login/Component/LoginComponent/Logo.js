import React from 'react'
import { Image } from 'react-native'
import LogoBlue from 'newAPPStat/assets/img/logoblue.png';

const Logo = () => {

   return (
      <Image
            style={{width: 145, height: 35, resizeMode: 'contain'}}
            source={LogoBlue}
          />
   )
}

export default Logo