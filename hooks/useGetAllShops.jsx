import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ipAddress } from "../ipconfig/ipconfig";

export default function useGetAllShops() {

    const [token, setToken] = useState(null);
    const [shops, setShops] = useState([]);
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

    const getShops = useCallback(async () => {
        if (!token) return;
        try {
            setLoading(true);
            const response = await fetch(
                `http://${ipAddress}:3070/shop`,
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
            setShops(data);
        } catch (err) {
            setError("Error trying to get categories");
        } finally {
            setLoading(false);
        }
    }, [token]);

    useEffect(() => {
        getShops();
    }, [getShops]);

    return {
        shops,
        loading,
        error,
        getShops,
    };
}
