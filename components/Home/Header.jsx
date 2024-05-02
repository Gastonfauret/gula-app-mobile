import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function Header() {
    return (
        <View style={styles.subcontainer}>
            <Image source={require('../../assets/Logo Gula Rojo.png')} style={styles.logorojo} />
        </View>
    )
}

const styles = StyleSheet.create({
    subcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '96%',
        height: '9%',
        marginTop: '10%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D5DBDB', 
        marginHorizontal: '2%'      
    },

    logorojo: {
        width: 100,
        height: 57,
    },
})