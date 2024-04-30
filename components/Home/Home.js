import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'

import Slider from './SalesSlider';
import FoodSlider from './FoodSlider';
import FloatingMenu from './FloatingMenu';
import Header from './Header';
import SalePlaces from './SalePlaces';
import Camorra from './Camorra';
import FoodPlaces from './FoodPlaces';
import WeeklyMenus from './WeeklyMenus';
import SalesSlider from './SalesSlider';

export default function Home() {    

    const [data, setData] = useState([
        <Header/>,
        <SalesSlider/>,        
        <FoodSlider  />,
        <SalePlaces  />,
        <Camorra  />,
        <FoodPlaces  />,
        <WeeklyMenus  />,
        <FloatingMenu />,
    ])

    return (
        <View style={styles.container}>
        {/* //     <FlatList
        //         data={data}
        //         renderItem={({ item, index }) =>  item}                              
        //     /> */}

            <Header />
            <FloatingMenu />
            <Slider />
            <FoodSlider />
            <SalePlaces />
            <Camorra />
            <FoodPlaces />
            <WeeklyMenus />          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
    }   
})
