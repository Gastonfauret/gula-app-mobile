import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Register from '../components/PaginaEntrada/Register.jsx';
import Login from '../components/PaginaEntrada/Login.jsx';
import SliderEntrada from '../components/PaginaEntrada/SliderEntrada.jsx';
import CargaLogo from '../components/PaginaEntrada/CargaLogo.jsx';

import PaginaHome from '../components/Home/PaginaHome.jsx';
import PaginaPerfil from '../components/PaginaPerfil/PaginaPerfil.jsx';
import PaginaBusqueda from '../components/PaginaBuqueda/PaginaBusqueda.jsx';
import PaginaPedidos from '../components/PaginaPedidos/PaginaPedidos.jsx';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function StacksNavegacion() {

    function StackPantallaCarga() {
        return (
            <Stack.Navigator initialRouteName="CargaLogo">
                <Stack.Screen name="CargaLogo" options={{ headerShown: false }} component={CargaLogo} />
                <Stack.Screen name="SliderEntrada" options={{ headerShown: false }} component={SliderEntrada} />
                <Stack.Screen name="Register" options={{ headerShown: false }} component={Register} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            </Stack.Navigator>
        )
    }

    function StackPantallaHome() {
        return (
            <Stack.Navigator initialRouteName="PaginaHome">
                <Stack.Screen name="PaginaHome" options={{ headerShown: false }} component={PaginaHome} />
                <Stack.Screen name="PaginaBusqueda" options={{ headerShown: false }} component={PaginaBusqueda} />
                <Stack.Screen name="PaginaPedidos" options={{ headerShown: false }} component={PaginaPedidos} />
                <Stack.Screen name="PaginaPerfil" options={{ headerShown: false }} component={PaginaPerfil} />
            </Stack.Navigator>
        )
    }

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='PaginaEntrada' options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }} component={StackPantallaCarga} />
                <Tab.Screen name='PaginaHome' options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }} component={StackPantallaHome} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}




