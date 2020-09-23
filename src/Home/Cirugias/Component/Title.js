import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native';


function Title(props) {
  return (
<View style ={styles.container}>
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
    fontSize: 20,
    color: '#2185fb',


    letterSpacing: 2,
    
    fontSize: 32,
  },container:{
    paddingHorizontal:20
  }

});
