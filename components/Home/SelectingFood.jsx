import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import FloatingMenu from './FloatingMenu';
import Header from './Header';

export default function SelectingFood() {
    return (
        <>
            <View style={styles.container}>
                <Header />
                <Text>Este es la Pagina de Pedido de Seleccion de comidas.</Text>
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


