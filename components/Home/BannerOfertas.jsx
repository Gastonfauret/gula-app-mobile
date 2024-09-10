import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default function BannerOfertas() {
    return (
        <View style={styles.salePlacesContainer}>
            <View style={styles.placesContainer} >
                <Text style={styles.textBanner}>Publicite Aqui</Text>
            </View>

            <View style={styles.placesContainer} >
                <Text style={styles.textBanner}>Publicite Aqui</Text>
            </View>
            <View style={styles.placesContainer} >
                <Text style={styles.textBanner}>Publicite Aqui</Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    salePlacesContainer: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#E5E7E9'
    },

    bannerPlace: {
        resizeMode: 'contain',
        width: '100%',
        height: '86%',
        borderRadius: 10
    },

    placesContainer: {
        width: '31.5%',
        height: '100%',
        marginHorizontal: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#cacfd2',
    },    

    textBanner: {
        fontSize: 16,
        fontWeight: "500",
    }
})