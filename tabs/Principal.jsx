import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Register from '../components/PaginaEntrada/Register.jsx';
import Login from '../components/PaginaEntrada/Login.jsx';
import SliderEntrada from '../components/PaginaEntrada/SliderEntrada.jsx';
import CargaLogo from '../components/PaginaEntrada/CargaLogo.jsx';
import Protected from './Protected.jsx';

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

    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name='PaginaEntrada' options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }} component={StackPantallaCarga} />

                <Tab.Screen name='Protected' options={{
                    headerShown: false,
                    tabBarStyle: { display: 'none' }
                }} component={Protected} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}




