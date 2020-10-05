import React from 'react'
import Brazo from './Brazo'

import Craneo from './Craneo'
import Esqueleto from './Esqueleto'

import Piernas from './Piernas'


const ScreensBody = ({Stack}) => {

   return (
      <>
         <Stack.Screen options={{ title: 'Brazo' }}                  name="Brazo" component={Brazo} />

         <Stack.Screen options={{ title: 'Craneo' }}         name="Craneo" component={Craneo} />
         <Stack.Screen options={{ title: 'Esqueleto' }}                  name="Esqueleto" component={Esqueleto} />

         <Stack.Screen options={{ title: 'Piernas' }}         name="PerfiPiernaslNuevoUsuario" component={Piernas} />
      </>
   )
}

export default ScreensBody