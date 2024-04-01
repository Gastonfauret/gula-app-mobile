import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';



export default function Home() {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <Text>
                Hola, Que tal? Yo soy el Home. Un gusto.
            </Text>

            <TouchableOpacity>
                <Text style={styles.volverText} onPress={() => navigation.navigate('Slider')}>Volver</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    volverText: {
        marginTop: '80%',
        marginBottom: '10%'
    }
})
