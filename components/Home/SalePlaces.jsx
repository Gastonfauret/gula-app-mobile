import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function SalePlaces() {
    return (
        <View style={styles.salePlacesContainer}>
            <View style={styles.jooks} >
                <Text>2x1 en Ipa</Text>
                <Text>Viernes de Abril</Text>
                <Text>Cerveceria Jooks</Text>
            </View>

            <View style={styles.chairo} >
                <Text>Papas c/Cheddar</Text>
                <Text>Todos los Sabados</Text>
                <Text>"Lo de Chairo"</Text>
            </View>
            <View style={styles.pablo} >
                <Text>Combo</Text>
                <Text>Pizza y 2 Cervezas</Text>
                <Text>Rotiseria "Pablo"</Text>
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
        backgroundColor: '#4afde7',
        marginHorizontal: '1%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',        
    },

    chairo: {
        width: '31%',
        height: '90%',
        backgroundColor: '#a2edce',
        marginHorizontal: '1%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', 
    },

    pablo: {
        width: '31%',
        height: '90%',
        backgroundColor: '#c7f6d4',
        marginHorizontal: '1%',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center', 
    }
})