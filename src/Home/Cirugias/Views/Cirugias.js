import React, { Component, useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Animated,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import LogoWhite from '../../../../assets/img/logo.png';
//import { LinearGradient } from 'expo-linear-gradient';
//import {Actions} from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Pendiente from '../Component/Pendiente'
import NavigateCirugia from '../Component/NavigateCirugia'
class Cirugias extends Component {
    constructor() {
        super();
    }

    goToAgendarCirugia(){
        this.props.navigation.navigate('')
    }
    render() {

        return (
            <View >
                <Pendiente></Pendiente>
                <NavigateCirugia text="Ver Cirugias"></NavigateCirugia>
                <NavigateCirugia text="Agendar Cirugia"></NavigateCirugia>
            </View> 
        );
    }
}
export default Cirugias;
const styles = StyleSheet.create({
   
});
