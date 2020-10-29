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

import init from 'newAPPStat/src/Lib/init'
import Container from '../../../Login/Component/LoginComponent/ContainerCenter'
import PaddingVertical from '../../../Login/Component/PaddingVertical'
import Pendiente from '../Component/Pendiente'
import Http from '../../../Lib/http';
import urlStat from '../../../Lib/url';
import Navigate from '../Component/NavigateCirugia'
class Cirugias extends Component {
    state = {
        item: {},
        loading: false
    }

    constructor() {
        super();
    }

    componentDidMount() {
        if (http.instance.getToken() === null) {
            this.getToken()
        }
        this.getNext()
    }

    getNext = async () => {
        this.setState({
            loading: true
        })
        const req = await Http.instance.get(urlStat.getNextSurgery, Http.instance.getToken())
        this.setState({
            item: req.data,
            loading: false
        })
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
        this.props.navigation.navigate('VerCelendar');
    }
    avisoCirugia = (item) => {
        if (item?.name === undefined) {

            return "No tiene cirugías agendadas"
        }
        return "Operación de " + item?.name
    }


    render() {
        const { item, loading } = this.state
        return (
            <View style={styles.container}>
                <Title title="Próxima cirugía" />
                {!loading ?
                    <Navigate
                        key={item?.invitationData?.id}
                        img={require("newAPPStat/assets/Icon/1x/menu-cirugas.png")}
                        goToPage={() => this.goTo(item)}
                        text1={this.avisoCirugia(item)}
                        text2={item?.hospital?.name}
                        text3={item?.date}
                        action="Agendar cirugía"
                        delate={false}
                        edit={false}

                    ></Navigate>
                    : null}


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
