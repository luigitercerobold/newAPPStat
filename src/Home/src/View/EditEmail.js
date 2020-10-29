
import React, { Component } from 'react'
import { Alert, Text } from 'react-native'
import Title from "../../../Lib/Title";
import TextBox from '../../../Login/Component/TextBox'

import Url from '../../../Lib/url'
import Container from '../../../Login/Component/LoginComponent/ContainerCenter'
import BtnSimple from '../../../Login/Component/BtnSimple'
import ScrollCenter from '../../../Login/Component/ScrollCenter'
import PaddingVertical from '../../../Login/Component/PaddingVertical'
import PassWord from '../../../Login/Component/PassWord'
import User from '../../../Lib/user'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url';


class ChangeEmail extends Component {
   state = {
      name: "",
      lastName: "",
      eMail: "",
      passWord: "",
      phone: ""
   }

   componentDidMount() {

      console.log(User.instance.user)
      this.setState(
         {
            name: User.instance.user.email,
            eMail: User.instance.user.email,
            phone: User.instance.user.phone
         }
      )

   }


   goToPerfil = async () => {

      const body = JSON.stringify(
         {
            // email: this.state.eMail,
            // password: this.state.passWord,
            newEmail: this.state.eMail,
            password: this.state.passWord,
            //role: 2
         }
      )

      const req = await Http.instance.post(urlStat.changeEmail, body, Http.instance.getToken())
      console.log(req.message)
      if (req.message == "Se guardó la información exitosamente") {
         User.instance.user.name = this.state.name
         User.instance.user.phone = this.state.phone
         this.props.navigation.navigate('Menu', { name: this.state.name })
      } else (
         Alert.alert(
            "Usuario",
            "Mensaje de Stat: " + req.message,
            [
               {
                  text: "Cancel",
                  onPress: () => console.log("Cancel Pressed"),
                  style: "cancel"
               },
               { text: "OK", onPress: () => this.setState({ newPassword: "", passWord: "", }) }
            ],
            { cancelable: false }


         )
      )
   }

   setName = (name) => {
      this.setState({ name })
   }
   setLastName = (lastName) => {
      this.setState({ lastName })
   }
   setEmail = (eMail) => {
      this.setState({ eMail })
   }
   setPassWord = (passWord) => {
      this.setState({ passWord })

   }
   setPhone = (phone) => {
      this.setState({ phone })
   }

   editaPassword = () => {
      this.props.navigation.navigate("EditPassword")
   }
   setPassWord = (passWord) => {
      this.setState({ passWord })

   }

   render() {
      return (
         <>

            <Title title="Editar Email" />
            <Container>
               <TextBox
                  placeholder={User.instance.user.email}
                  onChangeText={this.setEmail}
               />

               <PaddingVertical vertical={0.1} />
               <PassWord
                  placeholder="Contraseña Actual"
                  onChangeText={this.setPassWord}
               //onEndEditing={() => this.logIn(activateAuth)}
               />


               <PaddingVertical vertical={5}>
                  <BtnSimple
                     title="Cambiar"
                     onPress={this.goToPerfil}
                  />
               </PaddingVertical>


            </Container>
         </>
      )

   }
}

export default ChangeEmail;