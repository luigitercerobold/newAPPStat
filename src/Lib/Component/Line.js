import React from "react";
import {
    View,
    Text,
    StyleSheet
}from 'react-native';
import Color from '../Colors'


function Line (props) {
    return(
        <View style={styles.viwer} >
            
            <View style={styles.container}>
            {props.children}
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray', padding:10, backgroundColor:Color.gray}}></View>
        </View>
    )

}
export default Line;

const styles = StyleSheet.create({
    container: {
        padding:1,
      backgroundColor:Color.gray
    },
    viwer:{
        //backgroundColor:'rgb(256, 256, 256)',
         paddingHorizontal:20
          
    }


})