import React from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'

export default function SalesSlider() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>        
          <View style={styles.imageContainer}>
            <Image source={require('../../assets/Logo CD.png')} style={styles.logoCD} />
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.textCD}>Todos los Sabados de Abril</Text>
            <Text style={styles.textCD}>10% Descuento.</Text>
            <Text style={styles.textCD}>$2000 Tope de Reintegro</Text>
          </View>       
      </ScrollView>
    </View >
  )
}

const styles = StyleSheet.create({
  container: {
    width: '96%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2ECC71',
    borderRadius: 5,
    marginTop: '2%'    
  },  

  logoCD: {
    height: '100%',
  },

  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4
  },

  textCD: {
    fontSize: 11,
    color: 'white',
    fontWeight: 'bold'
  }
})

