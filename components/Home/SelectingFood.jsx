import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native';
import FloatingMenu from './FloatingMenu';
import Header from './Header';
import { useState } from 'react';

export default function SelectingFood() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        // Aquí puedes realizar cualquier validación o procesamiento adicional antes de pasar la consulta de búsqueda
        onSearch(searchQuery);
    };

    return (
        <>
            <View style={styles.container}>
                <Header />
                <View>
                    <TextInput
                        placeholder="Ingrese su búsqueda..."
                        value={searchQuery}
                        onChangeText={text => setSearchQuery(text)}
                        style={{width: 395, borderRadius: 3, height: 60, borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 15, marginTop: '3%' }}
                    />                    
                </View>
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


