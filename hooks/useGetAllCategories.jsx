import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ipAddress } from "../ipconfig/ipconfig";

export default function useGetAllCategories() {

    const [token, setToken] = useState(null);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            try {
                const storedToken = await AsyncStorage.getItem("accessToken");
                setToken(storedToken);
            } catch (error) {
                setError("Error getting token from storage");
            }
        };
        getToken();
    }, []);

    const getCategories = useCallback(async () => {
        if (!token) return;
        try {
            setLoading(true);
            const response = await fetch(
                `http://${ipAddress}:3070/category`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            setCategories(data);
        } catch (err) {
            setError("Error trying to get categories");
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        getCategories();
    }, [getCategories]);

    return {
        categories,
        loading,
        error,
        getCategories,
    };
}
