import React, { useEffect, useState } from 'react'
import { View, Modal, StyleSheet, Pressable, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import FoodBanner from '../../Home/SliderCategorias/FoodBannerByCategory';
import useGetFoodByFilter from '../../../hooks/useGetFoodByFilter';
//import useGetFoodsByCategory from '../../hooks/useGetFoodsByCategory';

export default function PaginaModal({ visible, onClose, message = '', food }) {  

  const { foodsByQuery, foodByQueryLoading, foodByQueryError, handleChangeFoodByFilter } = useGetFoodByFilter();

  useEffect(() => {
      if (visible && food && food.trim() !== '') {
          handleChangeFoodByFilter(food);
      }
  }, [visible, handleChangeFoodByFilter, food]);

  if (foodByQueryLoading) {
      return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (foodByQueryError) {
      return <Text>Error: {foodByQueryError}</Text>;
  }

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={visible}
        onRequestClose={onClose}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{message}</Text>

            <FoodBanner foodData={foodsByQuery && foodsByQuery.length > 0 ? foodsByQuery[0] : null} />

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onClose}>
              <Text style={styles.textStyle}>Volver</Text>
            </Pressable>

          </View>

        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)'
  },

  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  button: {
    borderRadius: 20,
    padding: 10    
  },

  buttonClose: {
    backgroundColor: 'white',
  },

  textStyle: {
    color: 'black',    
    textAlign: 'center',
  },

  modalText: {    
    textAlign: 'center',
  },
});

