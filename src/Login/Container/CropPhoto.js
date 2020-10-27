import ImagePicker from 'react-native-image-picker';
import React, { Component } from 'react'
import { Button, Text, PermissionsAndroid, Image, StyleSheet, View } from 'react-native'
import StatusBar from '../Component/Statusbar';
import BtnSimple from '../Component/BtnSimple'
import Container from '../Component/LoginComponent/ContainerCenter'
import Title from "../../Lib/Title";
import ImgPerfil from '../../Home/src/Component/ImgPerfil'
const options = {
   title: 'Seleccione la imagen',
   takePhotoButtonTitle: 'Tomar foto',
   chooseFromLibraryButtonTitle: "Cambiar imagen",
   quality: 1
};

export default class MICamara extends Component {
   state = {
      data: null

   }
   async componentDidMount() {
      this.requestCameraRollPermission()
   }

   async requestCameraRollPermission() {
      try {
         const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
            {
               'title': 'Permiso de archivos',
               'message': 'La aplicación necesita acceso a tus imagenes'
            }
         )
         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("You can use the camera")
         } else {
            console.log("Camera permission denied")
         }
      } catch (err) {
         console.warn(err)
      }
   }

   handleSelectImage() {
      ImagePicker.showImagePicker(options, (response) => {
         console.log('Response = ', response);

         if (response.didCancel) {
            console.log('usuario canceló la selección de la imagen');
         } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
         } else if (response.customButton) {
            console.log('Botón personalizado del usuario pulsado: ', response.customButton);
         } else {
            const source = { uri: response.uri };
            this.setState({
               avatarSource: source,
               data: response.data
            })
         }
      });

   }

   goToPerfil =()=>{
      this.props.navigation.navigate('PerfilNuevoUsuario', {  body: this.props.route.params.body })
   }
   render() {
      return (
         <>
            <Title title="Nuevo Usuario" />
            <Container>


               <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
                  {this.state.data
                     ?

                     <ImgPerfil
                        source={this.state.avatarSource}
                        style={{
                           marginLeft: 0,
                           width: 200,
                           height: 200, borderRadius: 100,
                           margin: 20
                        }}
                     />

                     : null
                  }

                  <BtnSimple
                     title="Fotografía"
                     onPress={this.goToPerfil}
                     onPress={this.handleSelectImage.bind(this)}
                  />

               </View>

               <View style={{ flex: .5, justifyContent: 'flex-end', alignItems: 'center' }}>

                  <StatusBar
                     step={2}
                  />
                  <BtnSimple
                     title="Siguiente"
                     onPress={this.goToPerfil}
                  />

               </View>
            </Container>
         </>
      )
   }

}


const styles = StyleSheet.create({
   uploadAvatar: {
      height: 200,
      width: 200
   }

})
