import React from 'react'
import { View, StyleSheet } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'

export default function SalesByPlaces() {
    return (
        <View style={styles.container}>
            <FlatList > 
            <View style={styles.subContainer}></View>
            <View style={styles.subContainer}></View>
            </FlatList >
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '15%',
        backgroundColor: 'red'
    }
})

