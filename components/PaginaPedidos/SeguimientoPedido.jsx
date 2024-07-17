import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useDeleteAllFoodOnCart from '../../hooks/useDeleteAllCartOnFood';

const messages = [
    '20:05: El lugar de comidas está preparando tu pedido.',
    '20:15: El delivery llegó al lugar de comidas.',
    '20:30: Tu pedido está listo.',
    '20:35: El delivery tiene tu pedido.',
    '20:40: Tu pedido está en camino.',
    '20:50: Tu pedido fue entregado.',
    'Muchas gracias por usar Gula.'
];

export default function SeguimientoPedido({ onCompletion }) {
    const [index, setIndex] = useState(0);
    const [currentMessage, setCurrentMessage] = useState(messages[0]);
    const { deleteAllFoodOnCart, deleteAllFoodOnCartLoading, deleteAllFoodOnCartError } = useDeleteAllFoodOnCart();

    useEffect(() => {
        if (index < messages.length - 1) {
            const interval = setInterval(() => {
                setIndex((prevIndex) => prevIndex + 1);
            }, 3000);

            return () => clearInterval(interval);
        } else {
            setTimeout(async () => {
                try {
                    await deleteAllFoodOnCart();
                    console.log("Success", "All food items deleted successfully");
                    onCompletion();
                } catch (err) {
                    console.log("Error", "Failed to delete all food items on cart");
                }
            }, 3000); // Delay to allow the last message to be shown for 3 seconds
        }
    }, [index]);

    useEffect(() => {
        setCurrentMessage(messages[index]);
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
        minHeight: 100,        
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'red',
        paddingVertical: 20,
        paddingHorizontal: 20       
    },
    textSeguimiento: {
        fontSize: 16,
        color: 'red',
        textAlign: 'center'
    }
})
