/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StatusBar, Text, Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Context from './Context'
import { StackLoginFunction } from './src/Navigator/LoginStack'
import { DrawerFunction } from './src/Navigator/DrawerFunction'


const App: () => React$Node = () => {
  return (
    <>

      <Context.Provider>
        <StatusBar barStyle="light-content" />



        <Context.Consumer>
          {
            ({ isAuth, activateAuth }) => {
              return (
                
                  <NavigationContainer>
                    {
                      true
                      ? DrawerFunction()
                      :StackLoginFunction()
                    }
                  </NavigationContainer>
              )
            }
          }
        </Context.Consumer>
      </Context.Provider>
    </>
  );
};




export default App;
