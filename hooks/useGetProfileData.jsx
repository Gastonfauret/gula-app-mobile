import AsyncStorage from '@react-native-async-storage/async-storage';

export default async function useProfileData() {    
    
    const token = await AsyncStorage.getItem('accessToken'); // Recupera el token
    console.log('Retrieved token Profile:', token);

    if (!token) {
        throw new Error('No token found');
    }
    
    // Aquí se asume que tienes un endpoint para obtener la información del usuario basado en el token
    const response = await fetch('http://192.168.58.110:3070/user/profile', {
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

