import { View, Text, Image, } from 'react-native';
import React from 'react';

export default function MainPage() {
    return (
        <View className=' container flex-1 bg-red-600 items-center justify-center py-20'>

            <View className=' flex-1 items-center justify-center gap-y-2'>
                <Text className=' text-white text-xl'>Bienvenido/a!</Text>
                <Text className=' text-white text-xl'>a la primera App</Text>
                <Text className=' text-white text-xl'>de pedidos de</Text>
                <Text className=' text-white text-xl'>Benito Juarez</Text>
            </View>

            <View className=' h-0.5 w-80 bg-white rounded my-16'></View>

            <View className=' flex-1 items-center justify-center gap-3 py-6'>
                <Text className=' text-white text-xl' >Tenes hambre? tenes</Text>
                <Text className=' text-white text-xl' >Tenes</Text>
                <Image source={require('../assets/GulaBlanco.png')} className=' w-56 h-32' />
            </View>

            <View className=' h-0.5 w-80 bg-white rounded my-16'></View>

            <View className=' flex-1 items-center justify-center gap-y-3'>

                <Text className=' text-white text-xl'>Registrate gratis</Text>
                <Text className=' text-white text-xl' >o</Text>
                <Text className=' text-white text-xl'>Ingresa con tu usuario</Text>

            </View>
        </View>

    )
}

