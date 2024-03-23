import React, { useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Login from './components/Login';
import SignUp from './components/SignUp';
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
    <View style={styles.container}>
      {componenteCargado ? (
        <NavigationContainer>          
          <Stack.Navigator initialRouteName="Slider">
            <Stack.Screen name="Slider" component={Slider} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        </NavigationContainer>
      ) : (
        <View style={styles.container}>
          <Image source={require('./assets/Gula Loading.gif')} style={styles.logoBlanco} />
        </View>
      )}
    </View>
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