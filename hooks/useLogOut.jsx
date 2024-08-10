import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useLogOut() {
  const [logOutLoading, setLogOutLoading] = useState(false); 

  const navigation = useNavigation();

  function handleLogOut() {
    setLogOutLoading(true);

    setTimeout(() => {
      AsyncStorage.clear()
      .then(() => {
        setLogOutLoading(false);
        navigation.navigate('Login')
      })
      .catch(error => {
        setLogOutLoading(false);        
      })      
    }, 1000);
  }

  return { handleLogOut, logOutLoading };
}