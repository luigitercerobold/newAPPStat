import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import LogoS from '../../../assets/img/slogo.png';
//import { LinearGradient } from 'expo-linear-gradient';

class WelcomeSc extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    setTimeout(
        function() {
          this.props.navigation.navigate('Menu')
        }
            .bind(this),
        2000
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {/* <LinearGradient
            colors={['#2185fb', '#0c71e8']}
            style={{
              width: 70,
              height: 70,
              alignItems: 'center',
              justifyContent: 'center',
            }}> */}
            <Image
              style={{width: 145, height: 35, resizeMode: 'contain'}}
              source={LogoS}
            />
          {/* //</LinearGradient> */}

          <Text
            style={[
              styles.text_login,
              {
                color: '#2185fb',
                paddingTop: 60,
                alignSelf: 'center',
                letterSpacing: 3,
                fontWeight: 'small',
                fontSize: 40,
              },
            ]}>
            BIENVENIDO
          </Text>
          <Text
            style={[
              styles.text_login,
              {
                color: 'black',
                paddingTop: 20,
                paddingHorizontal: 60,
                alignSelf: 'center',
                textAlign: 'center',
                fontWeight: 'small',
                fontSize: 28,
              },
            ]}>
            {global.username}
          </Text>
        </View>
      </View>
    );
  }
}
export default WelcomeSc;
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
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 26,
  },

  footer: {
    flex: 6,
  },
  inputview: {
    paddingHorizontal: 30,
  },
  text_login: {
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    letterSpacing: 1,
    fontSize: 20,
  },
  text_login2: {
    color: '#2185fb',
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    letterSpacing: 1,
    fontSize: 20,
  },
  login: {
    width: '30%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_input: {
    backgroundColor: '#e6e7e8',
    fontFamily: 'Questrial-Regular',
    fontWeight: '100',
    letterSpacing: 2,
    fontSize: 18,
  },
});
