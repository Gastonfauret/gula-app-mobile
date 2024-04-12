import React from 'react'
import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, Image } from 'react-native'

export default function SalesSlider() {
  return (

    <View style={styles.container}>
      <Swiper
        style={styles.wrapper}
        autoplay={true}
        autoplayTimeout={5} // Cambia de slide cada 5 segundos
        showsPagination={false} // Oculta los puntos de indicación de los slides
      >
        <View style={styles.slideCD}>
          <Image
            source={require('../../assets/Logo CD.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.subtitle}>Descripción corta 1</Text>
            <Text style={styles.subtitle}>Descripción corta 2</Text>
            <Text style={styles.subtitle}>Descripción corta 3</Text>
          </View>
        </View>

        <View style={styles.slideMD}>
          <Image
            source={require('../../assets/Logo MODO.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.subtitle}>Descripción corta 1</Text>
            <Text style={styles.subtitle}>Descripción corta 2</Text>
            <Text style={styles.subtitle}>Descripción corta 3</Text>
          </View>
        </View>

        <View style={styles.slidePP}>
          <Image
            source={require('../../assets/Logo PP.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.subtitle}>Descripción corta 1</Text>
            <Text style={styles.subtitle}>Descripción corta 2</Text>
            <Text style={styles.subtitle}>Descripción corta 3</Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
};


//const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: '12%',
    //backgroundColor: 'green',
    marginTop: '3%',
    borderRadius: 5
  },

  wrapper: {
    height: '100%',
  },

  slideCD: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#82E0AA'    
  },

  slideMD: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',  
    backgroundColor: '#A9CCE3'  
  },

  slidePP: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',    
    backgroundColor: '#BB8FCE',
    paddingHorizontal: 'auto'
  },
  
  image: {
    width: '50%',
    height: '100%',
  },

  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },

  subtitle: {
    fontSize: 14,
  },
});
