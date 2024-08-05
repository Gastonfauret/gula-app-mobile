import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from '../ipconfig/ipconfig';

const useGetFoodsByCategory = (categoryId) => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFoods = useCallback(async () => {
        setLoading(true);
        setError(null);
        try {
            const token = await AsyncStorage.getItem('accessToken');
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await fetch(`http://${ipAddress}:3070/food/by-category/${categoryId}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                });

            if (!response.ok) {
                throw new Error('Failed to fetch foods');
            }

            const data = await response.json();
            setFoods(data);
            console.log(`Hook:`, foods)
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [categoryId]);

    useEffect(() => {
        if (categoryId) {
            fetchFoods();
        }
    }, [categoryId, fetchFoods]);

    return { foods, loading, error };
};

export default useGetFoodsByCategory;
