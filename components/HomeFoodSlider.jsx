import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeFoodSlider() {
    return (
        <View style={styles.container}>
            <View style={styles.menuItemCenter} >
                <Icon2 name="hamburger" size={30} color="#E74C3C" />
            </View>
            <View style={styles.menuItemCenter} >
                <Icon3 name="french-fries" size={30} color="#E74C3C" />
            </View>
            <View style={styles.menuItemCenter} >
                <Icon2 name="hotdog" size={30} color="#E74C3C" />
            </View>
            <View style={styles.menuItemCenter} >
                <Icon2 name="mug-hot" size={30} color="#E74C3C" />
            </View>
            <View style={styles.menuItemCenter} >
                <Icon3 name="egg-fried" size={30} color="#E74C3C" />
            </View>
            <View style={styles.menuItemCenter} >
                <Icon2 name="carrot" size={30} color="#E74C3C" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: '12%',
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: '#E6B0AA',
        //borderRadius: 5,
        marginTop: '1%',
        flexDirection: 'row',
        gap: 4
    },

    menuItemCenter: {
        width: 60,
        height: 60,
        //backgroundColor: '#EAEDED',
        borderWidth: 3,
        borderColor: '#707B7C',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
})

