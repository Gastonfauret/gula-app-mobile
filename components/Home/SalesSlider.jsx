import React from 'react'
import Swiper from 'react-native-swiper';
import { Text, View, StyleSheet, Image } from 'react-native'

export default function SalesSlider() {
  return (

    <View style={styles.container}>
      <Swiper        
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
            <Text style={styles.subtitleCD}>Jueves y viernes de Abril</Text>
            <Text style={styles.subtitleCD}>20% de Descuento</Text>
            <Text style={styles.subtitleCD}>$2000 Tope de Reintegro</Text>
          </View>
        </View>

        <View style={styles.slideMD}>
          <Image
            source={require('../../assets/Logo MODO.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.subtitleMD}>Sabados y Domingos</Text>
            <Text style={styles.subtitleMD}>10% de Descuento</Text>
            <Text style={styles.subtitleMD}>En Combos seleccionados</Text>
          </View>
        </View>

        <View style={styles.slidePP}>
          <Image
            source={require('../../assets/Logo PP.png')}
            style={styles.imagePP}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <Text style={styles.subtitlePP}>Miercoles y Jueves</Text>
            <Text style={styles.subtitlePP}>15% de Reintegro</Text>
            <Text style={styles.subtitlePP}>$1500 Tope Reintegro</Text>
          </View>
        </View>
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '8%',      
    marginTop: '3%' ,
    borderRadius: 5,    
    paddingHorizontal: '2%',    
  },

  slideCD: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#279D2E',
    paddingHorizontal: '9%',    
    borderRadius: 5 
  },

  slideMD: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',  
    backgroundColor: '#008859',
    paddingHorizontal: '9%',
    borderRadius: 5
  },

  slidePP: {
    width: '100%',
    height: '12%',
    flexDirection: 'row',
    alignItems: 'center',    
    backgroundColor: '#5a50f9',
    paddingHorizontal: '10%',
    borderRadius: 5
  },
  
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },  

  subtitleCD: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white'     
  },

  subtitleMD: {
    fontSize: 11,
    textAlign: 'center',
    color: 'white'    
  },

  subtitlePP: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white'  
  },
});
