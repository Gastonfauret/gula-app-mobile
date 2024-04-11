import React from 'react'
import {Text, StyleSheet, View } from 'react-native';
import FloatingMenu from './FloatingMenu';
import Header from './Header';

export default function Orders() {
    return (
        <>
        <View style={styles.container}>
        <Header />
            <Text>Este es la Pagina de Pedido de Ordenes.</Text>
            <FloatingMenu />
        </View>           
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
    },
})