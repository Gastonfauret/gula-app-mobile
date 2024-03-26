import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';

export default function Slider() {   

    const navigation = useNavigation();

    return (        
            <Swiper >
                <View style={styles.container}>
                    <Image
                        source={require('../assets/fries.jpg')}
                        style={styles.sliderImg}
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.sliderText}>Tenes hambre?</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <Image
                        source={require('../assets/soda.jpg')}
                        style={styles.sliderImg}
                    />
                    <View style={styles.overlay}>
                        <Text style={styles.sliderText}>Tenes sed?</Text>
                    </View>
                </View>

                <View style={styles.container}>
                    <Image
                        source={require('../assets/burger.jpg')}
                        style={styles.sliderImg}
                    />

                    <View style={styles.overlay}>
                        <Text style={styles.sliderText}>Tenes</Text>
                        <Image
                            source={require('../assets/GulaBlanco.png')}
                            style={styles.logoBlanco}
                        />
                    </View>

                    <View style={styles.overlayBtn}>
                        <TouchableOpacity style={styles.btnSlider} onPress={() => navigation.navigate('Login')}>
                            <Text >Ingresa</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnSlider} onPress={() => navigation.navigate('SignUp')}>
                            <Text>Registrate Gratis</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Swiper>
        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    sliderImg: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        height: '100%'
    },

    sliderText: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 48,
        color: 'white'
    },

    overlay: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    },

    logoBlanco: {
        width: 265,
        height: 150
    },

    overlayBtn: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 50,
        marginTop: 650
    },

    btnSlider: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#F5F5F5',
        width: 144,
        height: 56
    }
});



