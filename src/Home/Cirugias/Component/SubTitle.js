import React from 'react'
import {
    View,
    Text,
    StyleSheet
}from 'react-native';

import StatFont from '../../../Lib/Component/StatFont'
function SubTitle (props) {
    return(

        <StatFont
        style={[
          styles.text_login,
          {
            color: 'black',
            paddingTop: 16,
            paddingStart: 20,
            paddingBottom: 6,
            alignSelf: 'flex-start',
            letterSpacing: 2,
            fontWeight: '200',
            fontSize: 24,
          },
        ]}>
        {props.text}
      </StatFont>
    )

}
export default SubTitle;

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
      flexDirection: 'row',
      //alignItems: 'center',
      //justifyContent: 'center',
      backgroundColor: '#2185fb',
      paddingHorizontal: 26,
    },
  
    footer: {
      flex: 7,
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
      width: '50%',
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      elevation: 0,
      fontFamily: 'Questrial-Regular',
      alignItems: 'center',
      marginTop: 40,
    },
    text_input: {
      marginStart: 8,
      marginEnd: 27,
      borderBottomWidth: 1,
      borderBottomColor: '#2185fb',
      fontFamily: 'Questrial-Regular',
      fontWeight: '100',
      letterSpacing: 2,
      fontSize: 18,
    },
  });
  