import React from 'react'
import {View, StyleSheet, ScrollView } from 'react-native'
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';

export default function HomeFoodSlider() {
    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.menuItemCenter} >
                    <Icon2 name="hamburger" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon3 name="french-fries" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon2 name="hotdog" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon2 name="mug-hot" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon3 name="egg-fried" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon2 name="carrot" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon3 name="food-drumstick" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon3 name="food-steak" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon3 name="food-apple-outline" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon2 name="beer" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon3 name="beer" size={30} color="#17202A" />
                </View>
                <View style={styles.menuItemCenter} >
                    <Icon3 name="food-croissant" size={30} color="#17202A" />
                </View>                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: '7%',
        alignItems: 'center',
        justifyContent: 'center',        
        flexDirection: 'row'                
    },

    menuItemCenter: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#17202A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginHorizontal: 5

    },
})

