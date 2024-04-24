import React from 'react'
import { View, StyleSheet, Text, ScrollView, Image } from 'react-native'

export default function FoodPlaces() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food Places/roti-pablo.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Rotiseria Pablo</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food Places/chairo.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Lo de Chairo</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food Places/ak-pizzas.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Aka Pizzas</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food Places/jooks.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Cerveceria Jooks</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food Places/paperia.jpeg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>La Paperia</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food Places/sabores-al-paso.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Sabores al Paso</Text>                    
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 150,
        marginVertical: '2%'
    },

    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 145,
        marginHorizontal: 5,
        backgroundColor: '#d3bcf6',
        borderRadius: 5
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },

    fondoLocal: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5
    },

    textoLocales: {               
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',       
        borderRadius: 5,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'      
    }
})