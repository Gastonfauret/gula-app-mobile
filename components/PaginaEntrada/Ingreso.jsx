import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Ingreso() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        // if (email != 'calo@gula.com' || password != 'calo1234') {
        //     alert('Email y/o contraseña incorrecta')
        //     return;
        // } else (
        navigation.navigate('Home')
        //)
        // Aquí puedes implementar la lógica para el inicio de sesión, como enviar los datos a un servidor

        // Por ejemplo:
        // auth.signInWithEmailAndPassword(email, password)
        //   .then((userCredential) => {
        //     // Signed in
        //     const user = userCredential.user;
        //     console.log('User:', user);
        //   })
        //   .catch((error) => {
        //     const errorCode = error.code;
        //     const errorMessage = error.message;
        //     console.error('Error:', errorMessage);
        //   });
    };

    return (


        <View style={styles.container}>

            <View style={styles.subContainer}>
                <Image source={require('../../assets/GulaBlanco.png')} style={styles.logoGula} />
            </View>

            <View style={styles.inputsContainer}>

                <TextInput
                    style={styles.textInputs}
                    placeholder="Correo electrónico"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.textInputs}
                    placeholder="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.btnLogin}>
                    <Text style={styles.btnText} onPress={handleLogin}>Inicia Sesion</Text>
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


