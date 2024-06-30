import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import ModalSliderComidas from './ModalSliderComidas';
import '../../../hooks/useGetFoodsByCategory'
//import useGetFoodsByCategory from '../../hooks/useGetFoodsByCategory';


export default function SliderComidas() {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [selectedCategoryId, setSelectedCategoryId] = useState(null);

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

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Milanesas', 1)}>
                    <Image source={require('../../../assets/Icon/milanesa.png')} style={styles.IconStyle}/>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Pizzas', 2)}>
                    <Icon2 name="pizza-slice" size={30} color="#17202A" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Pastas', 3)}>
                    <Icon3 name="pasta" size={35} color="#17202A" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Verduras', 4)}>
                    <Icon2 name="carrot" size={30} color="#17202A" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Hambuguesas', 5)}>
                    <Icon2 name="hamburger" size={30} color="#17202A" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Asado', 6)}>
                    <Icon3 name="food-steak" size={30} color="#17202A" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Empanadas', 7)}>
                <Image source={require('../../../assets/Icon/icono empanada.png')} style={styles.IconStyle}/>                   
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Pescado', 8)}>
                    <Icon2 name="fish" size={30} color="#17202A" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Pollo', 9)}>
                    <Icon3 name="food-drumstick" size={30} color="#17202A" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItemCenter} onPress={() => handleOpenModal('Papas Fritas', 10)}>
                    <Icon3 name="french-fries" size={34} color="#17202A" />
                </TouchableOpacity>

                {modalVisible && (
                    <ModalSliderComidas message={modalMessage} categoryId={selectedCategoryId} visible={modalVisible} onClose={handleCloseModal} />)}

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
})

