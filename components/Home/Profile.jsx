import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import FloatingMenu from './FloatingMenu';
import Header from './Header';

export default function Profile() {
    return (
        <>
            <View style={styles.container}>
                <Header />
                <Text>Este es la Pagina de Pedido de profile.</Text>
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