import React, { useEffect } from 'react'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import PaginaHome from '../components/Home/PaginaHome.jsx';
import PaginaPerfil from '../components/PaginaPerfil/PaginaPerfil.jsx';
import PaginaBusqueda from '../components/PaginaBuqueda/PaginaBusqueda.jsx';
import PaginaPedidos from '../components/PaginaPedidos/PaginaPedidos.jsx';

const Stack = createStackNavigator();

export default function Protected() {

    const navigation = useNavigation();


    useEffect(() => {
        checkToken();
    }, []);

    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem("accessToken");
            if (!token) {
                navigation.navigate("Login");
            }
        } catch (error) {
            console.error("Error retrieving token", error);
            // Handle error
        }
    };

    return (
        <Stack.Navigator initialRouteName="PaginaHome">
            <Stack.Screen name="PaginaHome" options={{ headerShown: false }} component={PaginaHome} />
            <Stack.Screen name="PaginaBusqueda" options={{ headerShown: false }} component={PaginaBusqueda} />
            <Stack.Screen name="PaginaPedidos" options={{ headerShown: false }} component={PaginaPedidos} />
            <Stack.Screen name="PaginaPerfil" options={{ headerShown: false }} component={PaginaPerfil} />
        </Stack.Navigator>
    )
}


