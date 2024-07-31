import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ipAddress } from "../ipconfig/ipconfig";

function useDeleteFoodOnCartById() {
    const [deleteFoodOnCartLoading, setDeleteFoodOnCartLoading] = useState(false);
    const [deleteFoodOnCartError, setDeleteFoodOnCartError] = useState(null);

    async function deleteFoodOnCartById(foodOnCartId) {
        try {
            setDeleteFoodOnCartLoading(true);
            const token = await AsyncStorage.getItem('accessToken');
            const response = await fetch(`http://${ipAddress}:3070/food-on-cart/${foodOnCartId}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const text = await response.text();
                const data = text ? JSON.parse(text) : {};
                console.log("Hook: Response data:", data);
                if (data.error) {
                    throw new Error(data.message);
                }
            } else {
                throw new Error('Failed to delete food item');
            }
        } catch (err) {
            setDeleteFoodOnCartError(err);
        } finally {
            setDeleteFoodOnCartLoading(false);
        }
    }

    return { deleteFoodOnCartById, deleteFoodOnCartLoading, deleteFoodOnCartError };
}

export default useDeleteFoodOnCartById;
