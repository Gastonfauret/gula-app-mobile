import React, { useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'

import BannerTarjetas from './BannerTarjetas';
import SliderComidas from './SliderCategorias/SliderComidas';
import MenuFlotante from './MenuFlotante';
import Header from './Header';
import BannerOfertas from './BannerOfertas';
import BannerCamorra from './BannerCamorra';
import SliderLugares from './SliderLugares/SliderLugares';
import MenusSemanales from '../Home/SliderMenusSemanales/MenusSemanales';

export default function PaginaHome() {

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Header />
                <BannerTarjetas />
                <SliderComidas />
                <BannerOfertas />
                <BannerCamorra />
                <SliderLugares />
                <MenusSemanales />
            </ScrollView>
            <MenuFlotante />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'stretch'
    },

    scrollViewContent: {
        flexGrow: 1
    }
})
