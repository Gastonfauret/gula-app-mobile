import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet,  ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useLogin from '../../hooks/useLogin';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login() {
    const [isLoading, setIsLoading] = useState(true);
    const [loginLoading, setLoginLoading] = useState(false);
    const navigation = useNavigation();      


    const {
        userCredentials,
        handleChangeLogin,
        handleSubmitLogin,
        isWrongEmail,
        isWrongPassword        
    } = useLogin();

    useEffect(() => {
        const checkToken = async () => {
            try {
                const token = await AsyncStorage.getItem('accessToken');
                console.log('Retrieved token:', token);
                if (token !== null) {
                    // Navegar a la página Home si el token existe
                    navigation.navigate('PaginaHome');
                } else {
                    console.log('No token found');
                }
            } catch (error) {
                console.log('Error retrieving the token', error);
            } finally {
                setIsLoading(false);
            }
        };
        checkToken();
    }, [navigation]);

    const handleLogin = async () => {
        setLoginLoading(true);
        try {
            const token = await handleSubmitLogin();
            if (token) {                
                console.log('Token saved successfully');
                navigation.navigate('PaginaHome');
            } else {
                console.log('Login failed');
            }
        } catch (error) {
            console.log('Error trying to login user', error);
            alert('Usuario no encontrado')
        } finally {
            setLoginLoading(false);
        }
    };

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    return (
        <View style={styles.container}>

            <View style={styles.subContainer}>
                <Image source={require('../../assets/GulaBlanco.png')} style={styles.logoGula} />
            </View>

            <View style={styles.inputsContainer}>

                <TextInput
                    style={styles.textInputs}
                    type="text"
                    name="email"
                    placeholder="Correo electrónico"
                    value={userCredentials.email}
                    onChangeText={text => handleChangeLogin('email', text)}                    
                    keyboardType="email-address"
                    autoCapitalize="none"
                    required
                />

                {isWrongEmail && (
                    <>
                        <Text style={styles.login - error}>Usuario no encontrado</Text>
                    </>
                )}

                <TextInput
                    style={styles.textInputs}
                    placeholder="Contraseña"
                    value={userCredentials.password}
                    onChangeText={text => handleChangeLogin('password', text)}                    
                    secureTextEntry
                    required
                />

                {isWrongPassword && (
                    <>
                        <Text style={styles.login - error}>Contraseña incorrecta</Text>
                    </>
                )}

                <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                    {loginLoading ? (
                        <ActivityIndicator size="small" color="#0000ff" />
                    ) : (
                        <Text style={styles.btnText}>Inicia Sesion</Text>
                    )}
                </TouchableOpacity>

                <View style={styles.backBtnContainer}>
                    <TouchableOpacity>
                        <Text style={styles.volverText} onPress={() => navigation.navigate('SliderEntrada')}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 36,
        paddingVertical: 20,
        backgroundColor: 'red'
    },

    subContainer: {
        alignItems: 'center',
        width: '120%',
        height: 180,
        justifyContent: 'center',
        //backgroundColor: 'black'
    },

    logoGula: {
        resizeMode: 'center',
        width: '60%',
        height: 250
    },

    textInputs: {
        width: 320,
        height: 48,
        borderRadius: 2,
        paddingLeft: 12,
        paddingRight: 12,
        backgroundColor: 'white',
        marginVertical: '3%',
    },

    inputsContainer: {
        alignItems: 'center',
        width: '130%',
        height: 230
    },

    btnLogin: {
        backgroundColor: '#BDC3C7',
        borderRadius: 5,
        marginVertical: '3%'
    },

    btnText: {
        width: 320,
        height: 48,
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: '#717D7E',
        paddingVertical: 12
    },

    backBtnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '7%',
    }
})



