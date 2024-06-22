import { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useGetFoodByFilter() {

  const [token, setToken] = useState(null);  
  const [foodsByQuery, setFoodsByQuery] = useState([]);
  const [foodByQueryLoading, setFoodByQueryLoading] = useState(false);
  const [foodByQueryError, setFoodByQueryError] = useState(null);
  const [filterInput, setFilterInput] = useState("");

  useEffect(() => {
    const getToken = async () => {
      try {
        const storedToken = await AsyncStorage.getItem("accessToken");
        setToken(storedToken);
      } catch (error) {
        setFoodByQueryError("Error getting token from storage");
      }
    };
    getToken();
  }, []);

  const getFoodsByQuery = useCallback(async (food) => {
    if (!token) return;
    try {
      setFoodByQueryLoading(true);
      const response = await fetch(
        `http://192.168.58.110:3070/food/filter?food=${food}`,
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
  setFoodsByQuery(data);
} catch (err) {
  setFoodByQueryError("Error trying to get foods by query");
} finally {
  setFoodByQueryLoading(false);
}
}, [token]);

  const handleChangeFoodByFilter = useCallback((food) => {
    //const { value } = e.target;
    if (typeof food !== 'string' || food.trim() === "") {
      return;
    }
    //setFilterInput(value);
    getFoodsByQuery(food);
  }, [getFoodsByQuery]);

  const isEmptyField = filterInput.length === 0;

  return {
    foodsByQuery,
    foodByQueryLoading,
    foodByQueryError,
    getFoodsByQuery,
    handleChangeFoodByFilter,
    filterInput,
    isEmptyField,
  };}



