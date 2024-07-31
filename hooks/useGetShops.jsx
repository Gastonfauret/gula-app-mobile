import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from '../ipconfig/ipconfig';

export default function useGetShops() {
  const [shops, setShops] = useState([]);
  const [shopsByQueryLoading, setShopsByQueryLoading] = useState(false);
  const [shopsByQueryError, setShopsByQueryError] = useState(null);

  useEffect(() => {
    async function getShopsByQuery() {
      try {
        setShopsByQueryLoading(true);
        const token = await AsyncStorage.getItem('accessToken');
        const response = await fetch(`http://${ipAddress}:3070/shop`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setShops(data);
      } catch (err) {
        setShopsByQueryError(`Error trying to get shops by query: ${err.message}`);
      } finally {
        setShopsByQueryLoading(false);
      }
    }

    getShopsByQuery();
  }, []);

  return { shops, shopsByQueryLoading, shopsByQueryError };
}


