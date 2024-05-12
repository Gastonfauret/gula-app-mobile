import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Registro() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [birth, setBirth] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {

        navigation.navigate('Entrada')

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
            <View style={styles.container}
            >
                <View style={styles.subContainer}>
                    <Image source={require('../../assets/GulaBlanco.png')} style={styles.logoGula} />
                </View>

                <View style={styles.inputsContainer}>
                    <TextInput
                        style={styles.textInputs}
                        placeholder="Nombre Completo"
                        value={name}
                        onChangeText={setName}
                    />

                    <TextInput
                        style={styles.textInputs}
                        placeholder="Email"
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

                    <TextInput
                        style={styles.textInputs}
                        placeholder="Confirmar contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TextInput
                        style={styles.textInputs}
                        placeholder="Localidad"
                        value={city}
                        onChangeText={setCity}
                    />

                    <TextInput
                        style={styles.textInputs}
                        placeholder="dd/mm/aaaa"
                        value={birth}
                        textContentType='date'                       
                        onChangeText={setBirth}
                    />

                    <TouchableOpacity style={styles.btnLogin} >
                        <Text style={styles.btnText} onPress={handleLogin}>Registrate</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.backBtnContainer}>
                    <TouchableOpacity>
                        <Text style={styles.volverText} onPress={() => navigation.navigate('SliderEntrada')}>Volver</Text>
                    </TouchableOpacity>
                </View>
            </View>       
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF2D00',
        paddingVertical: '15%',        
    },

    subContainer: {
        alignItems: 'center',
        width: '100%',
        height: '30%',
        justifyContent: 'center'     
    },

    logoGula: {
        resizeMode: 'center',
        width: '60%',
        height: '60%'       
    },

    inputsContainer: {
        alignItems: 'center',
        width: '100%',
        height: '70%',
        justifyContent: 'flex-start',
        gap: 20        
    },

    textInputs: {
        width: 320,
        height: 48,
        textAlign: 'center',
        borderRadius: 1,
        backgroundColor: 'white'
    },

    btnLogin: {
        backgroundColor: '#BDC3C7',
        borderRadius: 5
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
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '7%',       
    }
})



