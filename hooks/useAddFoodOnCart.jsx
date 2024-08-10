import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ipAddress } from "../ipconfig/ipconfig";

function useAddFoodOnCart() {
    const [addFoodOnCartLoading, setAddFoodOnCartLoading] = useState(false);
    const [addFoodOnCartError, setAddFoodOnCartError] = useState(null);

    async function addFoodOnCart(food, amount) {
        console.log("addFoodOnCart called with:", { food, amount });
        try {
            setAddFoodOnCartLoading(true);
            const token = await AsyncStorage.getItem('accessToken');
            const response = await fetch(`http://${ipAddress}:3070/food-on-cart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ food, amount }),
            });

            const data = await response.json();
            
            if (data.error) {
                throw new Error(data.message);
            }
        } catch (err) {
            //console.error("Hook: Error adding food to cart:", err);
            setAddFoodOnCartError(err);
        } finally {
            setAddFoodOnCartLoading(false);
        }
    }

    return { addFoodOnCart, addFoodOnCartLoading, addFoodOnCartError };
}

export default useAddFoodOnCart;
