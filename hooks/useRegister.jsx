import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';

function useRegister() {
  const [isRegisterLoading, setIsRegisterLoading] = useState(false);
  const [isRegisterError, setIsRegisterError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState(null);
  const [userNameError, setUserNameError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [birthDateError, setBirthDateError] = useState(null);
  const [userInputsError, setUserInputsError] = useState(null);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const navigation = useNavigation();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    location: "",
    birthDate: "",
    password: "",
  });

  async function handleSubmitRegister(e) {
    e.preventDefault();
    if (userInputsError) {
      return;
    }    

    try {
      setIsRegisterLoading(true);
      const response = await fetch("http://192.168.12.102:3070/auth/register", {      
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      console.log("Estado de la respuesta del backend:", response);

      const data = await response.json();
      console.log("Respuesta del backend:", data);

      if (data.error) {
        console.error("Error en la respuesta del backend:", data.message);
        if (data.message === "email must be an email") {
          setEmailError("El formato del correo electrónico no es válido");
        } else if (data.message === "User already exists") {
          setEmailError("Este e-mail ya está siendo utilizado por otro usuario");
        }
        throw new Error(data.message);
      }

      alert("Registro exitoso! Serás redirigido hacia la página de inicio");
      navigation.navigate('Ingreso')
    } catch (err) {
      console.error("Error durante la solicitud de registro:", err);
      setIsRegisterError(true);
    } finally {
      setIsRegisterLoading(false);
    }
  }

  useEffect(() => {
    if (isFirstRender) {
      setPasswordError(true);
      setPasswordConfirmError(true);
      setUserNameError(true);
      setEmailError(true);
      setLocationError(true);
      setBirthDateError(true);
      setUserInputsError(true);
      setIsFirstRender(false);
      return;
    }
    verifyInputsError();
  }, [userData]);

  function verifyInputsError() {
    if (
      !passwordError &&
      !passwordConfirmError &&
      !userNameError &&
      !emailError &&
      !locationError &&
      !birthDateError
    ) {
      setUserInputsError(null);
    } else {
      setUserInputsError(true);
    }
  }

  function fieldsValidation(value, name) {
    if (name === "name") {
      if (!value.length) {
        setUserNameError("Este campo no puede estar vacio");
      } else if (value.length < 6 || value.length > 30) {
        setUserNameError(
          "Nombre de usuario debe tener un largo de entre 6 y 30 caracteres"
        );
      } else {
        setUserNameError(null);
      }
    }

    if (name === "email") {
      if (!value.length) {
        setEmailError("Este campo no puede estar vacio");
      } else if (!validateEmail(value)) {
        setEmailError("El formato del correo electrónico no es válido");
      } else {
        setEmailError(null);
      }
    }

    if (name === "password") {
      if (!value.length) {
        setPasswordError("Este campo no puede estar vacio");
      } else if (value.length < 8 || value.length > 12) {
        setPasswordError("La contraseña debe contener entre 8 y 12 caracteres");
      } else {
        setPasswordError(null);
      }
    }

    if (name === "confirm-password") {
      if (!value.length) {
        setPasswordConfirmError("Este campo no puede estar vacio");
      } else if (value !== userData.password) {
        setPasswordConfirmError("Las contraseñas no coinciden");
      } else {
        setPasswordConfirmError(null);
      }
    }

    if (name === "location") {
      if (!value.length) {
        setLocationError("Este campo no puede estar vacio");
      } else {
        setLocationError(null);
      }
    }

    if (name === "birthDate") {
      if (!value.length) {
        setBirthDateError("Este campo no puede estar vacio");
      } else {
        setBirthDateError(null);
      }
    }
  }

  const handleChangeRegister = (e) => {
    const { name, value } = e.target;
    if (name !== "confirm-password") {
      setUserData({ ...userData, [name]: value });
    }
    fieldsValidation(value, name);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.com+$/;
    return emailRegex.test(email);
  };

  return {
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
  };
}

export default useRegister;
