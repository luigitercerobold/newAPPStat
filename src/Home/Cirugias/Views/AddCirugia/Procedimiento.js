import React, { Component } from 'react';
import { Text, View, Pressable, StyleSheet, TextInput, Alert } from 'react-native';
import Http from 'newAPPStat/src/Lib/http'
import Title from '../../../../Lib/Title'

import color from 'newAPPStat/src/Lib/Colors'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListButton from '../../Component/ListButton'
import url from 'newAPPStat/src/Lib/url'
import TextBox from '../../../../Lib/Component/TexBox'
import { Context } from '../../Context/CirugiaContext'
import urlStat from '../../../../Lib/url';
class Cuerpo extends Component {

   state = {
      value: 'none',
      procedimiento: 'ninguno',
      bodyPart: [],
      bodyPart2: []
   };

   componentDidMount = async () => {
      this.getBodyPart()
   }

   getBodyPart = async () => {

      const bodyPart = await Http.instance.get(url.getBoddy, Http.instance.getToken())

      bodyPart.data.forEach(element => {
         this.state.bodyPart2.push({
            label: element.id,
            value: element.name,
         })
      });
      this.setState({ bodyPart: bodyPart.data })
   }

   onPress = async () => {
      
      if (this.props.route.params.schedule) {
         this.props.route.params.name = this.props.route.params?.body.name
         this.props.route.params.description =this.state.procedimiento 
         const body = JSON.stringify(this.props.route.params)
      
      const req = await Http.instance.post(urlStat.editSchedule, body, Http.instance.getToken())
      console.log(req.message)
      this.alert(req.message)
      
        this.props.navigation.navigate('AgendarCirugia', { bodyPart: this.props.route.params?.body.name, procedimiento: this.state.procedimiento })
        this.context.actulizarEstados()
         //this.addProduct()

      } else {
         this.props.navigation.navigate('AgendarCirugia', { bodyPart: this.props.route.params?.body.name, procedimiento: this.state.procedimiento })

      }



   }

   alert = (message) => {

      Alert.alert(
         "Usuario",
         "Mensaje de Stat: " + message,
         [
            {
               text: "Cancel",
               onPress: () => console.log("Cancel Pressed"),
               style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
         ],
         { cancelable: false }
      )
   }

   textInputChange = (value) => {
      this.setState({ procedimiento: value })
   }

   render() {

      return (
         <>
            <Title title="Escribe el procedimiento" />
            <View style={{ flex: 1 }}>



               <View style={{ flex: 1, marginTop: 40, alignItems: 'center', alignContent: 'center', justifyContent: 'flex-start' }}>
                  <TextBox
                     placeholder="Procedimiento"
                     onChangeText={text => this.textInputChange(text)}
                  />


               </View>
               <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                  <ListButton title="Confirmar" onPress={this.onPress} />
               </View>


            </View>
         </>
      )
   }
}

Cuerpo.contextType = Context;


export default Cuerpo;
