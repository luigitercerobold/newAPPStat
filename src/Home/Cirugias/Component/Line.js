import React from "react";
import {
    View,
    Text,
    StyleSheet
}from 'react-native';



function Line (props) {
    return(
        <View style={styles.viwer} >
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}></View>
            <View style={styles.container}>
            {props.children}
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: 'gray' }}></View>
        </View>
    )

}
export default Line;

const styles = StyleSheet.create({
    container: {
        padding:10,
        backgroundColor:'rgb(125, 26, 7)'
     
    },
    viwer:{
        backgroundColor:'rgb(125, 35, 7)'
    }

})