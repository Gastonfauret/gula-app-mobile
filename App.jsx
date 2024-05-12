import React, { useState, useEffect, lazy, Suspense } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from './components/PaginaEntrada/Registro.jsx';
import Ingreso from './components/PaginaEntrada/Ingreso.jsx';

const Stack = createStackNavigator();

const LazySlider = lazy(() => import('./components/PaginaEntrada/SliderEntrada.jsx'));
const LazyLogin = lazy(() => import('./components/PaginaEntrada/Ingreso.jsx'));
const LazyRegister = lazy(() => import('./components/PaginaEntrada/Registro.jsx'));
const LazyHome = lazy(() => import('./components/Home/PaginaHome.jsx'));
const LazySelectingFood = lazy(() => import('./components/PaginaBuqueda/PaginaBusqueda.jsx'));
const LazyOrders = lazy(() => import('./components/PaginaPedidos/PaginaPedidos.jsx'));
const LazyProfile = lazy(() => import('./components/PaginaPerfil/PaginaPerfil.jsx'));

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}

function MainSliderStack() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazySlider />
    </Suspense>
  );
}

function HomeStack() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazyHome />
    </Suspense>
  );
}

function SelectingFoodStack() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazySelectingFood />
    </Suspense>
  );
}

function OrdersStack() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazyOrders />
    </Suspense>
  );
}

function ProfileStack() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazyProfile />
    </Suspense>
  );
}


export default function App() {
  const [componenteCargado, setComponenteCargado] = useState(false);

  useEffect(() => {
    const cargarComponente = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setComponenteCargado(true);
    };
    cargarComponente();
  }, []);


  return (    
    <NavigationContainer style={styles.container} >      
        {componenteCargado ? (
          <Stack.Navigator initialRouteName="SliderEntrada">
            <Stack.Screen name="SliderEntrada" options={{ headerShown: false }} component={MainSliderStack} />
            <Stack.Screen name="Registro" options={{ headerShown: false }} component={Registro} />
            <Stack.Screen name="Ingreso" options={{ headerShown: false }} component={Ingreso} />
            <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeStack} />
            <Stack.Screen name="SelectingFood" options={{ headerShown: false }} component={SelectingFoodStack} />
            <Stack.Screen name="Orders" options={{ headerShown: false }} component={OrdersStack} />
            <Stack.Screen name="Profile" options={{ headerShown: false }} component={ProfileStack} />
          </Stack.Navigator>
        ) : (
          <View style={styles.container}>            
            <Image source={require('./assets/Gula Loading.gif')} style={styles.logoBlanco} />
          </View>
        )
        }      
    </NavigationContainer>    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoBlanco: {
    width: 265,
    height: 151
  }
});