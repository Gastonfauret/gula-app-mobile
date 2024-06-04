import React, { useState } from 'react';
import { View, TextInput, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useRegister from '../../hooks/useRegister';
import useShowHidePassword from '../../hooks/useShowHidePassword';
import SelectorCiudad from './SelectorCiudad';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function Register() {

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [birthDate, setBirthDate] = useState('');

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        // Formatear la fecha como string
        const formattedDate = date.toISOString().split('T')[0]; // Formato YYYY-MM-DD
        setBirthDate(formattedDate);
        hideDatePicker();
    };

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

    const navigation = useNavigation();

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
                    name="name"
                    value={userData.name}
                    onChangeText={(text) => handleChangeRegister({ target: { name: 'name', value: text } })}
                />
                {userNameError && (
                    <Text style={styles.errorsText}> {userNameError}</Text>
                )}

                {/* Input Email */}
                <TextInput
                    style={styles.textInputs}
                    placeholder="Email"
                    value={userData.email}
                    name="email"
                    type="text"
                    onChangeText={(text) => handleChangeRegister({ target: { name: 'email', value: text } })}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                {emailError && (
                    <Text style={styles.errorsText} >{emailError}</Text>
                )}

                {/* Input Password */}
                <TextInput
                    style={styles.textInputs}
                    placeholder="Contraseña"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userData.password}
                    onChangeText={(text) => handleChangeRegister({ target: { name: 'password', value: text } })}
                    secureTextEntry
                />
                <View
                    onClick={togglePasswordVisibility}
                >
                    {/*{showPassword ? <IoMdEyeOff /> : <IoMdEye />}*/}
                </View>
                {passwordError && (
                    <Text style={styles.errorsText}>{passwordError}</Text>
                )}

                {/* Input Confirmacion Password */}
                <TextInput
                    style={styles.textInputs}
                    placeholder="Confirmar contraseña"
                    type={showPassword ? "text" : "password"}
                    name="confirm-password"
                    onChangeText={(text) => handleChangeRegister({ target: { name: 'confirm-password', value: text } })}
                    secureTextEntry
                />
                {passwordConfirmError && (
                    <Text style={styles.errorsText}>{passwordConfirmError}</Text>
                )}

                {/* Input Location */}
                {/* <TextInput
                    style={styles.textInputs}
                    placeholder="Localidad"
                    type="text"
                    name="location"
                    value={userData.location}
                    onChangeText={(text) => handleChangeRegister({ target: { name: 'location', value: text } })}
                /> */}

                <SelectorCiudad
                    //style={styles.textInputs}
                    type="text"
                    name="location"
                    value={userData.location}
                    onChangeText={(text) => handleChangeRegister({ target: { name: 'location', value: text } })}
                />

                {locationError && (
                    <Text style={styles.errorsText}>{locationError}</Text>
                )}

                {/* Input Fecha Nacimiento */}

            
                    <TextInput
                        style={styles.textInputs}
                        placeholder="Fecha de nacimiento"
                        value={birthDate}
                        onFocus={showDatePicker}    
                        //editable={true}                    
                    />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />                

                {birthDateError && (
                    <Text style={styles.errorsText}>{birthDateError}</Text>
                )}

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

    inputsContainer: {
        alignItems: 'center',
        width: '100%',
        height: 500,
        //gap: 12
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
        marginVertical: 6,        
    }
})