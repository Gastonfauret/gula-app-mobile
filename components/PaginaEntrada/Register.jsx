import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useRegister from '../../hooks/useRegister';
import useShowHidePassword from '../../hooks/useShowHidePassword';
import SelectorCiudad from './SelectorCiudad';
import DateTimePicker from '@react-native-community/datetimepicker';
import { string } from 'prop-types';

export default function Register() {

    const { togglePasswordVisibility, showPassword } = useShowHidePassword();
    const [showDatePicker, setShowDatePicker] = useState(false);

    const {
        handleSubmitRegister,
        handleChangeRegister,
        userData,
        setUserData,
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

    const navigation = useNavigation();

    const formatDate = (date) => {
         const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Asegurarse de que haya 2 dígitos
  const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    const handleDateChange = (event, selectedDate) => {
        setShowDatePicker(false); // Cierra el picker después de seleccionar la fecha
        if (selectedDate) {
            // Actualiza el estado con la fecha formateada
            const formattedDate = formatDate(selectedDate);
            setUserData({ ...userData, birthDate: formattedDate });
            handleChangeRegister("birthDate", formattedDate); // Envía la fecha al hook de registro
        }
    };

    return (
        <View style={styles.container}
        >
            <View style={styles.subContainer}>
                <Image source={require('../../assets/GulaBlanco.png')} style={styles.logoGula} />
            </View>

            {/* Input nombre */}
            <View style={styles.inputsContainer}>
                <TextInput
                    type="text"
                    style={styles.textInputs}
                    placeholder="Nombre Completo"
                    //name="name"
                    value={userData.name}
                    onChangeText={(text) => handleChangeRegister("name", text)}
                />

                <View style={styles.errorTextContainer}>
                    {userNameError && (
                        <Text style={styles.errorsText}> {userNameError}</Text>
                    )}
                </View>

                {/* Input Email */}
                <TextInput
                    style={styles.textInputs}
                    placeholder="Email"
                    value={userData.email}
                    //name="email"
                    type="text"
                    onChangeText={(text) => handleChangeRegister("email", text)}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <View style={styles.errorTextContainer}>
                    {emailError && (
                        <Text style={styles.errorsText} >{emailError}</Text>
                    )}
                </View>

                {/* Input Password */}
                <TextInput
                    style={styles.textInputs}
                    placeholder="Contraseña"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userData.password}
                    onChangeText={(text) => handleChangeRegister("password", text)}
                    secureTextEntry
                />
                <View
                    onClick={togglePasswordVisibility}
                >
                    {/*{showPassword ? <IoMdEyeOff /> : <IoMdEye />}*/}
                </View>

                <View style={styles.errorTextContainer}>
                    {passwordError && (
                        <Text style={styles.errorsText}>{passwordError}</Text>
                    )}
                </View>

                {/* Input Confirmacion Password */}
                <TextInput
                    style={styles.textInputs}
                    placeholder="Confirmar contraseña"
                    type={showPassword ? "text" : "password"}
                    name="confirm-password"
                    onChangeText={(text) => handleChangeRegister('confirm-password', text)}
                    secureTextEntry
                />
                <View style={styles.errorTextContainer}>

                    {passwordConfirmError && (
                        <Text style={styles.errorsText}>{passwordConfirmError}</Text>
                    )}
                </View>

                {/* Input Location */}
                <SelectorCiudad
                    value={userData.location}
                    onValueChange={(text) => handleChangeRegister('location', text)}
                    style={styles.locationInput}
                />
                <View style={styles.errorTextContainer}>
                    {locationError && (
                        <Text style={styles.errorsText}>{locationError}</Text>
                    )}
                </View>

                {/* Input Fecha Nacimiento */}

                {/* <TextInput
                    style={styles.textInputs}
                    placeholder="Fecha de nacimiento"
                    value={userData.birthDate}                    
                    onChangeText={(text) => handleChangeRegister({ target: { name: 'birthDate', value: text } })}                               
                /> */}

                <TextInput
                    style={styles.textInputs}
                    placeholder="Fecha de nacimiento"
                    value={userData.birthDate}
                    onTouchStart={() => setShowDatePicker(true)} // Mostrar el date picker cuando se toque el input
                    editable={true} // Deshabilitar la edición directa del input
                />

                {showDatePicker && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={new Date()} // Valor inicial del date picker
                        mode="date"
                        //display="spinner" // Puedes cambiar el modo de visualización según tus preferencias
                        onChange={handleDateChange}
                    />
                )}

                <View style={styles.errorTextContainer}>
                    {birthDateError && (
                        <Text style={styles.errorsText}>{birthDateError}</Text>
                    )}
                </View>

                <TouchableOpacity onPress={handleSubmitRegister} style={styles.btnLogin}>
                    <Text style={styles.btnText}>Registrarme</Text>
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

    errorTextContainer: {
        width: '100%',
        height: '5%',
        alignItems: 'center',
        justifyContent: 'center'
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
        height: '15%',
    },

    errorsText: {
        color: 'black',
        fontSize: 12,
        fontWeight: '700',
        //marginVertical: 6,
    }
})