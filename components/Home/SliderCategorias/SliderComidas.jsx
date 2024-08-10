import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text, Image, ActivityIndicator } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ModalSliderComidas from './ModalSliderComidas';
import useGetAllCategories from '../../../hooks/useGetAllCategories';
import { ipAddress } from '../../../ipconfig/ipconfig';

export default function SliderComidas({ categoryId }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

    const { categories, loading, error } = useGetAllCategories();   

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return <Text>Error on Slider: {error}</Text>;
    }

    const handleOpenModal = (message, categoryId) => {
        setModalMessage(message);
        setSelectedCategoryId(categoryId);
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {categories.length > 0 ? (
                    categories.map((category, index) => (
                        <TouchableOpacity 
                            key={index} 
                            style={styles.menuItemCenter} 
                            onPress={() => handleOpenModal(category.description, category.categoryId)}
                        >
                            <Image style={styles.IconStyle} source={{ uri: `http://${ipAddress}:3070/assets/uploads/shop/category/${category.icon}` }} />
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>Slider: No data available</Text>
                )}
                {modalVisible && (
                    <ModalSliderComidas 
                        message={modalMessage} 
                        categoryId={selectedCategoryId} 
                        visible={modalVisible} 
                        onClose={handleCloseModal} 
                    />
                )}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    menuItemCenter: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#17202A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: 5
    },

    IconStyle: {
        height: '65%',
        width: '65%'
    }
});
