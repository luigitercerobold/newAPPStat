
import React from 'react';
import{
    View,
    Text,
    StyleSheet,
    Animated,
    Image,
    TextInput,
    TouchableOpacity, Button
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import LogoWhite from '../../../../assets/img/logo.png'
function Header(props) {
    return (
        <SafeAreaView>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}
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
                style={{ justifyContent: 'center', }}>
                <FontAwesome5
                    name="bars"
                    color="white"
                    size={30}
                />
            </TouchableOpacity>
        </View>
        </SafeAreaView>
    )
}

export default Header;
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
        fontSize: 20,
    },
    login: {
        width: '50%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        elevation: 0,
        fontFamily: 'Questrial-Regular',
        alignItems: 'center',
        marginTop: 40,
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
});
