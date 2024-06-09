import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function BannerCamorra() {
    return (
        <View style={styles.camorraContainer}>             
            <Image source={require('../../assets/Banner Camorra.png')} style={styles.bannerCamorra} />           
        </View>
    )
}

const styles = StyleSheet.create({
    camorraContainer: {
        width: '100%',
        height: 80,        
        flexDirection: 'row',
        alignContent: 'center'      
    },

    bannerCamorra: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }    
})

