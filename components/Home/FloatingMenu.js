import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

export default function FloatingMenu() {

    const navigation = useNavigation();

    return (
        <View style={styles.menuContainer}>
            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Icon name="home" size={30} color="#E74C3C" />
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => navigation.navigate('SelectingFood')}>
                    <Icon2 name="hamburger" size={30} color="#E74C3C" />
                </TouchableOpacity>
            </View>


            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => navigation.navigate('Orders')}>
                    <Icon name="list-alt" size={30} color="#E74C3C" />
                </TouchableOpacity>
            </View>

            <View style={styles.menuItem} >
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                    <Icon name="user" size={30} color="#E74C3C" />
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
        backgroundColor: 'white'       
    },

    menuItem: {
        width: '25%',
        height: 50,
        borderWidth: 1,
        borderColor: '#707B7C',
        alignItems: 'center',
        justifyContent: 'center',        
    }    
})

