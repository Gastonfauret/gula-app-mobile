import { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetFoodsByPlaces = (shopId) => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchFoods = useCallback(async () => {     
        if (!shopId) return;       

        setLoading(true);
        setError(null);
        try {
            const token = await AsyncStorage.getItem('accessToken');
            if (!token) {
                throw new Error('Token not found');
            }         

            const response = await fetch(`http://192.168.12.101:3070/food/by-shop/${shopId}`, {
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
        } catch (err) {            
            setError(err.message);
        } finally {
            setLoading(false);            
        }
    }, [shopId]);

    useEffect(() => {
        if(shopId) {
            fetchFoods();
        }        
    }, [shopId, fetchFoods]);

    return { foods, loading, error };
};

export default useGetFoodsByPlaces;
