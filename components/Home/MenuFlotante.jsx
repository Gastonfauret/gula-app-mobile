import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function MenuFlotante() {

    const navigation = useNavigation();

    const [pendingOrders, setPendingOrders] = useState(1);

    const [activeButton, setActiveButton] = useState('Home');

    // Función para simular la confirmación de un pedido
    const confirmOrder = () => {
        setPendingOrders(prevCount => prevCount - 1);
    };

    // useEffect(() => {
    //     navigation.navigate(activeButton);
    // }, [activeButton, navigation]);

    // const setActive = (buttonName) => {
    //     setActiveButton(buttonName);
    // };

    return (
        <View style={styles.menuContainer}>

            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Icon name="home" style={[styles.icon, activeButton === 'Home' && styles.activeIcon]} />
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => navigation.navigate('SelectingFood')}>
                    <Icon2 name="hamburger" style={[styles.icon, activeButton === 'SelectingFood' && styles.activeIcon]} />
                </TouchableOpacity>
            </View>


            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                    <Icon name="list-alt" style={[styles.icon, activeButton === 'Orders' && styles.activeIcon]} />
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon name="user" style={[styles.icon, activeButton === 'Profile' && styles.activeIcon]} />
                </TouchableOpacity>
                <View style={styles.nroOrder}>
                    <Text style={styles.nroOrderText}>{pendingOrders}</Text>
                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    menuContainer: {
        position: 'absolute',        
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 1,
        zIndex: 999,
        backgroundColor: 'white',        
    },

    menuItem: {
        width: '25%',
        height: 50,
        borderWidth: 1,
        borderColor: '#707B7C',
        alignItems: 'center',
        justifyContent: 'center',
    },

    icon: {
        color: "#BDC3C7",
        fontSize: 30
    },

    activeIcon: {
        color: "red",
    },

    nroOrder: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingRight: '30%'
    },

    nroOrderText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
    }
})
