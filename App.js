import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, StyleSheet } from 'react-native';
import Slider from './components/Slider';
import Login from './components/Login';
import SignUp from './components/SignUp';
import MainPage from './components/MainPage';
import React, { useState, useEffect } from 'react';

export default function App() {
  const [componenteCargado, setComponenteCargado] = useState(false);

  useEffect(() => {
    cargarComponente();
  }, []);

  const cargarComponente = async () => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    setComponenteCargado(true);
  };

  return (
    <View style={styles.container}>
      
      {componenteCargado ? ( 
        <Slider/>  
        
      ) : (
        <View style={styles.container}>
          <Image source={require('./assets/Gula Loading.gif')} style={styles.logoBlanco} />
        </View>
      )}
    </View>   
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
  },

  logoBlanco: {
    width: 265,
    height: 150
  }
});


