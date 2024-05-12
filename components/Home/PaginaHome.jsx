import React, { useState } from 'react'
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'

import SalesSlider from './BannerTarjetas';
import FoodSlider from './SliderComidas';
import FloatingMenu from './MenuFlotante';
import Header from './Header';
import SalePlaces from './BannerOfertas';
import Camorra from './BannerCamorra';
import FoodPlaces from './SliderLugares';
import WeeklyMenus from './MenusSemanales';

export default function PaginaHome() {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Header />
                <SalesSlider />
                <FoodSlider />
                <SalePlaces />
                <Camorra />
                <FoodPlaces />
                {/* <WeeklyMenus /> */}
            </ScrollView>
            <FloatingMenu />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        //backgroundColor: 'pink',
        },

    scrollViewContent: {
        flexGrow: 1, // Permite que el ScrollView se expanda dinámicamente
        //paddingBottom: 150, // Ajusta el espacio inferior para el menú flotante
    }
})
