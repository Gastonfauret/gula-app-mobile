import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import ModalSliderLugares from '../../Home/SliderLugares/ModalSliderLugares';

export default function SliderLugares() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedShopId, setSelectedShopId] = useState(null);

    const handleOpenModal = (message, shopId) => {
        setModalMessage(message);
        setSelectedShopId(shopId);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                <TouchableOpacity onPress={() => handleOpenModal('Rotiseria Pablo', 1)}>
                    <View style={styles.subContainer}>
                    <Image source={require('../../../assets/Food Places/roti-pablo.jpg')} style={styles.fondoLocal}/>
                        <Text style={styles.textoLocales}>Rotiseria Pablo</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('Lo de Chairo', 2)}>
                    <View style={styles.subContainer}>
                    <Image source={require('../../../assets/Food Places/chairo.jpg')} style={styles.fondoLocal}/>
                        <Text style={styles.textoLocales}>Lo de Chairo</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('Aka Pizzas', 3)}>
                    <View style={styles.subContainer}>
                    <Image source={require('../../../assets/Food Places/ak-pizzas.jpg')} style={styles.fondoLocal}/>
                        <Text style={styles.textoLocales}>Aka Pizzas</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('Jooks', 4)}>
                    <View style={styles.subContainer}>
                    <Image source={require('../../../assets/Food Places/jooks.jpg')} style={styles.fondoLocal}/>
                        <Text style={styles.textoLocales}>Jooks</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('La Paperia', 5)}>
                    <View style={styles.subContainer}>
                    <Image source={require('../../../assets/Food Places/paperia.jpeg')} style={styles.fondoLocal}/>
                        <Text style={styles.textoLocales}>La Paperia</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => handleOpenModal('Sabores Al Paso', 6)}>
                    <View style={styles.subContainer}>
                    <Image source={require('../../../assets/Food Places/sabores-al-paso.jpg')} style={styles.fondoLocal}/>
                        <Text style={styles.textoLocales}>Sabores Al Paso</Text>
                    </View>
                </TouchableOpacity>

                {modalVisible && (
                    <ModalSliderLugares message={modalMessage} shopId={selectedShopId} visible={modalVisible} onClose={handleCloseModal} />)}

            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: 150,
        marginVertical: 5,
    },
    subContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 160,
        height: 145,
        marginHorizontal: 5,
        backgroundColor: '#d3bcf6',
        borderRadius: 5,
    },
    fondoLocal: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 5,
    },
    textoLocales: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        position: 'absolute',
        borderRadius: 5,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
});
