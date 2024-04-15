import React, { useState, useEffect, lazy, Suspense } from 'react';
import { View, Image, StyleSheet, ActivityIndicator } from 'react-native';
//import MainSlider from './components/MainSlider.js';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home/Home';
import Loading from './components/Loading';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainSlider from './components/MainSlider';
import SelectingFood from './components/Home/SelectingFood';
import Orders from './components/Home/Orders';
import Profile from './components/Home/Profile';


const Stack = createStackNavigator();

const LazySlider = lazy(() => import('./components/MainSlider.js'));
const LazyLogin = lazy(() => import('./components/Login.js'));
const LazyRegister = lazy(() => import('./components/SignUp.js'));
const LazyHome = lazy(() => import('./components/Home/Home'));
const LazySelectingFood = lazy(() => import('./components/Home/SelectingFood'));
const LazyOrders = lazy(() => import('./components/Home/Orders'));
const LazyProfile = lazy(() => import('./components/Home/Profile'));

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

function LoginStack() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazyLogin />
    </Suspense>
  );
}

function RegisterStack() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <LazyRegister />
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
    <Suspense fallback={<Loading />}>
    <NavigationContainer style={styles.container} >      
        {componenteCargado ? (
          <Stack.Navigator initialRouteName="MainSlider">
            <Stack.Screen name="MainSlider" options={{ headerShown: false }} component={MainSliderStack} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginStack} />
            <Stack.Screen name="SignUp" options={{ headerShown: false }} component={RegisterStack} />
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
    </Suspense>
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