import React from 'react'
import { View, StyleSheet, Image, Text } from 'react-native'

export default function BannerCamorra() {
    return (
        <View style={styles.camorraContainer}>
            <Text style={styles.textBanner}>Publicite Aqui</Text>                       
        </View>
    )
}

const styles = StyleSheet.create({
    camorraContainer: {
        width: '100%',
        height: 80,        
        flexDirection: 'row',        
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cacfd2',
        marginVertical: 8
        },
        
        textBanner: {
            fontSize: 20,
            fontWeight: "500",
        }
})

