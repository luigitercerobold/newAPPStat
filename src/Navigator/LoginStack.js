
import React from 'react';
import AsistenteAdministrativo from '../Login/Container/AsistenteAdministrativo'
import DatosNuevoUsuario from '../Login/Container/DatosNuevoUsuario'
import PerfilNuevoUsuario from '../Login/Container/PerfilNuevoUsuario'
import VerificarToken from '../Login/Container/VerificarToken'
import Procedimiento from '..//Home/Cirugias/Views/AddCirugia/Procedimiento'
import Login from '../Login/Container/Login'
import Cirugias from '../Home/Cirugias/Views/Cirugias'
import Welcome from '../Login/Component/Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import Color from '../Lib/Colors'
import {LogoTitle} from './LogoTitle'
import {BackImageRow} from './BackImageRow'
import Animacion from '../Login/Component/Animacion';
import Olvidar from '../Login/Container/Olvidar'
import CorreoCorrectamente from '../Login/Container/CorreoCorrectamente'
const StackLogin = createStackNavigator();


export function StackLoginFunction() {
   return (
     <StackLogin.Navigator
    
       initialRouteName="Animacion"
       screenOptions={{
         headerShown: true,
         headerTintColor: '#fff',
         headerStyle: {
           backgroundColor: Color.blue,
         },
         headerTitle: props => <LogoTitle pro={props} {...props} />,
         headerBackImage: props => <BackImageRow {...props} />,
         //headerRight:props => <Hamburgues {...props}/>,
         headerTitleAlign:"center"
       }}
     >
       
       <StackLogin.Screen options={{ title: 'Welcome' }} name="Welcome" component={Welcome} options={{ headerShown: false }} />
       <StackLogin.Screen options={{ title: 'Nuevo Usuario' }} name="DatosNuevoUsuario" component={DatosNuevoUsuario} />
       <StackLogin.Screen options={{ title: 'Perfil de Doctor' }} name="PerfilNuevoUsuario" component={PerfilNuevoUsuario} />
       <StackLogin.Screen options={{ title: 'Verificar Token' }} name="VerificarToken" component={VerificarToken} />
       <StackLogin.Screen options={{ title: 'Procedimiento' }} name="Procedimiento" component={Procedimiento} />
       <StackLogin.Screen options={{ title: 'Asistente Administrativo' }} name="AsistenteAdministrativo" component={AsistenteAdministrativo} />
       <StackLogin.Screen options={{ title: 'Login' }} name="Login" component={Login} options={{ title: 'Menu', headerShown: false }} />
       <StackLogin.Screen options={{ title: 'Login' }} name="Animacion" component={Animacion} options={{ title: 'Menu', headerShown: false }} />
       <StackLogin.Screen options={{ title: 'Olvidar' }} name="Olvidar" component={Olvidar}  />
       <StackLogin.Screen options={{ title: 'Olvidar' }} name="CorreoCorrectamente" component={CorreoCorrectamente}  />
     
     </StackLogin.Navigator>
   )
 }