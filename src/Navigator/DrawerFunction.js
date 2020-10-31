
import React from 'react';

import TryConnection from '../Internet/TryConnection'

import Menu from '../Home/src/View/Menu';

import AgendarCirugia from '../Home/Cirugias/Views/AgendarCirugia'
import FechaYHora from '../Home/Cirugias/Views/AgendarCirugia/FechaYHora'
import Cuerpo from '../Home/Cirugias/Views/AddCirugia/Cuerpo'
import color from 'newAPPStat/src/Lib/Colors'
import Hospital from '../Home/Cirugias/Views/Hospital/Hospital'
import Asistente from '../Home/Cirugias/Views/Asistencia/Asistent'
import AgendarProducto from '../Home/Cirugias/Views/Product/AgendaDeProductos'
import ElegirBody from '../Home/Cirugias/Views/Product/Body'
import Proveedor from '../Home/Cirugias/Views/Product/Proveedor'
import Productos from '../Home/Cirugias/Views/Product/Productos'
import AddProductos from '../Home/Cirugias/Views/Product/AddProduct'
import EstadoCirugia from '../Home/Cirugias/Views/EstadoCirugia'
import VerCirugia from '../Home/Cirugias/Views/VerCirugias/VerCirugia'
import Procedimiento from '../Home/Cirugias/Views/AddCirugia/Procedimiento'
import IndexProduct from '../Home/Productos/Views/IndexProduct'
import BodyProducto from '../Home/Productos/Views/BodyPart'
import FiltrarProveedores from '../Home/Productos/Views/FiltrarProveedores'
import ProductoProveedor from '../Home/Productos/Views/ProductosDeProveedores'
import ProductosProductos from '../Home/Productos/Views/Productos'
import DetalleProducto from '../Home/Productos/Views/DetalleProducto'
import Providers from '../Home/Productos/Views/Provaider'
import CustomDrawerContent from '../Drawer/CustomDrawerContent'
import AceptCirugia from '../Home/Cirugias/Views/AceptCirugia'
import ScreenBody from '../Esqueleto/container/Screens'

import Brazo from '../Esqueleto/container/Brazo'

import Craneo from '../Esqueleto/container/Craneo'
import Esqueleto from '../Esqueleto/container/Esqueleto'

import Piernas from '../Esqueleto/container/Piernas'
import Pies from '../Esqueleto/container/Pies'

import { createDrawerNavigator } from '@react-navigation/drawer';



import { createStackNavigator } from '@react-navigation/stack';
import Color from '../Lib/Colors'

import { LogoTitle } from './LogoTitle'
import { BackImageRow } from './BackImageRow'
import Gallery from '../Home/Productos/Views/GaleryProduc'
import Hamburgues from './Hamburgues'

import Asistencia from '../Home/Asistente/View/Asistencia'
import InvitarContacto from '../Home/Asistente/View/Invitar'
import BuscarContacto from '../Home/Asistente/View/Buscar'
import AsistenteAdministrativo from '../Home/Asistente/View/Asistente'
import SendInvitation from '../Home/Asistente/View/SendInivitation'

import AgregarAsistente from '../Home/Cirugias/Views/Asistencia/View/Index'
import AgregarAsistenteDeStat from '../Home/Cirugias/Views/Asistencia/View/AgregarDeStat'
import AgregarDeContacto from '../Home/Cirugias/Views/Asistencia/View/AgregarDeContactos'
import EditarUsuario from '../Home/src/View/EditarUsuario';


import Calendar from '../Home/Cirugias/Views/AgendarCirugia/Calendar'
import Invitation from '../Home/Cirugias/Views/Invitation'
import VerInvitacion from '../Home/Cirugias/Views/VerInvitacion'
import CalendarBy from '../Lib/Component/CalendarBy'
import VerCelendar from '../Home/Cirugias/Views/VerCirugias/Calendar'
import EditPassword from '../Home/src/View/EditPassWord'

import CropPhoto from '../Login/Container/CropPhoto';

import ContextUser from '../Home/src/View/ContextUser'

import ChangeEmail from '../Home/src/View/EditEmail'
import CirugiaContext from '../Home/Cirugias/Context/CirugiaContext'
const StackCirugias = createStackNavigator()
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Cirugia"
      screenOptions={{
        headerShown: true,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: Color.blue,
        },
        headerTitle: props => <LogoTitle pro={props} {...props} />,
        headerBackImage: props => <BackImageRow {...props} />,
        headerRight: props => <Hamburgues {...props} />,
        headerTitleAlign: "center"
      }}
    >
      <Stack.Screen options={{ title: 'Brazo' }} name="Brazo" component={Brazo} />
      <Stack.Screen options={{ title: 'Craneo' }} name="Craneo" component={Craneo} />
      <Stack.Screen options={{ title: 'Esqueleto' }} name="Esqueleto" component={Esqueleto} />
      <Stack.Screen options={{ title: 'Piernas' }} name="Piernas" component={Piernas} />
      <Stack.Screen options={{ title: 'Pies' }} name="Pies" component={Pies} />
      <Stack.Screen name="Try" component={TryConnection} options={{ title: 'try', headerShown: false }} />


      <Stack.Screen name="Cirugia" component={verCirugias}  options={{ title: 'try', headerShown: false }} />

      <Stack.Screen name="IndexProduct" component={IndexProduct} />
      <Stack.Screen name="BodyProducto" component={BodyProducto} />
      <Stack.Screen name="FiltrarProveedores" component={FiltrarProveedores} />
      <Stack.Screen name="ProductosProveedor" component={ProductoProveedor} />
      <Stack.Screen name="ProductosProductos" component={ProductosProductos} />
      <Stack.Screen name="DetalleProducto" component={DetalleProducto} />
      <Stack.Screen name="Provider" component={Providers} />
      <Stack.Screen name="Asistencia" component={Asistencia} />
      <Stack.Screen name="BuscarContacto" component={BuscarContacto} />
      <Stack.Screen name="InvitarContacto" component={InvitarContacto} />
      <Stack.Screen name="SendInvitation" component={SendInvitation} />
      <Stack.Screen name="AsistenteAdministrativo" component={AsistenteAdministrativo} />


      <Stack.Screen name="EditarUsuario" component={EditarUsuario} />
      
      <Stack.Screen name="Gallery" component={Gallery} />

     
      
      <Stack.Screen name="CalendarBy" component={CalendarBy} />
      <Stack.Screen name="EditPassword" component={EditPassword} />
      <Stack.Screen name="CropPhoto" component={CropPhoto} />
      <Stack.Screen name="ChangeEmail" component={ChangeEmail} />
      <Stack.Screen name="AceptCirugia" component={AceptCirugia} />

    </Stack.Navigator>
  );
}

function verCirugias() {
  return (

    <CirugiaContext.Provider>
      <StackCirugias.Navigator
        initialRouteName="Menu"
        screenOptions={{
          headerShown: true,
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: Color.blue,
          },
          headerTitle: props => <LogoTitle pro={props} {...props} />,
          headerBackImage: props => <BackImageRow {...props} />,
          headerRight: props => <Hamburgues {...props} />,
          headerTitleAlign: "center"


        }}
      >
        <StackCirugias.Screen options={{ title: 'Procedimiento' }} name="Procedimiento" component={Procedimiento} options={{ title: 'Procedimiento' }} />
        <StackCirugias.Screen options={{ title: 'Agendar Cirugía' }} name="AgendarCirugia" component={AgendarCirugia} />
        <StackCirugias.Screen options={{ title: 'Fecha y Hora' }} name="FechaYHora" component={FechaYHora} />
        <StackCirugias.Screen options={{ title: 'Cuerpo' }} name="Cuerpo" component={Cuerpo} />
        <StackCirugias.Screen options={{ title: 'Hospital' }} name="Hospital" component={Hospital} />
        <StackCirugias.Screen options={{ title: 'Asistente' }} name="Asistente" component={Asistente} />
        <StackCirugias.Screen options={{ title: 'Agendar Producto' }} name="AgendarProducto" component={AgendarProducto} />
        <StackCirugias.Screen options={{ title: 'Parte del Cuerpo' }} name="ElegirBody" component={ElegirBody} />
        <StackCirugias.Screen options={{ title: 'Proveedor' }} name="Proveedor" component={Proveedor} />
        <StackCirugias.Screen options={{ title: 'Productos' }} name="Productos" component={Productos} />
        <StackCirugias.Screen options={{ title: 'Agregar Producto' }} name="AddProductos" component={AddProductos} />
        <StackCirugias.Screen options={{ title: 'Ver Cirugía' }} name="VerCirugia" component={VerCirugia} />
        <StackCirugias.Screen options={{ title: 'Ver Cirugía' }} name="VerCelendar" component={VerCelendar} />
        <StackCirugias.Screen options={{ title: 'Estado Cirugía' }} name="EstadoCirugia" component={EstadoCirugia} />
        <StackCirugias.Screen name="AgregarAsistente" component={AgregarAsistente} />
        <StackCirugias.Screen name="AgregarAsistenteDeStat" component={AgregarAsistenteDeStat} />
        <StackCirugias.Screen name="AgregarDeContacto" component={AgregarDeContacto} />
        <StackCirugias.Screen name="Invitation" component={Invitation} />
        <StackCirugias.Screen name="VerInvitacion" component={VerInvitacion} />
        <StackCirugias.Screen options={{ title: 'Menú' }} name="Menu" component={Menu} options={{ title: 'Menu', headerhown: false }} />
        <StackCirugias.Screen name="Calendar" component={Calendar} />
      </StackCirugias.Navigator>
    </CirugiaContext.Provider>
  )
}


export function DrawerFunction() {
  return (
    <ContextUser.Provider>
      <Drawer.Navigator initialRouteName="Inicio"
        drawerContent={props => CustomDrawerContent(props)}
        drawerPosition="right"
      >
        <Drawer.Screen name="Inicio" component={NavStack} />


      </Drawer.Navigator>
    </ContextUser.Provider>
  )
}