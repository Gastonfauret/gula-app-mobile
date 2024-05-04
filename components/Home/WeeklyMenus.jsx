import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'


export default function WeeklyMenus() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Menús Semanales</Text>

            <View style={styles.placesContainer}>
                <View style={styles.places}>
                    <Text style={styles.textoLocales}>Martes</Text>
                    <Image source={require('../../assets/Food/Merluza con Pure.jpg')} style={styles.foodPhotos} />
                </View>
                <View style={styles.places}>
                    <Text style={styles.textoLocales}>Miercoles</Text>
                    <Image source={require('../../assets/Food/Mila con Fritas.jpg')} style={styles.foodPhotos} />
                </View>
                <View style={styles.places}>
                    <Text style={styles.textoLocales}>Jueves</Text>
                    <Image source={require('../../assets/Food/Napo con Pure.jpg')} style={styles.foodPhotos} />
                </View>
                <View style={styles.places}>
                    <Text style={styles.textoLocales}>Viernes</Text>
                    <Image source={require('../../assets/Food/Pollo al Verdeo con Papas Esp.jpg')} style={styles.foodPhotos} />
                </View>
                <View style={styles.places}>
                    <Text style={styles.textoLocales}>Sabado</Text>
                    <Image source={require('../../assets/Food/Pizza.jpg')} style={styles.foodPhotos} />
                </View>
                <View style={styles.places}>
                    <Text style={styles.textoLocales}>Domingo</Text>
                    <Image source={require('../../assets/Food/Ravioles.jpg')} style={styles.foodPhotos} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        height: '35%',
        backgroundColor: 'red'              
    },

    title: {
        textAlign: 'center',
        marginTop: '3%',
        marginBottom: '2%',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    placesContainer: {
        alignContent: 'center',
        width: '96%',
        height: '80%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'        
    },

    places: {
        width: '30%',
        height: '45%',
        backgroundColor: 'white',
        borderRadius: 5,
        margin: '1%'
    },

    foodPhotos: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5
    }
})
