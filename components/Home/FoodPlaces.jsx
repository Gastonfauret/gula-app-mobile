import React from 'react'
import { View, StyleSheet, Text, ScrollView } from 'react-native'

export default function FoodPlaces() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <Text>Rotiseria Pablo</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text>Lo de Chairo</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text>Aka Pizzas</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text>Cerveceria Jooks</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text>La Paperia</Text>
                </View>
                <View style={styles.subContainer}>
                    <Text>Sabores al Paso</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {        
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 150,        
        marginVertical: '2%'
    },

    subContainer: {
        alignItems: 'center',     
        justifyContent: 'center',         
        width: 160,
        height: 145,
        marginHorizontal: 5,
        backgroundColor: '#d3bcf6',
        borderRadius: 5
    }
})