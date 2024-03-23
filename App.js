import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const [componenteCargado, setComponenteCargado] = useState(false);

  useEffect(() => {
    cargarComponente();
  }, []);

  const cargarComponente = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    setComponenteCargado(true);
  };

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer style={styles.container}>      
      <Stack.Navigator initialRouteName="Slider">
        <Stack.Screen name="Slider" options={{ headerShown: false }} component={Slider} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={Login} />
        <Stack.Screen name="SignUp" options={{ headerShown: false }} component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}



// <NavigationContainer>
//   <View style={styles.container}>
//     {componenteCargado ? (
//       <Stack.Navigator initialRouteName="Slider">
//         <Stack.Screen name="Slider" component={Slider} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//       </Stack.Navigator>
//     ) : (
//       <View style={styles.container}>
//         <Image source={require('./assets/Gula Loading.gif')} style={styles.logoBlanco} />
//       </View>
//     )}
//   </View>
// </NavigationContainer>


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  // logoBlanco: {
  //   width: 265,
  //   height: 151
  // }
});


