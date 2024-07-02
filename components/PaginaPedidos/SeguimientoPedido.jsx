import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useDeleteAllFoodOnCart from '../../hooks/useDeleteAllCartOnFood';

const messages = [
    'El lugar de comidas está preparando tu pedido.',
    'El delivery llegó al lugar de comidas.',
    'Tu pedido está listo.',
    'El delivery tiene tu pedido.',
    'Tu pedido está en camino.',
    'Tu pedido fue entregado. Muchas gracias por usar Gula.'
];

export default function SeguimientoPedido({ onCompletion }) {
    const [index, setIndex] = useState(0);
    const [currentMessage, setCurrentMessage] = useState(messages[index]);
    const { deleteAllFoodOnCart, deleteAllFoodOnCartLoading, deleteAllFoodOnCartError } = useDeleteAllFoodOnCart();

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length); // Avanza al siguiente mensaje circularmente
        }, 3000);

        // Limpiar el carrito y refetch cuando se muestran todos los mensajes
        setTimeout(async () => {
            try {
                await deleteAllFoodOnCart();
                console.log("Success", "All food items deleted successfully");
                onCompletion(); // Llama a la función de callback para indicar que se ha completado el proceso
            } catch (err) {
                console.log("Error", "Failed to delete all food items on cart");
            }
        }, messages.length * 3000); // 3000 ms por mensaje

        return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }, []);

    useEffect(() => {
        setCurrentMessage(messages[index]); // Actualiza el mensaje actual cada vez que cambia el índice
    }, [index]);

    return (
        <View style={styles.textContainer}>
            <Text style={styles.textSeguimiento}>{currentMessage}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textContainer: {
        width: '90%',
        height: 100,
        //backgroundColor: 'pink',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red'        
    },
    textSeguimiento: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center'
    }
})
