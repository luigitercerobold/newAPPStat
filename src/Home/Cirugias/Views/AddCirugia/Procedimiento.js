import React, { Component } from 'react';
import { Text, View, Pressable,StyleSheet,TextInput } from 'react-native';
import Http from 'newAPPStat/src/Lib/http'
import Title from '../../../../Lib/Title'
import { Picker } from '@react-native-community/picker';
import RNPickerSelect from 'react-native-picker-select';
import Line from '../../Component/Line'
import color from 'newAPPStat/src/Lib/Colors'
import bodyPart from  'newAPPStat/src/Lib/bodyParts'
import ListButton from '../../Component/ListButton'
import url from 'newAPPStat/src/Lib/url'
import { min } from 'react-native-reanimated';
class Cuerpo extends Component {

   state = {
      value:'none',
      procedimiento:'ninguno',
      bodyPart:[],
      bodyPart2:[]
   };

   componentDidMount = async () => {
      this.getBodyPart()
   }

   getBodyPart = async () =>{
      console.log(Http.instance.getToken());
      const bodyPart = await Http.instance.get(url.getBoddy,Http.instance.getToken())
      console.log("body parts",bodyPart)
      
      bodyPart.data.forEach(element => {
         this.state.bodyPart2.push({
            label: element.id,
            value: element.name,
         })
      });
      this.setState({bodyPart:bodyPart.data})
   }
   onPress = () => {
      console.log(this.state.value)
      this.props.navigation.navigate('AgendarCirugia',{bodyPart:this.props.route.params?.body.name, procedimiento:this.state.procedimiento})
   }
   textInputChange = (value) =>{
       this.setState({procedimiento:value})
   }

   render() {
      const placeholder = {
         value: null,
         color: '#9EA0A4',
       };
       
      return (
         <View>
            <Title title="Escribe el procedimiento" />
 
            <Line>
               <TextInput
                  placeholder = "Procedimiento"
                  onChangeText={text => this.textInputChange(text)}
               >
                  
               </TextInput>
            </Line>

            <ListButton onPress= {this.onPress}/>

         </View>
      )
   }
}

export default Cuerpo;

   const pickerSelectStyles = StyleSheet.create({
 
      inputIOS: {
        fontSize:18,
        fontFamily:'Questrial-Regular',
        paddingVertical: 12,
        paddingHorizontal: 10,
        //borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'black',
        //paddingRight: 30, // to ensure the text is never behind the icon
      },
      inputAndroid: {
        fontSize:18,
        fontFamily:'Questrial-Regular',
        paddingHorizontal: 10,
        paddingVertical: 8,
        //borderWidth: 0.5,
        borderColor: 'black',
        borderRadius: 8,
        color: 'black',
        backgroundColor:color.gray
        //paddingRight: 30, // to ensure the text is never behind the icon
      },
    });
