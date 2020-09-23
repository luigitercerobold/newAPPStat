/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './src/reducers/index'
import { createStackNavigator } from '@react-navigation/stack';
import Animacion from './src/Login/Component/Animacion';
import AuthSc from './src/Login/Container/Auth';
import Welcome from './src/Login/Component/Welcome';
import Menu from './src/Home/src/Container/Menu';
import Cirugias from './src/Home/Cirugias/Views/Cirugias'
import AgendarCirugia from './src/Home/Cirugias/Views/AgendarCirugia'
import FechaYHora from './src/Home/Cirugias/Views/AgendarCirugia/FechaYHora'
import Cuerpo from './src/Home/Cirugias/Views/AddCirugia/Cuerpo'
import color from 'newAPPStat/src/Lib/Colors'
import Hospital from './src/Home/Cirugias/Views/Hospital/Hospital'
import Asistente from './src/Home/Cirugias/Views/Asistencia/Asistent'
import AgendarProducto from './src/Home/Cirugias/Views/Product/AgendaDeProductos'
import ElegirBody from './src/Home/Cirugias/Views/Product/Body'
import Proveedor from './src/Home/Cirugias/Views/Product/Proveedor'
import Productos from './src/Home/Cirugias/Views/Product/Productos'
import AddProductos from './src/Home/Cirugias/Views/Product/AddProduct'
import EstadoCirugia from './src/Home/Cirugias/Views/EstadoCirugia'
import VerCirugia from './src/Home/Cirugias/Views/VerCirugia'
import AsistenteAdministrativo from './src/Login/Container/AsistenteAdministrativo'
import DatosNuevoUsuario from './src/Login/Container/DatosNuevoUsuario'
import PerfilNuevoUsuario from './src/Login/Container/PerfilNuevoUsuario'
import VerificarToken from './src/Login/Container/VerificarToken'
import Procedimiento from './src/Home/Cirugias/Views/AddCirugia/Procedimiento'
import Login from './src/Login/Container/Login'
const Stack = createStackNavigator();
const store = createStore(
  reducers, //Todos los reducers
  {}//estado inicial
);

function NavStack() {

  const ImageHeader = props => (
    <View style={{ backgroundColor: '#2185fb' }}>
      <Image
        style={{ width: 95, height: 25, resizeMode: 'contain' }}
        source={LogoWhite}
      />
    </View>
  );


  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: color.blue,
        }
      }}
      options={{
        headerStyle: {
          backgroundColor: color.blue,
        }
      }}
    >


      <Stack.Screen name="Loading" component={Animacion} options={{ title: 'Loading',headerShown: false }} />
      <Stack.Screen /*options={{ title: 'Login' }}                    */name="Auth" component={AuthSc} options={{ title: 'Login', headerShown: false, }} />
      <Stack.Screen /*options={{ title: 'Welcome' }}                  */name="Welcome" component={Welcome} />
      <Stack.Screen /*options={{ title: 'Nuevo Usuario' }}            */name="DatosNuevoUsuario" component={DatosNuevoUsuario} />
      <Stack.Screen /*options={{ title: 'Perfil de Doctor' }}         */name="PerfilNuevoUsuario" component={PerfilNuevoUsuario} />
      <Stack.Screen /*options={{ title: 'Verificar Token' }}          */name="VerificarToken" component={VerificarToken} />
      <Stack.Screen /*options={{ title: 'Procedimiento' }}            */name="Procedimiento" component={Procedimiento} />
      <Stack.Screen /*options={{ title: 'Asistente Administrativo' }} */name="AsistenteAdministrativo" component={AsistenteAdministrativo} />
      <Stack.Screen /*options={{ title: 'Login' }}                    */name="Login" component={Login} options={{ title: 'Menu',headerShown: false }}/>
      
      <Stack.Screen /**options={{ title: 'Menú' }}               */name="Menu" component={Menu} options={{ title: 'Menu' }} />
      <Stack.Screen /**options={{ title: 'Cirugías' }}           */name="Cirugias" component={Cirugias} />
      <Stack.Screen /**options={{ title: 'Agendar Cirugía' }}    */name="AgendarCirugia" component={AgendarCirugia} />
      <Stack.Screen /**options={{ title: 'Fecha y Hora' }}       */name="FechaYHora" component={FechaYHora} />
      <Stack.Screen /**options={{ title: 'Cuerpo' }}             */name="Cuerpo" component={Cuerpo} />
      <Stack.Screen /**options={{ title: 'Hospital' }}           */name="Hospital" component={Hospital} />
      <Stack.Screen /**options={{ title: 'Asistente' }}          */name="Asistente" component={Asistente} />
      <Stack.Screen /**options={{ title: 'Agendar Producto' }}   */name="AgendarProducto" component={AgendarProducto} />
      <Stack.Screen /**options={{ title: 'Parte del Cuerpo' }}   */name="ElegirBody" component={ElegirBody} />
      <Stack.Screen /**options={{ title: 'Proveedor' }}          */name="Proveedor" component={Proveedor} />
      <Stack.Screen /**options={{ title: 'Productos' }}          */name="Productos" component={Productos} />
      <Stack.Screen /**options={{ title: 'Agregar Producto' }}   */name="AddProductos" component={AddProductos} />
      <Stack.Screen /**options={{ title: 'Estado Cirugía' }}     */name="EstadoCirugia" component={EstadoCirugia} />
      <Stack.Screen /**options={{ title: 'Ver Cirugía' }}        */name="VerCirugia" component={VerCirugia} />



    </Stack.Navigator>
  );
}



const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="light-content" />
        <NavigationContainer>
          <NavStack />
        </NavigationContainer>
      </Provider>

    </>
  );
};



export default App;
