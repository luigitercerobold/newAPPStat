import React, {Component} from 'react';
import {View, Image, Text, StyleSheet, Animated, Easing} from 'react-native';
import Logo from '../../../assets/img/logo.png';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
class LoadingSc extends Component {
  state = {
    LogoAnime: new Animated.Value(0),
    LogoScale: new Animated.Value(0),
    loadSpinner: false,
  };

  componentDidMount() {
    const {LogoAnime, LogoScale} = this.state;
    Animated.sequence([
      Animated.parallel([
        Animated.spring(LogoAnime, {
          toValue: 1,
          tension: 2,
          friction: 10,
          duration: 400,
        }),

      ]),
      Animated.parallel([
        Animated.timing(LogoAnime, {
          toValue: 4.6,
          delay: 1000,
          duration: 1000,
        }),
        Animated.timing(LogoScale, {
          toValue: 1,
          delay: 1000,
          duration: 1000,
        }),
      ]),
    ]).start(({ finished }) => {
      setTimeout(
          function() {
              this.props.navigation.navigate('Login');
          }
              .bind(this),
          500
      );
    });

  }

  render() {
    return (
      <View style={style.container}>
        <Animated.View
          style={{
            opacity: this.state.LogoAnime,
            transform: [
              {
                translateY: this.state.LogoAnime,
             
              },
            ],
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [60, 0],
            }),
          }}>
          <Image style={{width: 145, height: 35,}} source={Logo} resizeMode= 'contain' />
        </Animated.View>

      </View>
    );
  }
}
export default LoadingSc;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2185fb',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
