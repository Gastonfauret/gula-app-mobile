import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Contador from '../Contador'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function FoodBannerByCategory({ foodData }) {

    function anadeACarrito() {
        console.log('Order añadida!')
    }    

    return (
        <View>
            {foodData ? (
                <View style={styles.container}>

                    <View style={styles.foodDataContainer}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: foodData.image }} style={styles.foodImg} />
                        </View>

                        <View style={styles.textContainer}>
                            <Text style={styles.foodText}>{foodData.description}</Text>
                            <Text style={styles.shopText}>{foodData.shop.name}</Text>
                            <Text style={styles.priceText}>$ {foodData.price}</Text>
                        </View>
                    </View>

                    <View style={styles.btnContainer}>
                        <Contador />
                        <View>
                            <TouchableOpacity onPress={anadeACarrito}>
                                <Text>Agregar a Carrito</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            ) : (
                <Text>No data available</Text>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 350,
        height: 150,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',        
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        marginVertical: '5%'      
    },

    foodDataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: '5%'
    },

    imageContainer: {
        width: '40%',
        height: '80%'
    },

    foodImg: {
        resizeMode: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: 10
    },

    textContainer: {
        width: '64%',
        height: '90%',
        alignItems: 'flex-end',
        justifyContent: 'space-around',
        //backgroundColor: 'pink'        
    },

    foodText: {
        fontSize: 12,
        flexWrap: 'wrap',
        width: '90%',
        textAlign: 'right',
        marginRight: 10,
        fontWeight: '500'       
    },

    priceText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'green',
        marginRight: 10
    },

    shopText: {
        fontSize: 10,
        fontWeight: '700',
        marginRight: 10
    },

    btnContainer: {        
        width: '100%',
        height: '22%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: '5%',
        marginBottom: '2%'
    }
})

