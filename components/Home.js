import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Logorojo from '../assets/Logo Gula Rojo.png'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import HomeSlider from './HomeSlider';
import HomeFoodSlider from './HomeFoodSlider';


export default function Home() {

    //const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.subcontainer}>
                <Image source={require('../assets/Logo Gula Rojo.png')} style={styles.logorojo} />
            </View>

            <HomeSlider/>
            <HomeFoodSlider/>
            <HomeSlider/>

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

            {/* <TouchableOpacity>
                <Text style={styles.volverText} onPress={() => navigation.navigate('Slider')}>Volver</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    subcontainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '96%',
        height: '10%',
        marginTop: '-94%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#D5DBDB'
    },

    logorojo: {
        width: 100,
        height: 57,
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

    menuItemLeft: {
        width: '25%',
        height: 50,
        //backgroundColor: '#EAEDED',
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

    volverText: {
        marginTop: '80%',
        marginBottom: '10%'
    }
})
