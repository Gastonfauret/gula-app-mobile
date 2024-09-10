import React from 'react'
import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, Image } from 'react-native'

export default function BannerTarjetas() {
  return (

    <View style={styles.container}>
      <Swiper
        autoplay={true}
        autoplayTimeout={5} // Cambia de slide cada 5 segundos
        showsPagination={false} // Oculta los puntos de indicación de los slides
      >
        <View style={styles.slide}>
          <Text style={styles.textBanner}>Publicite Aqui</Text>
        </View>

        <View style={styles.slide}>
          <Text style={styles.textBanner}>Publicite Aqui</Text>
        </View>

        <View style={styles.slide}>
          <Text style={styles.textBanner}>Publicite Aqui</Text>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    marginTop: 10,
    borderRadius: 5,
    paddingHorizontal: 8,
  },

  slide: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',    
    backgroundColor: '#cacfd2',
    paddingHorizontal: 27,
    borderRadius: 5
  },

  textBanner: {
    fontSize: 20,
    fontWeight: "500",
  }
});
