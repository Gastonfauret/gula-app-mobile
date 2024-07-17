import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function MenuFlotante() {

    const navigation = useNavigation();

    const [pendingOrders, setPendingOrders] = useState(1);

    //const [activeButton, setActiveButton] = useState('PaginaHome');    

    const handlePress = (buttonName) => {
        navigation.navigate(buttonName);
        //setActiveButton(buttonName);        
    };

    //Función para simular la confirmación de un pedido
    const confirmOrder = () => {
        setPendingOrders(prevCount => prevCount - 1);
    };   

    return (
        <View style={styles.menuContainer}>

            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => handlePress('PaginaHome')}>
                    <Icon name="home" style={[styles.icon === 'PaginaHome' ? styles.activeIcon : styles.icon]} />
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => handlePress('PaginaBusqueda')}>
                    <Icon2 name="hamburger" style={[styles.icon === 'PaginaBusqueda' ? styles.activeIcon : styles.icon]} />
                </TouchableOpacity>
            </View>


            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => handlePress('PaginaPedidos')}>
                    <Icon name="list-alt" style={[styles.icon === 'PaginaPedidos' ? styles.activeIcon : styles.icon]} />
                </TouchableOpacity>
                {/* <View style={styles.nroOrder}>
                    <Text style={styles.nroOrderText}>{pendingOrders}</Text>
                </View> */}
            </View>

            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => handlePress('PaginaPerfil')}>
                    <Icon name="user" style={[styles.icon === 'PaginaPerfil' ? styles.activeIcon : styles.icon]} />
                </TouchableOpacity>                
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
        paddingRight: '20%'
    },

    nroOrderText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15,
    }
})
