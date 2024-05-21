import React, {useState, useEffect} from 'react'
import { View, StyleSheet, Image } from 'react-native'

import Principal from '../../tabs/Principal';
import SliderEntrada from './SliderEntrada';
import { NavigationContainer } from '@react-navigation/native';

export default function CargaLogo() {
    const [componenteCargado, setComponenteCargado] = useState(false);

    useEffect(() => {
        const cargarComponente = async () => {
            await new Promise(resolve => setTimeout(resolve, 3000));
            setComponenteCargado(true);
        };
        cargarComponente();
    }, []);

    return (
        <View style={styles.container} >
            {componenteCargado ? (
                <SliderEntrada />
            ) : (
                <View style={styles.container}>
                    <Image source={require('../../assets/Gula Loading.gif')} style={styles.logoBlanco} />
                </View>
            )
            }
        </View>);
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
