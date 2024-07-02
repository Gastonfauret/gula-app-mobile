import React, { useState, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function useDeleteAllFoodOnCart() {
    const [deleteAllFoodOnCartLoading, setDeleteAllFoodOnCartLoading] = useState(false);
    const [deleteAllFoodOnCartError, setDeleteAllFoodOnCartError] = useState(null);

    const deleteAllFoodOnCart = useCallback(async () => {
        setDeleteAllFoodOnCartLoading(true);
        setDeleteAllFoodOnCartError(null);
        try {
            const token = await AsyncStorage.getItem('accessToken');
            const response = await fetch(`http://192.168.12.101:3070/food-on-cart`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
            });

            if (response.status === 204) {
                // No hay contenido para parsear
                return { success: true }; // Puedes devolver un indicador de éxito si lo necesitas
            }

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Failed to delete all food on cart');
            }
        } catch (err) {
            setDeleteAllFoodOnCartError(err.message);
        } finally {
            setDeleteAllFoodOnCartLoading(false);
        }
    }, []);

    return { deleteAllFoodOnCart, deleteAllFoodOnCartLoading, deleteAllFoodOnCartError };
}

export default useDeleteAllFoodOnCart;
