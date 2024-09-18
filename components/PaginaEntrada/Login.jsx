import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useLogin from '../../hooks/useLogin';

function Login() {
    const [isLoading, setIsLoading] = useState(false);
    const [loginLoading, setLoginLoading] = useState(false);

    const navigation = useNavigation();

    const {
        userCredentials,
        handleChangeLogin,
        handleSubmitLogin,
        isWrongEmail,
        isWrongPassword
    } = useLogin();


    const handleLogin = async () => {
        setLoginLoading(true);
        try {
            const token = await handleSubmitLogin();
            if (token) {
                console.log('Token saved successfully', token);
                navigation.navigate('Protected', { screen: 'PaginaHome' });
                handleChangeLogin('email', '');  // Limpiar email
                handleChangeLogin('password', '');  // Limpiar contraseña
            } else {
                console.log('Login failed');
                alert('Usuario no encontrado')
            }
        } catch (error) {
            console.log('Error trying to login user', error);
            //alert('Usuario no encontrado')
        } finally {
            setLoginLoading(false);
        }
    };


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

                {/* {isWrongEmail && (
                    <>
                        <Text>Usuario no encontrado</Text>
                    </>
                )} */}

                <TextInput
                    style={styles.textInputs}
                    placeholder="Contraseña"
                    value={userCredentials.password}
                    onChangeText={text => handleChangeLogin('password', text)}
                    secureTextEntry
                    required
                />
                {/* 
                {isWrongPassword && (
                    <>
                        <Text>Contraseña incorrecta</Text>
                    </>
                )} */}

                <TouchableOpacity style={styles.btnLogin} onPress={handleLogin}>
                    {loginLoading ? (
                        <ActivityIndicator size="small" color="#0000ff" />
                    ) : (
                        <Text style={styles.btnText}>Inicia Sesion</Text>
                    )}
                </TouchableOpacity>
                    
                    <Text style={styles.textAcount}>O ingrese con cuentas registradas:</Text>                

                    <View style={styles.acountContainer}>
                        <TouchableOpacity style={styles.btnSlider} onPress={() => {console.log('Boton Registro con Google Anda!')}}>
                            <Text >Ingresa con Google</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnSlider} onPress={() => {console.log('Boton Registro con Facebook Anda!')}}>
                            <Text >Ingresa con Facebook</Text>
                        </TouchableOpacity>
                    </View>

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
        //justifyContent: 'center',
        paddingHorizontal: 36,
        paddingVertical: '30%',
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
        height: 230,
        //backgroundColor: 'green'
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
        height: '20%',
        //backgroundColor: 'black'
    },

    textAcount: {
        width: 320,
        height: 48,
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        color: 'white',
        paddingVertical: 15,
        //backgroundColor: 'gray'
    },

    acountContainer: {          
        width: '100%',        
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,        
        //backgroundColor: 'pink'                
    },  

    btnSlider: {         
        justifyContent: 'center',
        alignItems: 'center',       
        backgroundColor: '#D5DBDB',
        width: '76%',
        height: '40%',
        borderRadius: 30,
        marginVertical: 10 
    },
})



