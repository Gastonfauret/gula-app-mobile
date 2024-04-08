import React from 'react';
import { View, Text } from 'react-native';

export default function Loading() {
    return (
        <View>
            <Image source={require('../assets/Gula Loading.gif')} style={styles.logoBlanco}/>
        </View>
    )
}
