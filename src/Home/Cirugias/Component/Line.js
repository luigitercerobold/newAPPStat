import React from "react";
import {
    View,
    Text,
    StyleSheet
}from 'react-native';



function Line (props) {
    return(
        <View >
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
        margin:15,
     
    },

})