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

import Pendiente from '../Component/Pendiente'
import NavigateCirugia from '../Component/NavigateCirugia'

class Cirugias extends Component {
    constructor() {
        super();
    }

    goToAgendarCirugia() {
        this.props.navigation.navigate('')
    }

    render() {
        
        return (
            <View >
                <Pendiente></Pendiente>
                <NavigateCirugia text="Ver Cirugías"></NavigateCirugia>
                <NavigateCirugia text="Agendar Cirugía"></NavigateCirugia>
            </View>
        );
    }
}
export default Cirugias;
const styles = StyleSheet.create({

});
