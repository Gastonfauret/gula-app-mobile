import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useGetFoodsByFilter() {
    const [foodsByQuery, setFoodsByQuery] = useState([]);
    const [foodByQueryLoading, setFoodByQueryLoading] = useState(false);
    const [foodByQueryError, setFoodByQueryError] = useState(false);
    const [filterInput, setFilterInput] = useState("");

    async function getFoodsByQuery(food) {
        try {
            setFoodByQueryLoading(true);
            const token = await AsyncStorage.getItem('accessToken');
            const response = await fetch(`http://192.168.58.110:3070/food/filter?food=${food}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Bearer ${token}`,
                },
            }
            );

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setFoodsByQuery(data);
        } catch (err) {
            setFoodByQueryError("Error trying to get foods by query", err);
        } finally {
            setFoodsByQueryLoading(false);
        }
    }

    const handleChangeFoodByFilter = (text) => {
        setFilterInput(text);
        if (text.length > 3) {
            getFoodsByQuery(text);
        } else {
            setFoodsByQuery([]);
        }
    };

    function cleanInput() {
        setFilterInput("");
    }

    const isEmptyField = filterInput.length === 0;

    return {
        foodsByQuery,
        foodByQueryLoading,
        foodByQueryError,
        getFoodsByQuery,
        handleChangeFoodByFilter,
        filterInput,
        isEmptyField,
        cleanInput
    };
}






