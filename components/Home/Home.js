import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
//import { useNavigation } from '@react-navigation/native';
//import Logorojo from '../assets/Logo Gula Rojo.png'

import Slider from './SalesSlider';
import FoodSlider from './FoodSlider';
import FloatingMenu from './FloatingMenu';
import Header from './Header';
import SalePlaces from './SalePlaces';
import Camorra from './Camorra';
import FoodPlaces from './FoodPlaces';
import WeeklyMenus from './WeeklyMenus';

export default function Home() {

    //const navigation = useNavigation();    

    // const [data, setData] = useState([
    //     { component: <Header key="Header" /> },
    //     { component: <FloatingMenu key="FloatingMenu" /> },
    //     { component: <Slider key="Slider" /> },
    //     { component: <FoodSlider key="FoodSlider" /> },
    //     { component: <SalePlaces key="SalePlaces" /> },
    //     { component: <Camorra key="Camorra" /> },
    //     { component: <FoodPlaces key="FoodPlaces" /> },
    //     { component: <WeeklyMenus key="WeeklyMenus" /> }
    // ])

    return (
        <View style={styles.container}>
            {/* <FlatList
                data={data}
                renderItem={({ item }) =>  item.component}
                keyExtractor={(item, index) => index.toString()}               
            /> */}

            <Header />
            <FloatingMenu />
            <Slider />
            <FoodSlider />
            {/* <SalePlaces />
            <Camorra />
            <FoodPlaces /> */}
            <WeeklyMenus />

            {/* <TouchableOpacity>
                <Text style={styles.volverText} onPress={() => navigation.navigate('Slider')}>Volver</Text>
            </TouchableOpacity> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
    },

    // subcontainer: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     width: '96%',
    //     height: '10%',
    //     marginTop: '10%',
    //     borderRadius: 5,
    //     borderWidth: 1,
    //     borderColor: '#D5DBDB'
    // },

    // volverText: {
    //     marginTop: '80%',
    //     marginBottom: '10%'
    // }
})
