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

        // Animated.timing(LogoScale, {
        //   toValue: 2,
        //   duration: 500,
        // }),
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
              this.props.navigation.navigate('Auth');
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
                // scale: this.state.LogoScale.interpolate({
                //   inputRange: [0, 0.5, 1],
                //   outputRange: [1, 0.8, 0.6],
                // }),
                // scaleY: this.state.LogoScale.interpolate({
                //   inputRange: [0, 0.5, 1],
                //   outputRange: [1,0.5, 0.2],
                // }),
              },
            ],
            top: this.state.LogoAnime.interpolate({
              inputRange: [0, 1],
              outputRange: [80, 0],
            }),
          }}>
          <Image style={{width: 185, height: 55}} source={Logo} />
        </Animated.View>

        {/*<Text style={{fontFamily: 'Questrial-Regular', fontSize: 32}}>*/}
        {/*  Cargando escena*/}
        {/*</Text>*/}
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
