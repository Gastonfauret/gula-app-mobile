import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'

export default function WeeklyMenus() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

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
            </ScrollView>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        //width: '100%',
        height: 690,
        backgroundColor: 'red',
        marginBottom: '-165%'
    },

    title: {
        marginTop: '3%',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },

    placesContainer: {
        paddingTop: '1%',
        width: '100%',
        height: '92%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },

    places: {
        alignItems: 'center',
        width: '45%',
        height: '21%',
        borderRadius: 5,
        marginHorizontal: '1.5%',
        marginVertical: '4%'
    },

    foodPhotos: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5
    },

    textoLocales: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 4
    }
})
