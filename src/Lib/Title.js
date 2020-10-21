import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';
import PaddingVertical from '../Login/Component/PaddingVertical'


function Title (props) {
  return (
    <View style={styles.container}>
      
      <Text
        style={[
          styles.text_login,

        ]}>
        {props.title}
      </Text>
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
