import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView, Platform, Keyboard } from 'react-native';

export default function SignUp() {
    const [keyboardVisible, setKeyboardVisible] = useState(false);
    const handleKeyboardDidShow = () => setKeyboardVisible(true);
    const handleKeyboardDidHide = () => setKeyboardVisible(false);

    const [name, setName] = useState('');
    const [lastName, setlastName] = useState('');
    const [id, setId] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    React.useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', handleKeyboardDidShow);
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', handleKeyboardDidHide);

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : null}
            style={{ flex: 1 }}
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View className=' flex-1 justify-center items-center px-10 py-20 bg-red-600 '
                >
                    <View className=' flex-1 items-center justify-center bg-red-600 w-0 m--10'>
                        <Image source={require('../assets/GulaBlanco.png')} className=' w-56 h-32 mb-5' />
                    </View>

                    <TextInput
                        className=' w-80 h-12 mb-6 border-0 rounded-md px-3 bg-white'
                        placeholder="Nombre"
                        value={name}
                        onChangeText={setName}                        
                    />
                    <TextInput
                        className=' w-80 h-12 mb-6 border-0 rounded-md px-3 bg-white'
                        placeholder="Apellido"
                        value={lastName}
                        onChangeText={setlastName}                        
                    />
                    <TextInput
                        className=' w-80 h-12 mb-6 border-0 rounded-md px-3 bg-white'
                        placeholder="Documento"
                        value={id}
                        onChangeText={setId}                        
                    />
                    <TextInput
                        className=' w-80 h-12 mb-6 border-0 rounded-md px-3 bg-white'
                        placeholder="Direccion"
                        value={address}
                        onChangeText={setAddress}                        
                    />

                    <TextInput
                        className=' w-80 h-12 mb-6 border-0 rounded-md px-3 bg-white'
                        placeholder="Correo electrónico"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        className=' w-80 h-12 mb-6 border-0 rounded-md px-3 bg-white'
                        placeholder="Contraseña"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />

                    <TouchableOpacity className=' bg-gray-300 rounded-md ' >
                        <Text className=' w-80 h-12 text-center align-middle font-bold text-gray-600 py-3' onPress={handleLogin}>Registrate</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </KeyboardAvoidingView >
    );
};




