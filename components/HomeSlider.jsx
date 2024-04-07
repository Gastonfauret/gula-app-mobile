import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default function HomeSlider() {
  return (
    <View style={styles.container}>
        <Text>Slider de Ofertas</Text>
    </View>    
  )
}

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E6B0AA',
        borderRadius: 5,
        marginTop: '2%'
    }
})