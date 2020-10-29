import React, { Component } from 'react'
import { Text, View, Pressable, FlatList } from 'react-native'
import Title from '../../../../Lib/Title'
import Navigate from '../../Component/NavigateCirugia'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import color from 'newAPPStat/src/Lib/Colors'
import HospitalItem from '../../Component/Listitem'
import Header from '../../../src/Component/Header'
import EmptyData from '../../../../Lib/Component/EmptyData'
import ActivityIndicatorStat from '../../../../Lib/Component/ActivitiIndicator'
class AgendarCirugia extends Component {
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
      const hospital = await http.instance.get(urlStat.getHospital, http.instance.getToken())
      this.setState({ hospital: hospital.data, loading: false })

      return hospital
   }

   handlePress = (item) => {

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
export default AgendarCirugia;

