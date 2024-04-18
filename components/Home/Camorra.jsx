import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Camorra() {
    return (
        <View style={styles.camorraContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.title}>Camorra</Text>
            </View>

            <View style={styles.subContainer}>
                <Text style={styles.subTitle}>Proximo 20 de Abril</Text>
                <Text style={styles.subTitle}>A partir de las 22 hs</Text>
                <Text style={styles.subTitle}>Complejo "Onas Rugby"</Text>                
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    camorraContainer: {
        width: '100%',
        height: '8%',
        backgroundColor: '#f74fd0',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around',
        marginTop: '2%'
    },

    subContainer: {
        alignContent: 'center',
        justifyContent: 'center'        
    },

    title: {
        fontSize: 27,
        fontWeight: 'bold',
        color: 'white'
    },

    subTitle:{
        fontSize: 10,
        color: 'white',
        textAlign: 'center'
    }
})

