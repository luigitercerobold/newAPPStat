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


import Title from '../../../Lib/Title'
import BtnProximaCirugia from '../Component/BtnProximaCirugia'
import http from 'newAPPStat/src/Lib/http'
import urlStat from 'newAPPStat/src/Lib/url'
import init from 'newAPPStat/src/Lib/init'
import Container from '../../../Login/Component/LoginComponent/ContainerCenter'
import PaddingVertical from '../../../Login/Component/PaddingVertical'

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
