import ImagePicker from 'react-native-image-picker';
import React, { Component } from 'react'
import { Button, Text, PermissionsAndroid, Image, StyleSheet, View, Pressable } from 'react-native'
import StatusBar from '../Component/Statusbar';
import BtnSimple from '../Component/BtnSimple'
import Container from '../Component/LoginComponent/ContainerCenter'
import Title from "../../Lib/Title";
import ImgPerfil from '../../Home/src/Component/ImgPerfil'
import User from '../../Lib/user';
import urlStat from '../../Lib/url';
import Http from '../../Lib/http';

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
               data: response.data,
               file: response,
               filename: response.fileName,
               type: response.type
            })
         }
      });

   }

   goToPerfil = () => {

      this.sendPhoto()
      //User.instance.getUser().photo2 = this.state.avatarSource
      //this.props.navigation.navigate('Menu', { img: this.state.data })
   }

   sendPhoto = async () => {
      // const body = JSON.stringify({
      //    file: this.state.data + ".png"
      // })
      // const req = await Http.instance.post(urlStat.editPhoto, body, Http.instance.getToken())
      //console.log(req)


      // let body = new FormData();
      // body.append('photo', { 
      //                      uri: this.dataURLtoFile(`data:${this.state.file.type};base64,${this.state.data}`, this.state.file.fileName,this.state.file.type), 
      //                      name:this.state.fileName, 
      //                      filename: this.state.fileName, 
      //                      type: this.state.type 
      //                   });
      // body.append('Content-Type', 'image/png');

      // fetch(urlStat.editPhoto, {
      //    method: 'POST', headers: {
      //       "Content-Type": "multipart/form-data",
      //       "otherHeader": "foo",
      //       'Authorization': Http.instance.getToken()
      //    }, body: body
      // })
      //    .then((res) => checkStatus(res))
      //    .then((res) => res.json())
      //    .then((res) => { console.log("response" + JSON.stringify(res)); })
      //    .catch((e) => console.log(e))
      //    .done()

      // let body = new FormData();
      // let datos ={ uri: this.state.file.path, name: this.state.filename, filename:this.state.filename, type: this.state.type}

      // body.append('file', datos);
      // body.append('Content-Type', 'image/png');
      // console.log(body)
      // fetch(urlStat.editPhoto, {
      //    method: 'POST',
      //     headers: {
      //       "Content-Type": "multipart/form-data",

      //       'Authorization': Http.instance.getToken()
      //    }, body: body
      // })
      //    .then((res) => {console.log(res)})
      //    .then((res) => res.json())
      //    .then((res) => { console.log("response" + JSON.stringify(res)); })
      //    .catch((e) => console.log(e))
      //    .done()

      const formData = new FormData();
      formData.append('files[]', {
         uri: this.state.file.uri  //URI for video,audio, image or any type file
      });
      //text data in key value pair form
      const serviceResponse = fetch(
         urlStat.editPhoto,
         {
            method: 'POST',
            headers: {
               'Accept': 'application/json',
               'Content-Type': 'multipart/form-data',
               'Authorization': Http.instance.getToken()
            },
            body: formData,
         })
         .then((serviceResponse) => { return serviceResponse.json() })
         .catch((error) => console.warn("fetch error:", error))
         .then((serviceResponse) => {
            console.log(JSON.stringify(serviceResponse));
         });
   }


   dataURLtoFile(dataurl, filename) {

      var arr = dataurl.split(','),
         mime = arr[0].match(/:(.*?);/)[1],
         bstr = atob(arr[1]),
         n = bstr.length,
         u8arr = new Uint8Array(n);

      while (n--) {
         u8arr[n] = bstr.charCodeAt(n);
      }

      return new File([u8arr], filename, { type: mime });
   }

   render() {

      return (
         <>
            <Title title="Editar Fotografía" />
            <Container>


               <Pressable style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}
                  onPress={this.handleSelectImage.bind(this)}
               >
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

                     : <ImgPerfil
                        source={{ uri: urlStat.img + User.instance.getUser().photo }}
                        style={{
                           marginLeft: 0,
                           width: 200,
                           height: 200, borderRadius: 100,
                           margin: 20
                        }}
                     />
                  }



               </Pressable>

               <View style={{ flex: .5, justifyContent: 'flex-end', alignItems: 'center' }}>

                  <BtnSimple
                     title="Aceptar"
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
