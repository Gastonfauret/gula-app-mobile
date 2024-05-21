import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useRegister from '../../hooks/useRegister';
import useShowHidePassword from '../../hooks/useShowHidePassword';
//import { IoMdEye } from "react-icons/io";
//import { IoMdEyeOff } from "react-icons/io";

export default function Registro() {

    const { togglePasswordVisibility, showPassword } = useShowHidePassword();
    const {
        handleSubmitRegister,
        handleChangeRegister,
        userData,
        isRegisterLoading,
        isRegisterError,
        passwordError,
        userNameError,
        emailError,
        locationError,
        birthDateError,
        passwordConfirmError,
        userInputsError,
    } = useRegister();

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [city, setCity] = useState('');
    // const [birth, setBirth] = useState('');

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

            {/* <form onSubmit={handleSubmitRegister}> */}
                <View style={styles.inputsContainer}>
                    <TextInput
                        type="text"
                        style={styles.textInputs}
                        placeholder="Nombre Completo"
                        name="name"
                        value={userData.name}
                        onChangeText={handleChangeRegister}
                    />
                    {userNameError && (
                        <Text className="register-input-error"> {userNameError}</Text>
                    )}

                    <TextInput
                        style={styles.textInputs}
                        placeholder="Email"
                        value={userData.email}
                        name="email"
                        type="text"
                        onChange={handleChangeRegister}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    {emailError && (
                        <Text className="register-input-error">{emailError}</Text>
                    )}

                    <TextInput
                        style={styles.textInputs}
                        placeholder="Contraseña"
                        type={showPassword ? "text" : "password"}
                        name="password"
                        value={userData.password}
                        onChange={handleChangeRegister}
                        secureTextEntry
                    />
                    <View
                        onClick={togglePasswordVisibility}
                        className="toggle-show-password"
                    >
                        {/*{showPassword ? <IoMdEyeOff /> : <IoMdEye />}*/}
                    </View>
                    {passwordError && (
                        <Text className="register-input-error">{passwordError}</Text>
                    )}

                    <TextInput
                        style={styles.textInputs}
                        placeholder="Confirmar contraseña"
                        type={showPassword ? "text" : "password"}
                        name="confirm-password"
                        onChange={handleChangeRegister}
                        secureTextEntry
                    />
                    {passwordConfirmError && (
                        <Text className="register-input-error">{passwordConfirmError}</Text>
                    )}

                    <TextInput
                        style={styles.textInputs}
                        placeholder="Localidad"
                        type="text"
                        name="location"
                        value={userData.location}
                        onChange={handleChangeRegister}
                    />
                    {locationError && (
                        <Text className="register-input-error">{locationError}</Text>
                    )}

                    <TextInput
                        style={styles.textInputs}
                        placeholder="dd/mm/aaaa"
                        type="date"
                        name="birthDate"
                        value={userData.birthDate}
                        onChange={handleChangeRegister}
                    />
                    {birthDateError && (
                        <Text className="register-input-error">{birthDateError}</Text>
                    )}

                    <TextInput
                        style={styles.btnLogin}
                        type="submit"
                        value="Registrarme"
                        role="button" />

                    {/* <Text style={styles.btnText} onPress={handleLogin}>Registrate</Text> */}


                    <View style={styles.backBtnContainer}>
                        <TouchableOpacity>
                            <Text style={styles.volverText} onPress={() => navigation.navigate('SliderEntrada')}>Volver</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            {/* </form> */}
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
        height: 180,
        justifyContent: 'center'        
    },

    logoGula: {
        resizeMode: 'center',
        width: '60%',
        height: 210
    },

    inputsContainer: {
        alignItems: 'center',
        width: '100%',
        height: 500               
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
        borderRadius: 1,
        width: 320,
        height: 48,
        textAlign: 'center'
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
        width: '100%',
        height: '7%',
    }
})



