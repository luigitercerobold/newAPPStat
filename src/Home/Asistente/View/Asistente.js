
import React, { Component } from 'react'
import Permisos from '../../../Login/Component/PermisosAsistente'
class AsistenteAdministrativo extends Component {
   state = {
      eMail: "Correo Electronico"
   }
   setEmail = (eMail) => {
      this.setState({ eMail })
   }
   gotoToToken = (eMail) => {
   
      this.props.navigation.navigate('SendInvitation')

   }
   render() {
      return (
         <>
            <Permisos
               onPress ={this.gotoToToken}
               title = "Permisos"
               subTitle="Ingrese el correo del asistente administrativo para otorgar accesos" 
            >
            </Permisos>
         </>
      )
   }
}

export default AsistenteAdministrativo;