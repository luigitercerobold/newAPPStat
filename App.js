/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  Pressable,
  StatusBar,
  View,
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


import TryConnection from './src/Internet/TryConnection'

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
import IndexProduct from './src/Home/Productos/Views/IndexProduct'
import BodyProducto from './src/Home/Productos/Views/BodyPart'
import FiltrarProveedores from './src/Home/Productos/Views/FiltrarProveedores'
import ProductoProveedor from './src/Home/Productos/Views/ProductosDeProveedores'
import ProductosProductos from './src/Home/Productos/Views/Productos'
import DetalleProducto from './src/Home/Productos/Views/DetalleProducto'
import Providers from './src/Home/Productos/Views/Provaider'


import ScreenBody from './src/Esqueleto/container/Screens'

import Brazo from './src/Esqueleto/container/Brazo'

import Craneo from './src/Esqueleto/container/Craneo'
import Esqueleto from './src/Esqueleto/container/Esqueleto'

import Piernas from './src/Esqueleto/container/Piernas'
import Pies from './src/Esqueleto/container/Pies'

const Stack = createStackNavigator();
const store = createStore(
  reducers, //Todos los reducers
  {}//estado inicial
);

function NavStack() {

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: true,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: color.blue,
        },
        headerTitle: props => <LogoTitle {...props} />,
        headerBackImage: props => <BackImagerow {...props}/>
        
      }}


    >

      <Stack.Screen options={{ title: 'Brazo' }} name="Brazo" component={Brazo} />

      <Stack.Screen options={{ title: 'Craneo' }} name="Craneo" component={Craneo} />
      <Stack.Screen options={{ title: 'Esqueleto' }} name="Esqueleto" component={Esqueleto} />

      <Stack.Screen options={{ title: 'Piernas' }} name="Piernas" component={Piernas} />
      <Stack.Screen options={{ title: 'Pies' }} name="Pies" component={Pies} />


      <Stack.Screen name="Try" component={TryConnection} options={{ title: 'try', headerShown: false }} />

      <Stack.Screen name="Loading" component={Animacion} options={{ title: 'Loading', headerShown: false }} />

      <Stack.Screen options={{ title: 'Welcome' }} name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen options={{ title: 'Nuevo Usuario' }} name="DatosNuevoUsuario" component={DatosNuevoUsuario} />
      <Stack.Screen options={{ title: 'Perfil de Doctor' }} name="PerfilNuevoUsuario" component={PerfilNuevoUsuario} />
      <Stack.Screen options={{ title: 'Verificar Token' }} name="VerificarToken" component={VerificarToken} />
      <Stack.Screen options={{ title: 'Procedimiento' }} name="Procedimiento" component={Procedimiento} />
      <Stack.Screen options={{ title: 'Asistente Administrativo' }} name="AsistenteAdministrativo" component={AsistenteAdministrativo} />
      <Stack.Screen options={{ title: 'Login' }} name="Login" component={Login} options={{ title: 'Menu', headerShown: false }} />

      <Stack.Screen options={{ title: 'Menú' }} name="Menu" component={Menu} options={{ title: 'Menu', headerShown: false }} />
      <Stack.Screen options={{ title: 'Cirugías' }} name="Cirugias" component={Cirugias} />
      <Stack.Screen options={{ title: 'Agendar Cirugía' }} name="AgendarCirugia" component={AgendarCirugia} />
      <Stack.Screen options={{ title: 'Fecha y Hora' }} name="FechaYHora" component={FechaYHora} />
      <Stack.Screen options={{ title: 'Cuerpo' }} name="Cuerpo" component={Cuerpo} />
      <Stack.Screen options={{ title: 'Hospital' }} name="Hospital" component={Hospital} />
      <Stack.Screen options={{ title: 'Asistente' }} name="Asistente" component={Asistente} />
      <Stack.Screen options={{ title: 'Agendar Producto' }} name="AgendarProducto" component={AgendarProducto} />
      <Stack.Screen options={{ title: 'Parte del Cuerpo' }} name="ElegirBody" component={ElegirBody} />
      <Stack.Screen options={{ title: 'Proveedor' }} name="Proveedor" component={Proveedor} />
      <Stack.Screen options={{ title: 'Productos' }} name="Productos" component={Productos} />
      <Stack.Screen options={{ title: 'Agregar Producto' }} name="AddProductos" component={AddProductos} />
      <Stack.Screen options={{ title: 'Estado Cirugía' }} name="EstadoCirugia" component={EstadoCirugia} />
      <Stack.Screen options={{ title: 'Ver Cirugía' }} name="VerCirugia" component={VerCirugia} />
      <Stack.Screen name="IndexProduct" component={IndexProduct} />
      <Stack.Screen name="BodyProducto" component={BodyProducto} />
      <Stack.Screen name="FiltrarProveedores" component={FiltrarProveedores} />
      <Stack.Screen name="ProductosProveedor" component={ProductoProveedor} />
      <Stack.Screen name="ProductosProductos" component={ProductosProductos} />
      <Stack.Screen name="DetalleProducto" component={DetalleProducto} />
      <Stack.Screen name="Provider" component={Providers} />

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

function LogoTitle() {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1, alignItems: 'center',backgroundColor:"fff", justifyContent: 'center', flexDirection: "row" }}>
        <Image
          style={{ width: 105, height: 35, }}
          source={require('newAPPStat/assets/img/logo.png')}
          resizeMode='contain'
        />
      </View>

      <Pressable>
        <Image
          style={{ width: 40, height: 30 }}
          source={require('newAPPStat/assets/Icon/1x/menu.png')}
          resizeMode='contain'
        />
      </Pressable>
    </View>

  );
}

function BackImagerow() {
  return (
        <Image
          style={{ width: 35, height: 35, }}
          source={require('newAPPStat/assets/Icon/1x/atras-ingresardatos.png')}
          resizeMode='contain'
        />
  );
}

export default App;
