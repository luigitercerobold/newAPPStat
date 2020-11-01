
import React, { Component } from 'react'
import Http from '../../../Lib/http'
import urlStat from '../../../Lib/url'
import Permisos from '../../../Login/Component/PermisosAsistente'
class AsistenteAdministrativo extends Component {
   state = {
      eMail: "Correo Electronico"
   }
   setEmail = (eMail) => {
      this.setState({ eMail })
   }
   gotoToToken = async (email,name) => {
      const body = JSON.stringify(
         {
            email,
            name
         }
      )
      const req= await Http.instance.post(urlStat.assistant,body,Http.instance.getToken())
      console.log(req)
      //this.props.navigation.navigate('SendInvitation')

   }
   render() {
      return (
         <>
            <Permisos
               onPress={this.gotoToToken}
               title="Permisos"
               subTitle="Compartir"
               
            >
            </Permisos>
         </>
      )
   }
}

export default AsistenteAdministrativo;