import { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ipAddress } from "../ipconfig/ipconfig";
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
//import { Linking } from 'react-native';
//import * as Linking from 'expo-linking';

// Completar el flujo de autenticación en Expo
WebBrowser.maybeCompleteAuthSession();

export default function useLogin() {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  const [isWrongEmail, setIsWrongEmail] = useState(null);
  const [isWrongPassword, setIsWrongPassword] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '48566843235-eilq4kufdji04auhbh0e528b6pbbp9hn.apps.googleusercontent.com',
    scopes: ['profile', 'email'], 
    useProxy: true,  // Agregar esta propiedad
    redirectUri: AuthSession.makeRedirectUri({ useProxy: true }),
  })

  // Función para login con email y contraseña
  const handleSubmitLogin = async () => {
    setIsWrongEmail(null);
    setIsWrongPassword(null);

    // Verificar qué valores tiene userCredentials antes de enviar
    console.log("Credenciales ingresadas:", userCredentials);

    try {
      setLoginLoading(true);
      const response = await fetch(`http://${ipAddress}:3070/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      // Capturar el status y cuerpo de la respuesta
      if (!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        const errorData = await response.json();
        console.error("Detalles del error:", errorData);
        return null;
      }

      const data = await response.json();
      if (data.error) {
        if (data.message === "User non-existent") {
          setIsWrongEmail(true);
        } else if (data.message === "Incorrect password") {
          setIsWrongPassword(true);
        }
        return null;
      }

      await AsyncStorage.setItem("accessToken", data.token);
      return data.token;
    } catch (err) {
      console.error("Error trying to login user");
      return null;
    } finally {
      setLoginLoading(false);
    }
  };

  // Manejar el login con Google
  const handleGoogleLogin = async () => {
    const result = await promptAsync();
    if (result?.type === 'success') {
      const { idToken } = result.authentication;

      try {
        const response = await fetch(`http://${ipAddress}:3070/auth/google`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ token: idToken }),
        });

        const data = await response.json();
        if (data.token) {
          await AsyncStorage.setItem("accessToken", data.token);
          console.log("Token guardado exitosamente en AsyncStorage:", data.token);
        }
      } catch (error) {
        console.error("Error al enviar el token de Google al backend:", error);
      }
    }
  };

  // Maneja el cambio en los inputs de email y password
  const handleChangeLogin = (name, value) => {
    setUserCredentials((prevCredentials) => ({
      ...prevCredentials,
      [name]: value,
    }));
  };

  // Efecto para manejar la respuesta del flujo de Google Sign-In
  useEffect(() => {
    if (response?.type === 'success') {
      handleGoogleLogin();  // Manejar el flujo de Google Login si es exitoso
    }
  }, [response]);

  return {
    userCredentials,
    handleChangeLogin,
    handleSubmitLogin,
    handleGoogleLogin,  // Agregar esta función al retorno del hook
    isWrongEmail,
    isWrongPassword,
    loginLoading,
    request,  // Para saber si el botón de Google está habilitado
    promptAsync,  // Para activar el inicio de sesión con Google
  };
}


