import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function Camorra() {
    return (
        <View style={styles.camorraContainer}>             
            <Image source={require('../../assets/Banner Camorra.png')} style={styles.bannerCamorra} />           
        </View>
    )
}

const styles = StyleSheet.create({
    camorraContainer: {
        width: '100%',
        height: '6%',        
        flexDirection: 'row',
        alignContent: 'center',       
        marginTop: '2%'
    },

    bannerCamorra: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }    
})

