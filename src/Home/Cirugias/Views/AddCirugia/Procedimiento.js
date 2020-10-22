import React, { Component } from 'react';
import { Text, View, Pressable, StyleSheet, TextInput } from 'react-native';
import Http from 'newAPPStat/src/Lib/http'
import Title from '../../../../Lib/Title'

import color from 'newAPPStat/src/Lib/Colors'
import bodyPart from 'newAPPStat/src/Lib/bodyParts'
import ListButton from '../../Component/ListButton'
import url from 'newAPPStat/src/Lib/url'
import TextBox from '../../../../Lib/Component/TexBox'
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

   onPress = () => {

      this.props.navigation.navigate('AgendarCirugia', { bodyPart: this.props.route.params?.body.name, procedimiento: this.state.procedimiento })
   }
   
   textInputChange = (value) => {
      this.setState({ procedimiento: value })
   }

   render() {

      return (
         <>
         <Title title="Escribe el procedimiento" />
         <View style={{ flex: 1}}>
            


            <View style= {{ flex:1,marginTop:40, alignItems:'center',alignContent:'center', justifyContent:'flex-start'}}>
               <TextBox
                  placeholder="Procedimiento"
                  onChangeText={text => this.textInputChange(text)}
               />


            </View>
            <View style={{flex:1,justifyContent:'flex-end'}}>
            <ListButton title="Confirmar" onPress={this.onPress} />
            </View>


         </View>
         </>
      )
   }
}

export default Cuerpo;

const pickerSelectStyles = StyleSheet.create({

   inputIOS: {
      fontSize: 18,
      fontFamily: 'Questrial-Regular',
      paddingVertical: 12,
      paddingHorizontal: 10,
      //borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      //paddingRight: 30, // to ensure the text is never behind the icon
   },
   inputAndroid: {
      fontSize: 18,
      fontFamily: 'Questrial-Regular',
      paddingHorizontal: 10,
      paddingVertical: 8,
      //borderWidth: 0.5,
      borderColor: 'black',
      borderRadius: 8,
      color: 'black',
      backgroundColor: color.gray
      //paddingRight: 30, // to ensure the text is never behind the icon
   },
});
