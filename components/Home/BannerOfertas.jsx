import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default function BannerOfertas() {
    return (
        <View style={styles.salePlacesContainer}>
            <View style={styles.jooks} >
                <Image source={require('../../assets/Banner Jooks.png')} style={styles.bannerPlace} />
            </View>

            <View style={styles.paperia} >
                <Image source={require('../../assets/Banner Paperia.png')} style={styles.bannerPlace} />
            </View>
            <View style={styles.akpizzas} >
                <Image source={require('../../assets/Banner Aka Pizzas.png')} style={styles.bannerPlace} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    salePlacesContainer: {
        width: '100%',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',        
        backgroundColor: '#E5E7E9'        
    },

    bannerPlace: {
        resizeMode: 'contain',
        width: '100%',
        height: '86%', 
        borderRadius: 10      
    },

    jooks: {
        width: '31.5%',
        height: '100%',
        marginHorizontal: 3,        
        alignItems: 'center',
        justifyContent: 'center'             
    },  

    paperia: {
        width: '31.5%',
        height: '100%',        
        marginHorizontal: 3,        
        alignItems: 'center',
        justifyContent: 'center',        
    },  

    akpizzas: {
        width: '31.5%',
        height: '100%',
        marginHorizontal: 3,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'black'
    },
})