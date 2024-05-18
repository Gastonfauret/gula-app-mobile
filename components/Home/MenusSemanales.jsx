import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'


export default function MenusSemanales() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Menús Semanales</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Merluza con Pure.jpg')} style={styles.fondoLocal} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textoDia}>Martes</Text>
                        <Text style={styles.textoMenu}>Filete de Merluza con Pure</Text>
                        <Text style={styles.textoLocal}>Rotiseria Pablo</Text>
                    </View>
                </View>

                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Mila con Fritas.jpg')} style={styles.fondoLocal} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textoDia}>Miercoles</Text>
                        <Text style={styles.textoMenu}>Milanesas con Papas</Text>
                        <Text style={styles.textoLocal}>Lo de Chairo</Text>
                    </View>
                </View>                    

                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Pollo al Verdeo con Papas Esp.jpg')} style={styles.fondoLocal} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textoDia}>Jueves</Text>
                        <Text style={styles.textoMenu}>Pollo al Verdeo con Papas Españolas</Text>
                        <Text style={styles.textoLocal}>Jooks</Text>
                    </View>
                </View>    

                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Napo con Pure.jpg')} style={styles.fondoLocal} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textoDia}>Viernes</Text>
                        <Text style={styles.textoMenu}>Milanesa Napolitana con Pure</Text>
                        <Text style={styles.textoLocal}>La Paperia</Text>
                    </View>
                </View>   

                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Pizza.jpg')} style={styles.fondoLocal} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textoDia}>Sabado</Text>
                        <Text style={styles.textoMenu}>Pizza Napolitana</Text>
                        <Text style={styles.textoLocal}>Aka Pizzas</Text>
                    </View>
                </View>   

                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Ravioles.jpg')} style={styles.fondoLocal} />
                    <View style={styles.textContainer}>
                        <Text style={styles.textoDia}>Domingo</Text>
                        <Text style={styles.textoMenu}>Ravioles de Verdura con Salsa a eleccion</Text>
                        <Text style={styles.textoLocal}>Sabores al Paso</Text>
                    </View>
                </View>              

            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 260,
        marginVertical: '2%',
        backgroundColor: '#A6ACAF'
    },

    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 170,
        height: 150,
        marginHorizontal: 5,
        backgroundColor: '#d3bcf6',
        borderRadius: 5
    },

    fondoLocal: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5
    },

    textoDia: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold',        
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    textoMenu: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',        
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    textoLocal: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',        
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    textContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius: 5,
        gap: 8
    },

    textoLocales: {        
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',        
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center'
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: '2.5%'
    }
})