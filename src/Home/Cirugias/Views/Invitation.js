import React, { Component } from 'react'
import { FlatList, Text } from 'react-native'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url'
import Navigate from '../Component/NavigateCirugia'
import { date } from '../../../Lib/Component/GetDate'
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable'
import EmptyData from '../../../Lib/Component/EmptyData'

class Invitation extends Component {
   state = {
      data: []
   }

   componentDidMount() {

      this.getData()

   }

   getData = async () => {
      const req = await Http.instance.get(urlStat.getInvitation, Http.instance.getToken())

      this.setState({
         data: req.data
      })
      console.log(
         "invitationData",
         this.state.data[0].invitationData,
         "scheduleData",
         this.state.data[0].scheduleData,
      )
   }

   render() {
      return (
         <>
            <FlatList
            ListEmptyComponent={() => <EmptyData/>}
               data={this.state.data}
               renderItem={({ item }) =>
                  <Pressable
                      onPress={ () =>this.props.navigation.navigate('VerInvitacion',{cirugia:item})}
                  >
                     <Navigate
                        img={require("newAPPStat/assets/Icon/1x/menu-cirugas.png")}
                        goToPage={() => this.goTo(item)}
                        text1={"Confirmación de cirugía"}
                        text2={"Inicia:   " + date(item.scheduleData.date)}
                        text3={"Finaliza: " + date(item.scheduleData.end)}
                        key={item.scheduleData.date}
                        delate={false}
                        edit={false}
                     ></Navigate>
                  </Pressable>
               }

            />

         </>
      )
   }

}

export default Invitation