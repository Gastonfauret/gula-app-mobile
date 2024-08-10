import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import ModalSliderLugares from '../../Home/SliderLugares/ModalSliderLugares';
import useGetAllShops from '../../../hooks/useGetAllShops';
import { ipAddress } from "../../../ipconfig/ipconfig";

export default function SliderLugares() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedShopId, setSelectedShopId] = useState(null);

    const { shops, loading, error } = useGetAllShops();

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error on Slider: {error}</Text>;
    }

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



                {shops.length > 0 ? (
                    shops.map((shop, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.menuItemCenter}
                            onPress={() => handleOpenModal(shop.name, shop.shopId)}
                        >
                            <View style={styles.subContainer}>
                                <Image style={styles.fondoLocal} source={{ uri: `http://${ipAddress}:3070/assets/uploads/shop/profile/${shop.picture}` }} />
                                <Text style={styles.textoLocales}>{shop.name}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>Slider: No data available</Text>
                )}

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
        backgroundColor: 'rgba(0,0,0,0.4)',
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
