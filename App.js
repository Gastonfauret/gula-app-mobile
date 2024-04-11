import React, { useState, useEffect, lazy, Suspense, Text } from 'react';
import { View, Image, StyleSheet } from 'react-native';
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

//const lazySlider = lazy(() => import('./components/MainSlider.js'));

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
    //<Suspense fallback={<Loading />}>
    <NavigationContainer style={styles.container} >      
        {componenteCargado ? (
          <Stack.Navigator initialRouteName="MainSlider">
            <Stack.Screen name="MainSlider" options={{ headerShown: false }} component={MainSlider} />
            <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
            <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
            <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
            <Stack.Screen name="SelectingFood" options={{ headerShown: false }} component={SelectingFood} />
            <Stack.Screen name="Orders" options={{ headerShown: false }} component={Orders} />
            <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
          </Stack.Navigator>
        ) : (
          <View style={styles.container}>
            <Image source={require('./assets/Gula Loading.gif')} style={styles.logoBlanco} />
          </View>
        )
        }
      
    </NavigationContainer>
    //</Suspense>
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