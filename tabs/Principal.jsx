import { StyleSheet } from 'react-native';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from '../components/PaginaEntrada/Registro.jsx';
import Ingreso from '../components/PaginaEntrada/Ingreso.jsx';
import SliderEntrada from '../components/PaginaEntrada/SliderEntrada.jsx';
import PaginaHome from '../components/Home/PaginaHome.jsx';
import PaginaPerfil from '../components/PaginaPerfil/PaginaPerfil.jsx';
import PaginaBusqueda from '../components/PaginaBuqueda/PaginaBusqueda.jsx';
import PaginaPedidos from '../components/PaginaPedidos/PaginaPedidos.jsx';
import CargaLogo from '../components/PaginaEntrada/CargaLogo.jsx';

const Stack = createStackNavigator();

export default function Principal() {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="CargaLogo">
                <Stack.Screen name="CargaLogo" options={{ headerShown: false }} component={CargaLogo} />
                <Stack.Screen name="SliderEntrada" options={{ headerShown: false }} component={SliderEntrada} />
                <Stack.Screen name="Registro" options={{ headerShown: false }} component={Registro} />
                <Stack.Screen name="Ingreso" options={{ headerShown: false }} component={Ingreso} />
                <Stack.Screen name="PaginaHome" options={{ headerShown: false }} component={PaginaHome} />
                <Stack.Screen name="PaginaBusqueda" options={{ headerShown: false }} component={PaginaBusqueda} />
                <Stack.Screen name="PaginaPedidos" options={{ headerShown: false }} component={PaginaPedidos} />
                <Stack.Screen name="PaginaPerfil" options={{ headerShown: false }} component={PaginaPerfil} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});


