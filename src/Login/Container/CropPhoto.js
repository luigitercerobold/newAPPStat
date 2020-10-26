import ImagePicker from 'react-native-image-picker';
import React, { Component } from 'react'
import { Button, Text, PermissionsAndroid, Image, StyleSheet } from 'react-native'
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
   render() {
      return (
         <>
            <Button
               title="press"
               onPress={this.handleSelectImage.bind(this)}>
               <Text>Tomar foto</Text>
            </Button>
            {this.state.data
               ?
               <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
               : null
            }

         </>
      )
   }

}


const styles = StyleSheet.create({
   uploadAvatar:{
      height:200,
      width:200
   }

})
