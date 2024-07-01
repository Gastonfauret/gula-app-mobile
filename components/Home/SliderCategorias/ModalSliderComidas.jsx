import React from 'react';
import { View, Modal, StyleSheet, Pressable, Text, ActivityIndicator } from 'react-native';
import FoodBannerByCategory from './FoodBannerByCategory';
import useGetFoodsByCategory from '../../../hooks/useGetFoodsByCategory';

export default function ModalSliderComidas({ visible, onClose, message, categoryId }) {
    const { foods, loading, error } = useGetFoodsByCategory(categoryId);    

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error: {error}</Text>;
    }

    return (
        <View style={styles.centeredView}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={visible}
                onRequestClose={onClose}>

                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>{message}</Text>

                        {foods.length > 0 ? (
                            foods.map((food, index) => (
                                <FoodBannerByCategory key={index} foodData={food} />
                            ))
                        ) : (
                            <Text>Modal: No data available</Text>
                        )}

                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={onClose}>
                            <Text style={styles.textStyle}>Volver</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    centeredView: {
        width: '100%',
        height: '100%',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)'
    },

    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    button: {
        borderRadius: 20,
        padding: 10
    },

    buttonClose: {
        backgroundColor: 'white',
    },

    textStyle: {
        color: 'black',
        textAlign: 'center',
    },

    modalText: {
        textAlign: 'center',
    },
});
