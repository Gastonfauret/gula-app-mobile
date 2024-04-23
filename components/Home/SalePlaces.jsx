import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function SalePlaces() {
    return (
        <View style={styles.salePlacesContainer}>
            <View style={styles.jooks} >
                <Text style={styles.jooksText2x1}>2x1 en Ipa</Text>
                <Image source={require('../../assets/jooks.png')} style={styles.jooksLogo} />                
                <Text style={styles.jooksText}>Viernes de Abril</Text>
            </View>

            <View style={styles.paperia} >
                <Text style={styles.paperiaText}>Papas c/Cheddar</Text>
                <Image source={require('../../assets/paperia.png')} style={styles.paperiaLogo} /> 
                <Text style={styles.paperiaText}>Todos los Sabados</Text>                
            </View>
            <View style={styles.akpizzas} >
                <Text style={styles.akpizzasText}>Pizzas p/ freezar</Text>
                <Image source={require('../../assets/akpizzas.png')} style={styles.akpizzasLogo} />
                <Text style={styles.akpizzasText}>Todos los Jueves</Text>                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    salePlacesContainer: {
        width: '100%',
        height: '15%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    jooks: {
        width: '31%',
        height: '90%',
        backgroundColor: 'black',
        marginHorizontal: '1%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },

    jooksLogo: {
        resizeMode: 'contain',
        width: '60%'
    },

    jooksText2x1: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    },

    jooksText: {
        color: 'white',
        fontSize: 8,
        fontWeight: 'bold'
    },

    paperia: {
        width: '31%',
        height: '90%',
        backgroundColor: '#F4D03F',
        marginHorizontal: '1%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3
    },

    paperiaLogo:{
        width: '50%',
        height: '50%',
        resizeMode: 'contain'
    },

    paperiaText: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },

    akpizzas: {
        width: '31%',
        height: '90%',
        backgroundColor: '#E5E7E9',
        marginHorizontal: '1%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    akpizzasLogo: {
        width: '65%',
        height: '65%',
        resizeMode: 'contain',
        marginVertical: '-10%'       
    },

    akpizzasText:{
        fontSize: 11,
        fontWeight: 'bold'
    }
})