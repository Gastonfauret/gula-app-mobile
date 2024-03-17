import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

export default function Slider() {

    return (
        <Swiper >
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/fries.jpg')}
                    style={styles.image}
                />

                <View style={styles.overlay}>
                    <Text style={styles.text}>Tenes hambre?</Text>
                </View>

            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/soda.jpg')}
                    style={styles.image}
                />
                <View style={styles.overlay}>
                    <Text style={styles.text}>Tenes sed?</Text>
                </View>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/burger.jpg')}
                    style={styles.image}
                />

                <View style={styles.overlay}>                    
                    <Text style={styles.text}>Tenes</Text>
                    <Image
                    source={require('../assets/GulaBlanco.png')}
                    style={styles.imageLogo}
                />
                </View>                

                <View style={styles.overlayBtn}>
                    <TouchableOpacity style={styles.btnContainers}>
                        <Text style={styles.btnText}>Ingresa</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnContainers}>
                        <Text style={styles.btnText}>Registrate Gratis</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({    
    imageContainer: {
        flex: 1
    },

    image: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%',        
    },

    overlay: {
        ...StyleSheet.absoluteFillObject, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.3)'       
    },

    imageLogo: {
        width: 265,
        height: 150,
        marginTop: 20,        
    },

    overlayBtn: {
        ...StyleSheet.absoluteFillObject, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        flexDirection: 'row',
        gap: 40,
        marginTop: 700       
    },

    text: {        
        color: 'white',
        fontSize: 40, 
        fontWeight: 'bold',
        textAlign: 'center',        
    },
    
    bottons: {
        flexDirection: "row",
        justifyContent: "space-around",
        
    },

    btnContainers: {
        width: 150,
        height: 50,
        backgroundColor: '#E5E7E9',
        alignItems: 'center',
        borderRadius: 5,
        justifyContent: 'center'
    },
});



