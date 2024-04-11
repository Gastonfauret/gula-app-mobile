import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Loading() {
    return (
        <View>
            <Image source={require('../assets/Gula Loading.gif')} style={styles.logoBlanco} />
        </View>
    )
}

const styles = StyleSheet.create({
    logoBlanco: {
        width: 265,
        height: 151
    }
});
