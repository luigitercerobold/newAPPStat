import React, { Component } from 'react'
import { Text, View, Pressable, FlatList ,Alert} from 'react-native'
import Title from '../../../../Lib/Title'
import Navigate from '../../Component/NavigateCirugia'
import Http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import HospitalItem from '../../Component/Listitem'
import Header from '../../../src/Component/Header'
import EmptyData from '../../../../Lib/Component/EmptyData'
import ActivityIndicatorStat from '../../../../Lib/Component/ActivitiIndicator'
import { Context } from '../../Context/CirugiaContext'

class Hospital extends Component {
   state = {
      fontLoaded: false,
      hospital: '',
      loading: false,
      activate: false
   }

   componentDidMount() {
      this.getHospital()
   }
   getHospital = async () => {
      this.setState({ loading: true })
      const hospital = await Http.instance.get(urlStat.getHospital, Http.instance.getToken())
      this.setState({ hospital: hospital.data, loading: false })

      return hospital
   }

   handlePress = async(item) => {

      if (this.props.route.params.schedule) {
         console.log(this.props.route.params)
        this.props.route.params.hospitalId = item.id,
         this.props.route.params.address = item.address
         const body = JSON.stringify(this.props.route.params)
   
         const req = await Http.instance.post(urlStat.editSchedule, body, Http.instance.getToken())
         console.log(req.message)
         this.alert(req.message)
         this.context.actulizarEstados()
         this.props.navigation.navigate('AgendarCirugia', { bodyPart: this.props.route.params?.body.name, procedimiento: this.state.procedimiento })
         
         this.gotoStart(item)
   
       } else {
         this.gotoStart(item)
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
  

   gotoStart=(item)=>{
      this.props.navigation.navigate('AgendarCirugia', { hospital: item })

   }
   render() {
      const { hospital, loading, activate } = this.state;
      return (
         <View style={{flex:1}}>
            <Title title="¿En dónde vas a operar?" />
            { loading ?
               <ActivityIndicatorStat color={color.blue} size="large" /> : <FlatList
               ListEmptyComponent={() => <EmptyData />}
               data={hospital}
               renderItem={({ item }) => <HospitalItem activate={activate} onPress={() => this.handlePress(item)} img={item.image} item={item.name} />}
            />
            }
            
         </View>
      )

   }

}
Hospital.contextType = Context
export default Hospital;

