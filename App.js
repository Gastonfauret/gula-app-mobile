import React, { useState, useEffect, lazy, Suspense } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

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
        <Stack.Navigator initialRouteName="Slider">
          <Stack.Screen name="Slider" options={{ headerShown: false }} component={Slider} />
          <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
          <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
          <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
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