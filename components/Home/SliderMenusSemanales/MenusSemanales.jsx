import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import PaginaModal from './ModalMenusSemanales';


export default function MenusSemanales() {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedFood, setSelectedFood] = useState('');

    const handleOpenModal = (message, food) => {
        setModalMessage(message);
        setSelectedFood(food);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>

            <Text style={styles.title}>Menús Semanales</Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => handleOpenModal('Martes', 'Milanesa a la napolitana c/ papas')}>                    
                    <View style={styles.subContainer}>
                        <Image source={require('../../../assets/Food/napo con fritas.jpeg')} style={styles.fondoLocal} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textoDia}>Martes</Text>
                            <Text style={styles.textoMenu}>Milanesa a la napolitana c/ papas</Text>
                            <Text style={styles.textoLocal}>Cerveceria Jooks</Text>
                        </View>
                    </View>
                </TouchableOpacity>                

                <TouchableOpacity onPress={() => handleOpenModal('Miercoles', 'Hamburguesa doble cheddar')}>
                    <View style={styles.subContainer}>
                        <Image source={require('../../../assets/Food/cheddar.jpg')} style={styles.fondoLocal} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textoDia}>Miercoles</Text>
                            <Text style={styles.textoMenu}>Hamburguesa doble cheddar</Text>
                            <Text style={styles.textoLocal}>Cerveceria Jooks</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('Jueves', 'Empanadas de jyq x 12U')}>
                    <View style={styles.subContainer}>
                        <Image source={require('../../../assets/Food/Pollo al Verdeo con Papas Esp.jpg')} style={styles.fondoLocal} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textoDia}>Jueves</Text>
                            <Text style={styles.textoMenu}>Pollo al Verdeo con Papas Españolas</Text>
                            <Text style={styles.textoLocal}>Lo de Chairo</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('Viernes', 'Choripan a la pomarola')}>
                    <View style={styles.subContainer}>
                        <Image source={require('../../../assets/Food/Chori a la pomarola.jpg')} style={styles.fondoLocal} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textoDia}>Viernes</Text>
                            <Text style={styles.textoMenu}>Choripan a la pomarola</Text>
                            <Text style={styles.textoLocal}>La Paperia</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('Sabado', 'Pizza a la calabresa x 8 porciones')}>
                    <View style={styles.subContainer}>
                        <Image source={require('../../../assets/Food/pizza calabreza.webp')} style={styles.fondoLocal} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textoDia}>Sabado</Text>
                            <Text style={styles.textoMenu}>Pizza a la calabresa</Text>
                            <Text style={styles.textoLocal}>Palelo Buffet</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('Domingo', 'Pizza muzzarella x 8 porciones')}>
                    <View style={styles.subContainer}>
                        <Image source={require('../../../assets/Food/muzzarella.jpeg')} style={styles.fondoLocal} />
                        <View style={styles.textContainer}>
                            <Text style={styles.textoDia}>Domingo</Text>
                            <Text style={styles.textoMenu}>Pizza muzzarella</Text>
                            <Text style={styles.textoLocal}>Palelo Buffet</Text>
                        </View>
                    </View>
                </TouchableOpacity>

                {modalVisible && (
        <PaginaModal message={modalMessage} food={selectedFood} visible={modalVisible} onClose={handleCloseModal} />)}

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
    },    
})