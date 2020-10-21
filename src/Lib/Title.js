import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PaddingVertical from '../Login/Component/PaddingVertical'
import StatFont from '../Lib/Component/StatFont'

function Title (props) {
  return (
    <View style={styles.container}>
      
      <StatFont
        style={[
          styles.text_login,

        ]}>
        {props.title}
      </StatFont>
    </View>
  )
}
export default Title;

const styles = StyleSheet.create({

  text_login: {
    color: '#2185fb',
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    letterSpacing: 3,
    
    color: '#2185fb',


    letterSpacing: 2,

    fontSize: 25,
  }, container: {
    paddingHorizontal: 20,
    paddingVertical:20
  }

});
