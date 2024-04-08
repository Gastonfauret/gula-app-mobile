import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
//import Logorojo from '../assets/Logo Gula Rojo.png'

import Slider from './SalesSlider';
import FoodSlider from './FoodSlider';
import FloatingMenu from './FloatingMenu';


export default function Home() {

    //const navigation = useNavigation();

    

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image source={require('../../assets/Logo Gula Rojo.png')} style={styles.logorojo} />
            </View>

            <Slider/>
            <FoodSlider/>            
            <FloatingMenu/>           

            {/* <TouchableOpacity>
                <Text style={styles.volverText} onPress={() => navigation.navigate('Slider')}>Volver</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',        
    },

    subcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '96%',
        height: '10%',
        marginTop: '10%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D5DBDB'
    },

    logorojo: {
        width: 100,
        height: 57,
    },   

    volverText: {
        marginTop: '80%',
        marginBottom: '10%'
    }
})
