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
import Title from '../../../Lib/Title'
import BtnProximaCirugia from '../Component/BtnProximaCirugia'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import init from 'newAPPStat/src/Lib/init'
import Container from '../../../Login/Component/LoginComponent/ContainerCenter'
import BtnSimple from '../../../Login/Component/BtnSimple'
import ScrollCenter from '../../../Login/Component/ScrollCenter'
import PaddingVertical from '../../../Login/Component/PaddingVertical'
import Header from '../../src/Component/Header'


class Cirugias extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        if (http.instance.getToken() === null) {
            this.getToken()
        }

    }
    getToken = async () => {
        const url = urlStat.login
        const body = init
        const data = await http.instance.post(url, body)
        this.setState({ token: data.token })
        http.instance.setToken(data.token)
        http.instance.setId(data.data.id)
        console.log("data", data.data);

    }

    goToAgendarCirugia = () => {
        this.props.navigation.navigate('AgendarCirugia');
    }

    goToVerCirugia = () => {
        this.props.navigation.navigate('VerCirugia');
    }

    render() {

        return (

            <View style={styles.container}>
                <Header navigation = {this.props.navigation}/>
                <Title title="Próxima cirugía" />
                <Container>
                    <BtnProximaCirugia onPress={this.goToVerCirugia} text="Ver cirugía" img={require("newAPPStat/assets/Icon/1x/cirugias-ver_cirgias.png")} />
                    <BtnProximaCirugia onPress={this.goToAgendarCirugia} text="Agendar cirugía" img={require("newAPPStat/assets/Icon/1x/cirugias-agregar_cirugias.png")} />
                </Container>
                <PaddingVertical vertical={1} />
            </View>

        );
    }
}
export default Cirugias;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});
