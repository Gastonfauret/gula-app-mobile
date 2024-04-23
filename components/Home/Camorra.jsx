import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Camorra() {
    return (
        <View style={styles.camorraContainer}>
            <View style={styles.subContainer}>                
                <Text style={styles.subTitleDate}>20 de Abril</Text>
                <Text style={styles.subTitleDate}>22 hs.</Text>
            </View>

            <View style={styles.subContainer}>
            <Image source={require('../../assets/Camorra.png')} style={styles.logoCamorra} />
            </View>

            <View style={styles.subContainer}>                
                <Text style={styles.subTitle}>Complejo</Text>
                <Text style={styles.subTitle}>"Onas Rugby"</Text> 
                <Text style={styles.subTitle}>Av. Salenave 198</Text>                 
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    camorraContainer: {
        width: '100%',
        height: '8%',
        backgroundColor: '#8E44AD',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        marginTop: '2%'
    },

    logoCamorra: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },

    subContainer: {
        width: '30%',
        alignContent: 'center',
        justifyContent: 'center',       
        alignItems: 'center'       
    },

    subTitle:{
        fontSize: 11,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#D5DBDB'
    },

    subTitleDate: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#D5DBDB'
    }
})

