import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from '../ipconfig/ipconfig';

export default async function useGetUserData() {    
    
    const token = await AsyncStorage.getItem('accessToken'); // Recupera el token
    console.log('Retrieved token User:', token);

    if (!token) {
        throw new Error('No token found');
    }
    
    // Aquí se asume que tienes un endpoint para obtener la información del usuario basado en el token
    const response = await fetch(`http://${ipAddress}:3070/user/active`, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    
    if (!response.ok) {
        throw new Error('Error fetching user data');
    }    
    const userData = await response.json();
    return userData;
}

