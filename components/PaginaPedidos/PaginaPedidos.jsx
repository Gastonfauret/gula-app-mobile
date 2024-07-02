import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';
import FloatingMenu from '../Home/MenuFlotante';
import Header from '../Home/Header';
import useGetFoodOnCart from '../../hooks/useGetFoodOnCart';
import useDeleteFoodOnCartById from '../../hooks/useDeleteFoodOnCartById';
import useDeleteAllFoodOnCart from '../../hooks/useDeleteAllCartOnFood';
import SeguimientoPedido from './SeguimientoPedido';

export default function PaginaPedidos() {
    const { foodOnCart, getFoodOnCartLoading, getFoodOnCartError, refetch } = useGetFoodOnCart();
    const { deleteFoodOnCartById, deleteFoodOnCartLoading, deleteFoodOnCartError } = useDeleteFoodOnCartById();
    const { deleteAllFoodOnCart, deleteAllFoodOnCartLoading, deleteAllFoodOnCartError } = useDeleteAllFoodOnCart();
    const [total, setTotal] = useState(0)
    const [pedidoConfirmado, setPedidoConfirmado] = useState(false);

    const handleDelete = async (foodOnCartId) => {
        try {
            await deleteFoodOnCartById(foodOnCartId);
            console.log("Success", "Food item deleted successfully");
            refetch();
        } catch (err) {
            console.log("Error", "Failed to delete food item");
        }
    };

    const handleConfirmarPedido = async () => {
        try {
            // Llamar al hook para eliminar todos los elementos del carrito
            await deleteAllFoodOnCart();
            console.log("Success", "All food items deleted successfully");
            setPedidoConfirmado(true); // Activar visualización de SeguimientoPedido después de eliminar
        } catch (err) {
            console.log("Error", "Failed to delete all food items on cart");
        }
    };

    // Callback para manejar la finalización del proceso en SeguimientoPedido
    const handleSeguimientoCompletion = () => {
        refetch(); // Refetch para limpiar el componente
        setPedidoConfirmado(false); // Ocultar SeguimientoPedido
    };

    // Calcula el total acumulado al cargar o al cambiar foodOnCart
    useEffect(() => {
        let newTotal = 0;
        foodOnCart.forEach(food => {
            newTotal += food.food.price * food.amount;
        });
        setTotal(newTotal);
    }, [foodOnCart]);

    return (
        <>
            <View style={styles.container}>
                <Header />
                {getFoodOnCartLoading && <ActivityIndicator size="large" color="#0000ff" />}
                {getFoodOnCartError && <Text>Error: {getFoodOnCartError.toString()}</Text>}
                {deleteFoodOnCartLoading && <ActivityIndicator size="small" color="#0000ff" />}
                {deleteFoodOnCartError && <Text>Error: {deleteFoodOnCartError.message || deleteFoodOnCartError.toString()}</Text>}
                {deleteAllFoodOnCartLoading && <ActivityIndicator size="small" color="#0000ff" />}
                {deleteAllFoodOnCartError && <Text>Error: {deleteAllFoodOnCartError.message || deleteAllFoodOnCartError.toString()}</Text>}

                {!getFoodOnCartLoading && !getFoodOnCartError && foodOnCart.length > 0 ? (
                    foodOnCart.map((food, index) => (
                        <View style={styles.cardContainer}>
                            <View>
                                <View key={index} style={styles.foodDataContainer}>
                                    <View style={styles.imageContainer}>
                                        <Image source={{ uri: food.food.image }} style={styles.foodImg} />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.foodText}>{food.food.description}</Text>
                                        <Text style={styles.priceText}>$ {food.food.price}</Text>
                                        <Text style={styles.foodText}>Porcion: {food.amount}</Text>
                                        <TouchableOpacity>
                                            <Text style={styles.deleteText} onPress={() => handleDelete(food.foodOnCartId)}>Eliminar</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>                                
                            </View>
                            <View>
                                <Text style={styles.totalText}>Total: ${total} </Text>
                            </View>
                            <TouchableOpacity style={styles.btnConfirm} onPress={handleConfirmarPedido}>
                                    <Text style={styles.textConfirm}>Confirmar Pedido </Text>
                                </TouchableOpacity>
                                {pedidoConfirmado && <SeguimientoPedido />}
                        </View>                        
                    ))
                ) : (
                    !getFoodOnCartLoading && <Text style={styles.noDataText}>No hay elementos en el carrito.</Text>
                )}
                 {/* Mostrar SeguimientoPedido si el pedido ha sido confirmado */}
                {pedidoConfirmado && <SeguimientoPedido onCompletion={handleSeguimientoCompletion} />}
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
    },

    deleteText: {
        fontSize: 12,
        marginRight: 12,
        color: 'red'
    },

    noDataText: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 50,
        color: 'red'
    }
})