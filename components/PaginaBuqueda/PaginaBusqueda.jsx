import React from 'react';
import { View, StyleSheet, TextInput, Text, ActivityIndicator, ScrollView } from 'react-native';
import FloatingMenu from '../Home/MenuFlotante';
import Header from '../Home/Header';
import useGetFoodsByFilter from '../../hooks/useGetFoodByFilter';
import FoodBannerByPlaces from '../Home/SliderLugares/FoodBannerByPlaces';

export default function PaginaBusqueda() {
     const {
         foodsByQuery,
         foodByQueryLoading,
         foodByQueryError,
         handleChangeFoodByFilter,
    //     filterInput,
     } = useGetFoodsByFilter();

    const anadeACarrito = () => {
        // Implementa la lógica para agregar al carrito
        console.log('Añadir al carrito');
    };

    return (
        <>
            <View style={styles.container}>
                <Header />
                <View style={styles.content}>
                    <TextInput
                        placeholder="Ingrese su búsqueda..."                        
                        onChangeText={handleChangeFoodByFilter}
                        style={styles.searchInput}
                    />
                    <ScrollView contentContainerStyle={styles.scrollViewContent}>
                        {foodByQueryLoading && <ActivityIndicator size="large" color="#0000ff" />}
                        {foodByQueryError && <Text style={styles.errorText}>{foodByQueryError}</Text>}
                        {!foodByQueryLoading && foodsByQuery.length === 0 && <Text style={styles.noDataText}>No se encontraron resultados.</Text>}
                        {!foodByQueryLoading && foodsByQuery.length > 0 && foodsByQuery.map((food, index) => (
                            <FoodBannerByPlaces key={index} foodData={food} /> 
                        ))}
                    </ScrollView>
                </View>
                <FloatingMenu />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'start',
        marginBottom: 10,
    },

    content: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
    },
    
    searchInput: {
        width: 375,
        borderRadius: 3,
        height: 60,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        marginBottom: 15,
        marginTop: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    foodDataContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    imageContainer: {
        marginRight: 10,
    },
    foodImg: {
        width: 100,
        height: 100,
    },
    textContainer: {
        justifyContent: 'center',
    },
    foodText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    shopText: {
        fontSize: 14,
        color: 'gray',
    },
    priceText: {
        fontSize: 14,
        color: 'green',
    },
    btnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    scrollViewContent:{
        width: '100%',               
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
        paddingBottom: 70
    },
    
    noDataText: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 30,
        color: 'red',
    },
});
