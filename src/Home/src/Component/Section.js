import React from 'react';
import {
   View,
   Text,
   StyleSheet,
   Animated,
   Image,
   TextInput,
   TouchableOpacity, Button
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import SvgUri from 'react-native-svg-uri';
import testSvg from '../../../../assets/Icon/bajar.svg';
function Section(props) {

   return (
      <View>
         <TouchableOpacity
            style={{
               paddingHorizontal: 13,
               justifyContent: 'center',
               alignContent: 'center',
               textAlignVertical: 'top',
            }}
            onPress={props.nexPage}>
            <View style={[styles.reactItem, { flexDirection: 'row' }]}>
               <Text style={styles.text_input}>{props.text}</Text>
               <View
                  style={styles.iconFrame}
               >
                  <SvgUri
                     width="200"
                     height="200"
                     source={require('../../../../assets/Icon/permisos.svg')}
                  />
                  <SvgUri
                     width="200"
                     height="200"
                     source={{ uri: 'http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg' }}
                  />
               </View>
            </View>
         </TouchableOpacity>

      </View>

   )

}

export default Section;


const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: 'white',
   },
   absoluteFilled: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
   },
   samerow: {
      width: '100%',
      flexDirection: 'row',
   },
   progressBar: {
      height: 8,
      flexDirection: 'row',
      width: '100%',
      backgroundColor: 'white',
      // borderBottomColor: '#2185fb',
      // borderBottomWidth: 4.5,
   },
   header: {
      flex: 1,
      width: '100%',
      //alignItems: 'center',
      //justifyContent: 'center',
      backgroundColor: '#2185fb',
   },

   footer: {
      flex: 1.5,
   },
   inputview: {
      paddingHorizontal: 17,
   },
   text_login: {
      color: '#2185fb',
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
      letterSpacing: 3,
      fontSize: 20,
   },
   login: {
      width: '30%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
   },
   reactItem: {
      borderBottomWidth: 0.5,
      borderBottomColor: '#000',
      paddingHorizontal: 15,
      alignContent: 'center',
   },
   iconFrame: {
      justifyContent: 'center',
      marginLeft: 30,
      // paddingLeft:90,
      height: 100,
      width: 100,
      marginTop: '-10%',
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 10,
      //shadowOffset: {height: 100, width: 100},
      shadowColor: '#000000',
      shadowOpacity: 0.8,
      shadowRadius: 8,
   },
   text_input: {
      height: 80,
      paddingTop: 23,
      // borderBottomWidth: 1,
      // borderBottomColor: 'gray',
      marginStart: 8,
      marginEnd: 27,
      color: '#1f2d49',
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
      letterSpacing: 2,
      fontSize: 28,
   },
});