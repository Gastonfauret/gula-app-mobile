import React from 'react'
import { Text, StyleSheet, View, ActivityIndicator, Image } from 'react-native';
import FloatingMenu from '../Home/MenuFlotante';
import Header from '../Home/Header';
import useGetFoodOnCart from '../../hooks/useGetFoodOnCart';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PaginaPedidos() {
    const { foodOnCart, getFoodOnCartLoading, getFoodOnCartError } = useGetFoodOnCart();

    return (
        <>
            <View style={styles.container}>
                <Header />
                {getFoodOnCartLoading && <ActivityIndicator size="large" color="#0000ff" />}
                {getFoodOnCartError && <Text>Error: {getFoodOnCartError}</Text>}

                {!getFoodOnCartLoading && !getFoodOnCartError && foodOnCart.length > 0 ? (
                    foodOnCart.map((food, index) => (
                        <View style={styles.cardContainer}>
                            <View key={index} style={styles.foodDataContainer}>
                                <View style={styles.imageContainer}>
                                    <Image source={{ uri: food.food.image }} style={styles.foodImg} />
                                </View>
                                <View style={styles.textContainer}>
                                    <Text style={styles.foodText}>{food.food.description}</Text>
                                    <Text style={styles.priceText}>$ {food.food.price}</Text>
                                    <Text style={styles.foodText}>Porcion: {food.amount}</Text>
                                </View>

                            </View>
                            <View>
                                <Text style={styles.totalText}>Total: ${food.food.price} </Text>
                            </View>
                            <TouchableOpacity style={styles.btnConfirm}>
                                <Text style={styles.textConfirm}>Confirmar Pedido </Text>
                            </TouchableOpacity>
                        </View>



                    ))
                ) : (
                    !getFoodOnCartLoading && <Text>No hay elementos en el carrito.</Text>
                )}
                <FloatingMenu />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
    },

    cardContainer: {
        width: '100%',
        alignItems: 'center'
    },

    foodDataContainer: {
        height: 150,
        flexDirection: 'row',
        alignItems: 'center',
        width: '95%',
        paddingHorizontal: '5%',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        marginTop: '3%'
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
    },

    btnConfirm: {
        width: 400,
        height: 50,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    textConfirm: {
        color: 'white',
        fontWeight: '600'
    },

    totalText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'green',
        marginVertical: '5%'
    }
})