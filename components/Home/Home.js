import React, { useState } from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'

import SalesSlider from './SalesSlider';
import FoodSlider from './FoodSlider';
import FloatingMenu from './FloatingMenu';
import Header from './Header';
import SalePlaces from './SalePlaces';
import Camorra from './Camorra';
import FoodPlaces from './FoodPlaces';
import WeeklyMenus from './WeeklyMenus';

export default function Home() {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Header />
                <SalesSlider />
                <FoodSlider />
                <SalePlaces />
                <Camorra />
                <FoodPlaces />
                <WeeklyMenus />
            </ScrollView>
            <FloatingMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start'
    },

    scrollViewContent: {
        flexGrow: 1, // Permite que el ScrollView se expanda dinámicamente
        paddingBottom: 150, // Ajusta el espacio inferior para el menú flotante
    }
})
