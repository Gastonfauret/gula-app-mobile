import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ipAddress } from "../ipconfig/ipconfig";


function useGetFoodOnCart() {
    const [foodOnCart, setFoodOnCart] = useState([]);
    const [getFoodOnCartLoading, setGetFoodOnCartLoading] = useState(false);
    const [getFoodOnCartError, setGetFoodOnCartError] = useState(null);

    const getFoodOnCart = useCallback(async () => {
        setGetFoodOnCartLoading(true);
        setGetFoodOnCartError(null);
        try {
            const token = await AsyncStorage.getItem('accessToken');
            const response = await fetch(`http://${ipAddress}:3070/food-on-cart`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch food on cart');
            }

            const data = await response.json();
            setFoodOnCart(data);
        } catch (err) {
            setGetFoodOnCartError(err.message);
        } finally {
            setGetFoodOnCartLoading(false);
        }
    }, []);

    useEffect(() => {
        getFoodOnCart();
    }, [getFoodOnCart]);

    const refetch = () => {
        getFoodOnCart();
    };

    return { foodOnCart, getFoodOnCartLoading, getFoodOnCartError, refetch };
}

export default useGetFoodOnCart;
