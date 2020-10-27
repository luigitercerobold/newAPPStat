
import React, { Component, useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import Title from "../../Lib/Title";
import TextBox from './TextBox'
import Container from './LoginComponent/ContainerCenter'
import BtnSimple from './BtnSimple'

import PaddingVertical from './PaddingVertical'
import SubTittle from '../../Lib/Component/SubTittle';
const AsistenteAdministrativo = ({ onPress,children,title,subTitle ="Siguiente",placeholder ="Asistente" }) => {
   const [eMail, setEmail] = useState('')


   return (
      <>

         <Title title={title}/>
    
         <Container>
            <TextBox
               placeholder={placeholder}
               onChangeText={setEmail}
            />
            <PaddingVertical vertical={3}>
               <BtnSimple
                  title={subTitle}
                  onPress={() =>onPress(eMail)}
               />
            </PaddingVertical>
            {children}
         </Container>
      </>
   )
}


export default AsistenteAdministrativo;