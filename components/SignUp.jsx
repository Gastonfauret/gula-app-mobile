import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function SignUp({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [city, setCity] = useState('');
    const [birth, setBirth] = useState('');

    const handleLogin = () => {

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
                    <Image source={require('../assets/GulaBlanco.png')} style={styles.logoGula} />
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
                        onChangeText={setBirth}
                    />

                    <TouchableOpacity style={styles.btnLogin} >
                        <Text style={styles.btnText} onPress={handleLogin}>Registrate</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.backBtnContainer}>
                    <TouchableOpacity>
                        <Text style={styles.volverText} onPress={() => navigation.navigate('Slider')}>Volver</Text>
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
        gap: 10
    },

    subContainer: {
        alignItems: 'center',
        width: '70%',
        height: '20%',
        justifyContent: 'center',
    },

    logoGula: {
        width: 224,
        height: 128
    },

    inputsContainer: {
        alignItems: 'center',
        width: '100%',
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
        height: '7%'
    }
})



