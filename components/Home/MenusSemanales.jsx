import React from 'react'
import { View, StyleSheet, Text, Image, ScrollView } from 'react-native'


export default function MenusSemanales() {
    return (
        <View style={styles.container}>

            <Text style={styles.title}>Menús Semanales</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Merluza con Pure.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Martes {'\n'} Filete de Merluza con Pure {'\n'} Rotiseria Pablo</Text>
                </View>

                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Mila con Fritas.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Miercoles {'\n'}Milanesas Napolitana con Papas {'\n'}Lo de Chairo</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Pizza.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Jueves{'\n'}Pizza Napolitana{'\n'}Aka Pizzas</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Pollo al Verdeo con Papas Esp.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Viernes{'\n'}Hamburguesa Completa con Papas {'\n'}Cerveceria Jooks</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Napo con Pure.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Sabado{'\n'}Papas con Cheddar{'\n'}La Paperia</Text>
                </View>
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/Food/Ravioles.jpg')} style={styles.fondoLocal} />
                    <Text style={styles.textoLocales}>Domingo{'\n'}Ravioles de Verdura{'\n'}Sabores al Paso</Text>                    
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
        height: '15%',
        marginVertical: '2%',
        backgroundColor: '#A6ACAF',        
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

    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.9)',
    },

    fondoLocal: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5
    },

    textoLocales: {               
        backgroundColor: 'rgba(0,0,0,0.4)',
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        position: 'absolute',       
        borderRadius: 5,
        width: '100%',
        height: '100%',
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