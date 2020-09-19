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

import { NavigationActions } from 'react-navigation';
//import LogoWhite from '../../assets/img/logo.png';
import { LinearGradient } from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
class SurHomeSc extends React.Component {
    state = {
        showTime: 'true',
    }
    render() {
        const prod = this.props.route.params.item;
        const assist = this.props.route.params.assist;
        const hospi = this.props.route.params.hospi;
        const fecha = this.props.route.params.fecha;
        const parte = this.props.route.params.parte;
        const proce = this.props.route.params.proce;
        const hora = this.props.route.params.hora;
        const duracion = this.props.route.params.duracion;
        return (

            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                        style={{ justifyContent: 'center' }}>
                        <FontAwesome5
                            style={{ alignSelf: 'flex-start' }}
                            name="arrow-circle-left"
                            color="white"
                            size={25}
                        />
                    </TouchableOpacity>

                    <Image
                        style={{
                            alignSelf: 'center',
                            width: 145,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            height: 35,
                            resizeMode: 'contain',
                        }}
                        source={LogoWhite}
                    />
                    <TouchableOpacity
                        onPress={() => this.props.navigation.openDrawer()}
                        style={{ justifyContent: 'center' }}>
                        <FontAwesome5 name="bars" color="white" size={30} />
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text
                        style={[
                            styles.text_login,
                            {
                                color: '#2185fb',
                                paddingTop: 26,
                                paddingStart: 20,
                                paddingBottom: 26,
                                alignSelf: 'flex-start',
                                letterSpacing: 2,
                                fontWeight: 'small',
                                fontSize: 32,
                            },
                        ]}>
                        Agendar cirugía
          </Text>
                    <View style={{ flexDirection: "row", alignItems: 'center', backgroundColor: '#D3D3D3', paddingTop: 10, paddingBottom: 10, }}>
                        <FontAwesome5
                            style={{ paddingStart: 10, marginRight: 10, alignSelf: 'left' }}
                            name="calendar-alt"
                            color="#2185fb"
                            size={40}
                        />
                        <Text
                            style={[
                                styles.text_login,
                                {
                                    color: 'black',
                                    paddingStart: 10,
                                    justifyContent: 'center',
                                    letterSpacing: 2,
                                    fontWeight: 'small',
                                    fontSize: 18,
                                },
                            ]}>
                            {fecha}{'\n'}
                            {hora}  {'  '} {duracion}
                        </Text>
                        <TouchableOpacity
                            style={{ marginLeft: 'auto', marginRight: 10 }}
                            onPress={() => this.props.navigation.navigate('Calendar')}>
                            <View style={{
                                justifyContent: 'center',
                                width: 25,
                                marginStart: 20,
                                height: 25,
                                alignSelf: 'left',
                                borderRadius: 30,
                                backgroundColor: '#2185fb'
                            }}>
                                <FontAwesome5 style={{ alignSelf: 'center', }}
                                    name="pencil-alt"
                                    color="white"
                                    size={13}></FontAwesome5>
                            </View>
                        </TouchableOpacity>

                    </View>
                    {(parte && proce) ?

                        <View style={{ flexDirection: "row", alignItems: 'center', backgroundColor: '#D3D3D3', paddingTop: 10, paddingBottom: 10, }}>
                            <FontAwesome5
                                style={{ paddingStart: 10, marginRight: 10, alignSelf: 'left' }}
                                name="stethoscope"
                                color="#2185fb"
                                size={35}
                            />
                            <Text
                                style={[
                                    styles.text_login,
                                    {
                                        color: 'black',
                                        paddingStart: 10,
                                        justifyContent: 'center',
                                        letterSpacing: 2,
                                        fontWeight: 'small',
                                        fontSize: 18,
                                    },
                                ]}>
                                Cirugía {parte} - {'\n'}
                                {proce}
                            </Text>

                            <TouchableOpacity
                                style={{ marginLeft: 'auto', marginRight: 10 }}
                                onPress={() => this.props.navigation.navigate('Body')}>
                                <View style={{
                                    justifyContent: 'center',
                                    width: 25,
                                    height: 25,
                                    alignSelf: 'right',
                                    borderRadius: 30,
                                    backgroundColor: '#2185fb'
                                }}>
                                    <FontAwesome5 style={{ alignSelf: 'center', }}
                                        name="pencil-alt"
                                        color="white"
                                        size={13}></FontAwesome5>
                                </View>
                            </TouchableOpacity>

                        </View>

                        :

                        <TouchableOpacity style={{
                            marginTop: 10,
                            justifyContent: 'center',
                            marginLeft: '25%',
                            flexDirection: 'row',
                        }}
                            onPress={() => this.props.navigation.navigate('Body')}
                        >
                            <View style={{
                                width: '100%',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                textAlign: 'center', flexDirection: 'row',
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    width: 25,
                                    height: 25,
                                    alignSelf: 'center',
                                    borderRadius: 30,
                                    backgroundColor: '#2185fb'
                                }}>
                                    <FontAwesome5 style={{ alignSelf: 'center', }}
                                        name="plus"
                                        color="white"
                                        size={15}></FontAwesome5>
                                </View>
                                <Text
                                    style={[
                                        styles.text_login,
                                        {
                                            textAlign: 'center',
                                            paddingStart: 10,
                                            color: '#2185fb',
                                            alignSelf: 'center',
                                            letterSpacing: 1,
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                        },
                                    ]}>
                                    Añadir Cirugía
              </Text>
                            </View>
                        </TouchableOpacity>

                    }

                    {
                        hospi ?
                            <View style={{ flexDirection: "row", alignItems: 'center', backgroundColor: '#D3D3D3', paddingTop: 10, paddingBottom: 10, }}>
                                <FontAwesome5
                                    style={{ paddingStart: 10, marginRight: 10, alignSelf: 'left' }}
                                    name="hospital"
                                    color="#2185fb"
                                    size={40}
                                />
                                <Text
                                    style={[
                                        styles.text_login,
                                        {
                                            color: 'black',
                                            paddingStart: 10,
                                            justifyContent: 'center',
                                            letterSpacing: 2,
                                            fontWeight: 'small',
                                            fontSize: 18,
                                        },
                                    ]}>
                                    Hospital -{'\n'}
                                    {hospi}
                                </Text>

                                <TouchableOpacity
                                    style={{ marginLeft: 'auto', marginRight: 10 }}
                                    onPress={() => this.props.navigation.navigate('Hospital')}>

                                    <View style={{
                                        justifyContent: 'center',
                                        width: 25,
                                        marginStart: 20,
                                        height: 25,
                                        alignSelf: 'left',
                                        borderRadius: 30,
                                        backgroundColor: '#2185fb'
                                    }}>
                                        <FontAwesome5 style={{ alignSelf: 'center', }}
                                            name="pencil-alt"
                                            color="white"
                                            size={13}></FontAwesome5>
                                    </View>
                                </TouchableOpacity>

                            </View>
                            :
                            <TouchableOpacity style={{
                                marginTop: 40,
                                marginLeft: '25%',
                                flexDirection: 'row', justifyContent: 'center',
                            }}
                                onPress={() => this.props.navigation.navigate('Hospital')}
                            >
                                <View style={{
                                    width: '100%',
                                    marginLeft: 'auto',
                                    marginRight: 'auto',
                                    textAlign: 'center', flexDirection: 'row',
                                }}>
                                    <View style={{
                                        justifyContent: 'center',
                                        width: 25,
                                        height: 25,
                                        alignSelf: 'center',
                                        borderRadius: 30,
                                        backgroundColor: '#2185fb'
                                    }}>
                                        <FontAwesome5 style={{ alignSelf: 'center', }}
                                            name="plus"
                                            color="white"
                                            size={15}></FontAwesome5>
                                    </View>
                                    <Text
                                        style={[
                                            styles.text_login,
                                            {
                                                textAlign: 'center',
                                                paddingStart: 10,
                                                color: '#2185fb',
                                                alignSelf: 'center',
                                                letterSpacing: 1,
                                                fontWeight: 'bold',
                                                fontSize: 16,
                                            },
                                        ]}>
                                        Añadir Hospital
                        </Text>
                                </View>
                            </TouchableOpacity>
                    }

                    {
                        assist ?

                            <View style={{ flexDirection: "row", alignItems: 'center', backgroundColor: '#D3D3D3', paddingTop: 10, paddingBottom: 10, }}>
                                <FontAwesome5
                                    style={{ paddingStart: 10, marginRight: 10, alignSelf: 'left' }}
                                    name="users"
                                    color="#2185fb"
                                    size={30}
                                />
                                <Text
                                    style={[
                                        styles.text_login,
                                        {
                                            color: 'black',
                                            paddingStart: 8,
                                            justifyContent: 'center',
                                            letterSpacing: 2,
                                            fontWeight: 'small',
                                            fontSize: 18,
                                        },
                                    ]}>
                                    Asistencia {'\n'}
                                    <Text
                                        style={[
                                            styles.text_login,
                                            {
                                                color: 'black',
                                                paddingStart: 20,
                                                justifyContent: 'center',
                                                letterSpacing: 2,
                                                fontWeight: 'small',
                                                fontSize: 12,
                                            },
                                        ]}
                                    >
                                        {assist}
                                    </Text>
                                </Text>

                                <TouchableOpacity
                                    style={{ marginLeft: 'auto', marginRight: 10 }}
                                    onPress={() => this.props.navigation.navigate('Assist')}>
                                    <View style={{
                                        justifyContent: 'center',
                                        width: 25,
                                        marginStart: 20,
                                        height: 25,
                                        alignSelf: 'left',
                                        borderRadius: 30,
                                        backgroundColor: '#2185fb'
                                    }}>
                                        <FontAwesome5 style={{ alignSelf: 'center', }}
                                            name="pencil-alt"
                                            color="white"
                                            size={13}></FontAwesome5>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            :

                            <TouchableOpacity style={{
                                marginTop: 40,
                                flexDirection: 'row', marginLeft: '25%',
                            }}
                                onPress={() => this.props.navigation.navigate('Assist')}>
                                <View style={{
                                    justifyContent: 'center',
                                    width: 25,
                                    height: 25,
                                    alignSelf: 'left',
                                    borderRadius: 30,
                                    backgroundColor: '#2185fb'
                                }}>
                                    <FontAwesome5 style={{ alignSelf: 'center', }}
                                        name="plus"
                                        color="white"
                                        size={15}></FontAwesome5>
                                </View>
                                <Text
                                    style={[
                                        styles.text_login,
                                        {
                                            textAlign: 'left',
                                            paddingStart: 10,
                                            color: '#2185fb',
                                            alignSelf: 'center',
                                            letterSpacing: 1,
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                        },
                                    ]}>
                                    Añadir Asistencia
                        </Text>

                            </TouchableOpacity>
                    }

                    {
                        prod ?

                            <View style={{ flexDirection: "row", alignItems: 'center', backgroundColor: '#D3D3D3', paddingTop: 10, paddingBottom: 10, }}>
                                <FontAwesome5
                                    style={{ paddingStart: 10, marginRight: 10, alignSelf: 'left' }}
                                    name="wheelchair"
                                    color="#2185fb"
                                    size={35}
                                />
                                <Text
                                    style={[
                                        styles.text_login,
                                        {
                                            color: 'black',
                                            paddingStart: 10,
                                            justifyContent: 'center',
                                            letterSpacing: 2,
                                            fontWeight: 'small',
                                            fontSize: 18,
                                        },
                                    ]}>
                                    Productos {'\n'}
                                    <Text
                                        style={[
                                            styles.text_login,
                                            {
                                                color: 'black',
                                                paddingStart: 20,
                                                justifyContent: 'center',
                                                letterSpacing: 2,
                                                fontWeight: 'small',
                                                fontSize: 12,
                                            },
                                        ]}
                                    >
                                        {prod}
                                    </Text>
                                </Text>

                                <TouchableOpacity
                                    style={{ marginLeft: 'auto', marginRight: 10 }}
                                    onPress={() => this.props.navigation.navigate('prodF')}>
                                    <View style={{
                                        justifyContent: 'center',
                                        width: 25,
                                        marginStart: 20,
                                        height: 25,
                                        alignSelf: 'left',
                                        borderRadius: 30,
                                        backgroundColor: '#2185fb'
                                    }}>
                                        <FontAwesome5 style={{ alignSelf: 'center', }}
                                            name="pencil-alt"
                                            color="white"
                                            size={13}></FontAwesome5>
                                    </View>
                                </TouchableOpacity>

                            </View>

                            :

                            <TouchableOpacity style={{
                                marginTop: 40,
                                flexDirection: 'row', marginLeft: '25%',
                            }}
                                onPress={() => this.props.navigation.navigate('prodF')}
                            >
                                <View style={{
                                    justifyContent: 'center',
                                    width: 25,
                                    height: 25,
                                    alignSelf: 'left',
                                    borderRadius: 30,
                                    backgroundColor: '#2185fb'
                                }}>
                                    <FontAwesome5 style={{ alignSelf: 'center', }}
                                        name="plus"
                                        color="white"
                                        size={15}></FontAwesome5>
                                </View>
                                <Text
                                    style={[
                                        styles.text_login,
                                        {
                                            textAlign: 'left',
                                            paddingStart: 10,
                                            color: '#2185fb',
                                            alignSelf: 'center',
                                            letterSpacing: 1,
                                            fontWeight: 'bold',
                                            fontSize: 16,
                                        },
                                    ]}>
                                    Añadir Producto
                        </Text>

                            </TouchableOpacity>
                    }
                    <View style={styles.button}>
                        {


                            (prod && assist && hospi && fecha && parte && proce && hora && duracion)
                                ?
                                <LinearGradient
                                    colors={['#2185fb', '#0c71e8']}
                                    style={styles.login}>
                                    <TouchableOpacity
                                        style={[
                                            styles.absoluteFilled,
                                            { alignItems: 'center', justifyContent: 'center' },
                                        ]}
                                        onPress={() => this.props.navigation.navigate('CitaDone', {
                                            fecha: fecha,
                                            hora: hora,
                                            duracion: duracion
                                        })}>
                                        <Text
                                            style={[
                                                styles.text_login,
                                                {
                                                    color: 'white',
                                                },
                                            ]}>
                                            {' '}
                  Finalizar
                </Text>
                                    </TouchableOpacity>

                                </LinearGradient>
                                :

                                <LinearGradient
                                    colors={['#2185fb', '#0c71e8']}
                                    style={styles.login}>
                                    <TouchableOpacity
                                        style={[
                                            styles.absoluteFilled,
                                            { alignItems: 'center', justifyContent: 'center' },
                                        ]}
                                    >
                                        <Text
                                            style={[
                                                styles.text_login,
                                                {
                                                    color: 'white',
                                                },
                                            ]}>
                                            {' '}
                  Incompleto
                </Text>
                                    </TouchableOpacity>

                                </LinearGradient>
                        }

                    </View>
                </View>
            </View>
        );
    }
}
export default SurHomeSc;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    absoluteFilled: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
    },
    progressBar: {
        height: 8,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: 'white',
        // borderBottomColor: '#2185fb',
        // borderBottomWidth: 4.5,
    },
    header: {
        flex: 1,
        flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center',
        backgroundColor: '#2185fb',
        paddingHorizontal: 26,
    },

    footer: {
        flex: 7,
    },
    inputview: {
        paddingHorizontal: 17,
    },
    text_login: {
        color: '#2185fb',
        fontFamily: 'Questrial-Regular',
        fontWeight: '100',
        letterSpacing: 3,
        fontSize: 18,
    },
    login: {
        width: '40%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text_input: {
        marginStart: 8,
        marginEnd: 27,
        borderBottomWidth: 1,
        borderBottomColor: '#2185fb',
        fontFamily: 'Questrial-Regular',
        fontWeight: '100',
        letterSpacing: 2,
        fontSize: 18,
    },
    button: {
        elevation: 0,
        fontFamily: 'Questrial-Regular',
        alignItems: 'center',
        marginTop: 40,
    },
});
