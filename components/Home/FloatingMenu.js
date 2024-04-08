import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';

export default function FloatingMenu() {
    return (
        <View style={styles.menuContainer}>
            <View style={styles.menuItemLeft} >
                <Icon name="home" size={30} color="#E74C3C" />
            </View>
            <View style={styles.menuItemCenter} >
                <Icon2 name="hamburger" size={30} color="#E74C3C" />
            </View>
            <View style={styles.menuItemCenter} >
                <Icon name="list-alt" size={30} color="#E74C3C" />
            </View>
            <View style={styles.menuItemRight} >
                <Icon name="user" size={30} color="#E74C3C" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',        
        marginTop: '1%',
        flexDirection: 'row',
        gap: 4
    },    

    menuContainer: {
        position: 'absolute',
        bottom: 40,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
        gap: 1,
    },

    menuItemCenter: {
        width: 60,
        height: 60,        
        borderWidth: 3,
        borderColor: '#707B7C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },

    menuItemLeft: {
        width: '25%',
        height: 50,        
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        borderWidth: 1,
        borderColor: '#707B7C',
        alignItems: 'center',
        justifyContent: 'center'
    },

    menuItemCenter: {
        width: '25%',
        height: 50,
        //backgroundColor: '#EAEDED',
        borderWidth: 1,
        borderColor: '#707B7C',
        alignItems: 'center',
        justifyContent: 'center'
    },

    menuItemRight: {
        width: '25%',
        height: 50,
        //backgroundColor: '#EAEDED',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        borderWidth: 1,
        borderColor: '#707B7C',
        alignItems: 'center',
        justifyContent: 'center'

    },

})

