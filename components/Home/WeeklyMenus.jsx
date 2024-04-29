import React from 'react'
import { View, StyleSheet, Text } from 'react-native'


export default function WeeklyMenus() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menús Semanales</Text>

            <View style={styles.placesContainer}>
                <View style={styles.places}></View>
                <View style={styles.places}></View>
                <View style={styles.places}></View>
                <View style={styles.places}></View>
                <View style={styles.places}></View>
                <View style={styles.places}></View>
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
        justifyContent: 'space-around',              
    },

    places: {
        width: '30%',
        height: '45%',
        backgroundColor: 'white',
        borderRadius: 5,
        margin: '1%'
    }
})
