import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'


export default function Contador() {
    function contadorSuma() {
        if (contador => 0) {
            setContador(contador + 1)            
        }
    }

    function contadorResta() {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const [contador, setContador] = useState(0)

    return (
        <View style={styles.container}>

            <View style={styles.btnSubContainer}>
                <TouchableOpacity onPress={contadorResta} style={styles.btnCont}>
                    <Text style={styles.textCountBtn}>-</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.subContainer}>
                <Text>{contador}</Text>
            </View>

            <View style={styles.btnSubContainer}>
                <TouchableOpacity onPress={contadorSuma} style={styles.btnCont}>
                    <Text style={styles.textCountBtn}>+</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '20%',
        height: '85%',
        //backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center'        
    },

    btnCont: {       
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    subContainer: {
        width: '30%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    btnSubContainer: {
        width: '30%',
        height: '100%',        
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        borderBlockColor: 'gray',
        borderWidth: 0.7,
        backgroundColor: '#D7DBDD'
    },

    textCountBtn: {
        fontSize: 16,
        fontWeight: '400'
    }
})